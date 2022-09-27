import { Chart, registerables } from 'chart.js';
import {
  TreemapController,
  TreemapElement,
  type TreemapScriptableContext,
} from 'chartjs-treemap';

import type {
  Treemap,
  Treemap$Sector$RealtimeApi,
} from '@/types/treemap/mod.ts';

type TreemapContext = TreemapScriptableContext & {
  element: Record<string, any>;
};

/**
 * @fixme 페이지 변경할 때는 괜찮은데, 한 페이지에서 데이터 Update할 때 차트 사라지는 문제
 * @see https://github.com/gitgitWi/zum-investing-view-pc-mvp/blob/main/packages/servers/nextjs/components/chart/treemap-chart/ChartjsTreemapAdapter.ts
 */
export class ChartjsTreemapAdapter {
  // @ts-ignore: chart may register treemap
  #treemap!: Chart<'treemap'>;
  #$canvas!: HTMLCanvasElement;

  constructor() {
    Chart.register(...registerables, TreemapController, TreemapElement);
  }

  set$Canvas($canvas: HTMLCanvasElement) {
    if (this.#$canvas && this.#$canvas.id === $canvas.id) return;
    this.#$canvas = $canvas;
    this.#setupChart();
  }

  #setupChart() {
    // @ts-ignore: chart may register treemap
    this.#treemap = new Chart<'treemap'>(this.#$canvas?.getContext('2d')!, {
      type: 'treemap',
      data: {
        datasets: [
          {
            tree: [] as Treemap[],
            groups: ['sectorName', 'stockName'],
            treeLeafKey: 'stockName',
            key: 'marketCap',
            spacing: 0,
            borderWidth: 1,
            borderColor: '#292D33',
            backgroundColor: this.#getBgColor.bind(this),

            /** @description 종목명 */
            labels: {
              display: true,
              align: 'center',
              position: 'middle',
              color: 'white',

              /**
               * 라인별 fontSize, fontWeight 다르게 변경하는 방법 알아보기
               */
              font(ctx: TreemapContext) {
                const size = ctx.element.width * 0.12;
                return {
                  size: size >= 2 ? size : 0,
                  weight: 'bold',
                };
              },

              formatter(ctx: TreemapContext) {
                const { width } = ctx.element;
                if (width < 5) return '';

                const name = ctx.raw.g ?? '';
                // @ts-ignore: ctx.raw may have _data
                const { changedRatio } = ctx.raw._data.children[0];

                return [name, `${Number(changedRatio).toFixed(2)}%`];
              },
            },

            /** @description 업종명 */
            captions: {
              align: 'center',
              font: { size: 15 },
              color: '#999999',
            },
          },
        ],
      },
      options: {
        animation: false,
        animations: false,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: false,
        },
      },
    });
  }

  #getBgColor(ctx: TreemapScriptableContext): string {
    const isStock = ctx.raw?.gs;
    if (!isStock) return '#292D33';

    // @ts-ignore: ctx.raw may have _data
    const { changedRatio } = ctx.raw._data.children[0] as Treemap;
    const grey = '434653';
    if (changedRatio === 0) return '#' + grey;

    /** @todo util 분리 */
    const red = 'F53538';
    const blue = '2F89FF';

    const intRed = [
      parseInt(red.slice(0, 2), 16),
      parseInt(red.slice(2, 4), 16),
      parseInt(red.slice(4, 6), 16),
    ];
    const intBlue = [
      parseInt(blue.slice(0, 2), 16),
      parseInt(blue.slice(2, 4), 16),
      parseInt(blue.slice(4, 6), 16),
    ];
    const intGrey = [
      parseInt(grey.slice(0, 2), 16),
      parseInt(grey.slice(2, 4), 16),
      parseInt(grey.slice(4, 6), 16),
    ];

    if (changedRatio < 0)
      return changedRatio <= -3
        ? `#${blue}`
        : `#${[...new Array(3).fill(false).keys()]
            .map(
              (idx) =>
                (1 + changedRatio / 3) * intGrey[idx] -
                (changedRatio / 3) * intBlue[idx]
            )
            .map(this.#intToHex.bind(this))
            .join('')}`;

    return changedRatio >= 3
      ? `#${red}`
      : `#${[...new Array(3).fill(false).keys()]
          .map(
            (idx) =>
              (1 - changedRatio / 3) * intGrey[idx] +
              (changedRatio / 3) * intRed[idx]
          )
          .map(this.#intToHex.bind(this))
          .join('')}`;
  }

  #intToHex(int: number) {
    const hex = Math.round(int).toString(16);
    return hex.padStart(2, '0');
  }

  updateData(data: Treemap$Sector$RealtimeApi[]) {
    const adaptedData = this.#adaptRealtimeApi(data);
    // @ts-ignore: datasets may have tree
    this.#treemap.data.datasets[0]!.tree = adaptedData;
    this.#treemap.update();
  }

  #adaptRealtimeApi(sectors: Treemap$Sector$RealtimeApi[]): Treemap[] {
    return sectors
      .map(({ industryId, industryName, stocks }) =>
        stocks.map(
          ({
            stockId,
            stockName,
            currentPrice,
            fluctuationPrice,
            fluctuationRate,
            tradingVolume,
            totalValue,
          }) =>
            ({
              sectorId: String(industryId),
              sectorName: industryName,
              stockId,
              stockName,
              price: currentPrice,
              changedPrice: fluctuationPrice,
              changedRatio: fluctuationRate,
              volume: tradingVolume,
              marketCap: totalValue,
            } as Treemap)
        )
      )
      .flat();
  }

  destroy() {
    this.#treemap.destroy();
  }
}

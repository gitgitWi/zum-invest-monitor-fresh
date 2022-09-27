import { useEffect, useState, useRef } from 'preact/hooks';

import { SubtitleH3 } from '@/components/atoms/mod.ts';
import {
  ChartCanvas,
  ChartjsTreemapAdapter,
} from '@/components/treemap-chart/mod.ts';

interface ChartProps {
  data: any;
}

const { trunc } = Math;
const styles = {
  chartWrapper: 'w-full h-full mb-2 flex flex-col justify-start items-start',
};

export const treemapAdapter = new ChartjsTreemapAdapter();

/**
 * @todo 재사용 가능하도록
 */
export default function Chart({ data }: ChartProps) {
  const $chartWrapper = useRef<HTMLDivElement>(null);
  const $chart = useRef<HTMLCanvasElement>(null);
  const [chartSizes, setChartSizes] = useState({ width: 1200, height: 900 });

  useEffect(() => {
    if (!$chartWrapper.current) return;
    const { width, height } =
      // @ts-ignore: chart.current exist
      $chartWrapper.current.getBoundingClientRect();
    setChartSizes({
      width,
      height: height >= width * 1.5 ? trunc(width / 2) : height,
    });

    // @ts-ignore: $.current maybe has base
    treemapAdapter.set$Canvas($chart.current!.base);

    treemapAdapter.updateData(data);
    return () => {};
  }, [$chart]);

  return (
    <div class={styles.chartWrapper} ref={$chartWrapper}>
      <SubtitleH3 title="Chart 렌더링 테스트" />
      <ChartCanvas
        width={chartSizes.width}
        height={chartSizes.height}
        ref={$chart}
      />
    </div>
  );
}

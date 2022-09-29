import { SubtitleH3 } from '@/components/atoms/mod.ts';
import { TreemapImageLi } from '@/components/molecules/index.ts';

const treemapImageUrls = {
  top1000: {
    mobile:
      'https://chart-finance.zum.com/api/v2/chart/treemap-mini/domestic/all?device=mobile',
    startZum:
      'https://chart-finance.zum.com/api/v2/chart/treemap-mini/domestic/all?device=pc-start',
  },
  kospi: {
    pc: 'https://chart-finance.zum.com/api/chart/treemap-mini/domestic',
    mobile:
      'https://chart-finance.zum.com/api/v2/chart/treemap-mini/domestic/all?device=mobile',
    startZum:
      'https://chart-finance.zum.com/api/v2/chart/treemap-mini/domestic/all?device=pc-start',
  },
  kosdaq: {
    mobile:
      'https://chart-finance.zum.com/api/v2/chart/treemap-mini/domestic/kosdaq?device=mobile',
    startZum:
      'https://chart-finance.zum.com/api/v2/chart/treemap-mini/domestic/kosdaq?device=pc-start',
  },
};

export default function TreemapImageValidator() {
  return (
    <div class="p-4 pt-0 mt-4 max-w-5xl flex flex-col justify-start">
      <SubtitleH3 title="증시맵 이미지" />

      <ul class="w-full flex flex-col">
        {Object.entries(treemapImageUrls)
          .map(([market, devices]) =>
            Object.entries(devices).map(([device, imageUrl]) => (
              <TreemapImageLi
                title={`${device}-${market}`.toUpperCase()}
                imgSrc={imageUrl}
              />
            ))
          )
          .flat()}
      </ul>
    </div>
  );
}

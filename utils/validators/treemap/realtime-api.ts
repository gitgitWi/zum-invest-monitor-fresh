import { Treemap$Sector$RealtimeApi } from '@/types/treemap/mod.ts';
import { ValidatorResult } from '@/types/validator/mod.ts';

export const getSectorsNumber = (
  apiData: Treemap$Sector$RealtimeApi[]
): ValidatorResult => {
  const sectorIds = apiData.map(({ industryId }) => industryId);

  return {
    isValid: sectorIds.length === new Set(sectorIds).size,
    values: { sectorIds, sectorIdLength: sectorIds.length },
    message: '중복 업종 확인',
  };
};

export const getStocksNumber = (
  apiData: Treemap$Sector$RealtimeApi[]
): ValidatorResult => {
  const stockIds = apiData
    .map(({ stocks }) => stocks.map(({ stockId }) => stockId))
    .flat(Infinity);

  return {
    isValid: stockIds.length === new Set(stockIds).size,
    values: { stockIds, stockIdLength: stockIds.length },
    message: '중복 종목 확인',
  };
};

import {
  Treemap$Sector$RealtimeApi,
  Treemap$Stock$RealtimeApi,
} from '@/types/treemap/mod.ts';
import { ValidatorResult } from '@/types/validator/mod.ts';

export const getSectorsNumber = (
  apiData: Treemap$Sector$RealtimeApi[]
): ValidatorResult => {
  const sectors = apiData
    .map(({ industryId, industryName }) => ({
      industryId,
      industryName,
    }))
    .sort((a, b) => a.industryId - b.industryId);
  const sectorIds = sectors.map(({ industryId }) => industryId);

  return {
    isValid: sectorIds.length === new Set(sectorIds).size,
    values: { sectors, sectorIdLength: sectors.length },
    message: '중복 업종 확인',
  };
};

export const getStocksNumber = (
  apiData: Treemap$Sector$RealtimeApi[]
): ValidatorResult => {
  const stocks = apiData
    .map(({ stocks }) =>
      stocks.map(({ stockId, stockName, fluctuationRate }) => ({
        stockId,
        stockName,
        fluctuationRate,
      }))
    )
    .flat(2)
    .sort((a, b) => a.stockId.localeCompare(b.stockId));

  const stockIds = stocks.map(({ stockId }) => stockId);

  return {
    isValid: stockIds.length === new Set(stockIds).size,
    values: { stocks, stockIdLength: stockIds.length },
    message: '중복 종목 확인',
  };
};

export const getStocksHaveInvalidProp = (
  apiData: Treemap$Sector$RealtimeApi[]
): ValidatorResult => {
  const invalidStocks: Partial<Treemap$Stock$RealtimeApi>[] = apiData
    .map(({ stocks }) =>
      stocks.map(
        ({
          stockId,
          stockName,
          currentPrice,
          fluctuationRate,
          fluctuationPrice,
          tradingVolume,
          totalValue,
        }) => ({
          stockId,
          stockName,
          currentPrice,
          fluctuationRate,
          fluctuationPrice,
          tradingVolume,
          totalValue,
        })
      )
    )
    .flat(2)
    .filter(
      ({
        stockId,
        stockName,
        currentPrice,
        fluctuationRate,
        fluctuationPrice,
        tradingVolume,
        totalValue,
      }) => {
        if (!stockId || !stockName) return true;

        if (
          typeof currentPrice !== 'number' ||
          typeof fluctuationRate !== 'number' ||
          typeof fluctuationPrice !== 'number' ||
          typeof tradingVolume !== 'number' ||
          typeof totalValue !== 'number' ||
          currentPrice <= 0 ||
          tradingVolume < 0 ||
          totalValue <= 0
        )
          return true;

        return false;
      }
    );

  return {
    isValid: invalidStocks.length === 0,
    values: { invalidStocks },
    message: '비정상 값 들어있는 종목 확인',
  };
};

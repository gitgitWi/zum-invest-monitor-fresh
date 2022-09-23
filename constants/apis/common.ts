export const BASE_URLS = {
  REALTIME: `http://api.finance-realtime.zum.com`,
  NORMAL: `https://api.finance.zum.com`,
  INVESTING_VIEW: `https://api.investingview.io`,
} as const;

export const MARKET_KR_NAMES = {
  kospi: 'kospi',
  kosdaq: 'kosdaq',
} as const;

export type Market$Kr = keyof typeof MARKET_KR_NAMES;

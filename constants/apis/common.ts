/** @description 실행환경 protocol과 맞춰야 함 */
const protocol = 'https';

export const BASE_URLS = {
  REALTIME: `${protocol}://api.finance-realtime.zum.com`,
  NORMAL: `${protocol}://api.finance.zum.com`,
  INVESTING_VIEW: `${protocol}://api.investingview.io`,
} as const;

export const MARKET_KR_NAMES = {
  kospi: 'kospi',
  kosdaq: 'kosdaq',
} as const;

export type Market$Kr = keyof typeof MARKET_KR_NAMES;

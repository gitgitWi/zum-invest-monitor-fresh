import { BASE_URLS, type Market$Kr, MARKET_KR_NAMES } from './common.ts';

const treemapPath = { realtime: '/mekko-chart' };

const getRealtimeApiSearchParams = (market: Market$Kr) =>
  new URLSearchParams({ marketType: market }).toString();

export const treemapRealtimeApis = Object.keys(MARKET_KR_NAMES).map(
  (
    market,
  ) => [
    market,
    `${BASE_URLS.REALTIME}${treemapPath.realtime}?${
      getRealtimeApiSearchParams(
        market as Market$Kr,
      )
    }`,
  ],
).reduce(
  (acc, [market, apiUrl]) => Object.assign(acc, { [market]: apiUrl }),
  {},
) as Record<Market$Kr, string>;

export const treemapRealtimeApisClient = Object.keys(MARKET_KR_NAMES)
  .map((
    market,
  ) => [market, `/api/treemap/api/be?${new URLSearchParams({ market })}`])
  .reduce(
    (acc, [market, apiUrl]) => Object.assign(acc, { [market]: apiUrl }),
    {},
  ) as Record<Market$Kr, string>;
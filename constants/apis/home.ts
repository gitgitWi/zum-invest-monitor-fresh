import { BASE_URLS } from './common.ts';

export const HOME_APIS = {
  homeFront: `${BASE_URLS.FRONT_SERVER}/api/home`,
  categoryNewsFront: `${BASE_URLS.FRONT_SERVER}/api/home/category-news`,
} as const;

export const HOME_APIS_CLIENT = {
  homeFront: `/api/home/fe?type=home`,
  categoryNewsFront: `/api/home/fe?type=category-news`,
};

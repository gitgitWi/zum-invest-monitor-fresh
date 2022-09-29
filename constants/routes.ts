interface PageRoute {
  name: string;
  krName?: string;
  to: string;
}

const validatorsHomeRoute = '/validators';

export const validatorPageRoutes: Readonly<PageRoute[]> = [
  {
    name: 'treemap-apis-validator',
    krName: '국내 증시맵 API',
    to: `${validatorsHomeRoute}/treemap-apis`,
  },
  {
    name: 'treemap-images-validator',
    krName: '국내 증시맵 이미지',
    to: `${validatorsHomeRoute}/treemap-images`,
  },
  {
    name: 'main-page-validator',
    krName: '투자홈 API',
    to: `${validatorsHomeRoute}/main-page-api`,
  },
];

export const pageRoutes: Readonly<PageRoute[]> = [
  {
    name: 'home',
    to: '/',
  },
  ...validatorPageRoutes,
] as const;

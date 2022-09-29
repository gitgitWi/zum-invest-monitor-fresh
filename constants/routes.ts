interface PageRoute {
  name: string;
  krName?: string;

  to: string;
}

const validatorsHomeRoute = '/validators';

export const validatorPageRoutes: Readonly<PageRoute[]> = [
  // {
  //   name: 'validators-home',
  //   krName: '홈',
  //   to: validatorsHomeRoute,
  // },
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
];

export const pageRoutes: Readonly<PageRoute[]> = [
  {
    name: 'home',
    to: '/',
  },
  ...validatorPageRoutes,
] as const;

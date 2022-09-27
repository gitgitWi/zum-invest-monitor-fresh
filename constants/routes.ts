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
    name: 'treemap-validators',
    krName: '증시맵 API',
    to: `${validatorsHomeRoute}/treemap`,
  },
];

export const pageRoutes: Readonly<PageRoute[]> = [
  {
    name: 'home',
    to: '/',
  },
  ...validatorPageRoutes,
] as const;

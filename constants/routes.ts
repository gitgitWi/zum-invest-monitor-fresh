interface PageRoute {
  name: string;
  to: string;
}

const validatorsHomeRoute = '/validators';

export const validatorPageRoutes: Readonly<PageRoute[]> = [
  {
    name: 'validators-home',
    to: validatorsHomeRoute,
  },
  {
    name: 'treemap-validators',
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

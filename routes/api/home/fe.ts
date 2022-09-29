import { Handlers } from '$fresh/server.ts';

import { HOME_APIS } from '@/constants/apis/mod.ts';

export const handler: Handlers = {
  async GET(req) {
    const type = new URLSearchParams(req.url).get('type') || '';

    const data = await fetch(
      type === 'category-news'
        ? HOME_APIS.categoryNewsFront
        : HOME_APIS.homeFront
    ).then((res) => res.json());

    return new Response(JSON.stringify(data));
  },
};

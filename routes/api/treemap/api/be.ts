import { Handlers } from '$fresh/server.ts';

import { Market$Kr } from '@/constants/apis/common.ts';
import { treemapRealtimeApis } from '@/constants/apis/mod.ts';

/**
 * - /api/treemap/api/be?market={kospi|kosdaq}
 */
export const handler: Handlers = {
  async GET(req) {
    const { searchParams } = new URL(req.url);

    const market = searchParams.get('market') || '';
    if (!market || !(market in treemapRealtimeApis)) {
      return new Response(JSON.stringify({ data: 'INVALID market name' }), {
        status: 404,
      });
    }

    const data = await fetch(treemapRealtimeApis[market as Market$Kr]).then(
      (res) => res.json()
    );

    return new Response(JSON.stringify(data));
  },
};

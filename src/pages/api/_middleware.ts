import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  if (req.method !== 'POST') {
    return new Response(null, {
      status: 405
    });
  }
};

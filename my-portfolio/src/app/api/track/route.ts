// src/app/api/track/route.ts
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || null;
  const userAgent = request.headers.get('user-agent') || null;

  try {
    const url = new URL(request.url);
    const path = url.searchParams.get('path') || '/';

    const { error } = await supabase.from('visitor_logs').insert([
      {
        ip,
        user_agent: userAgent,
        path,
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ status: 'logged' });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'requested path is invalid' }, { status: 400 });
  }
}

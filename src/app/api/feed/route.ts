import { NextResponse } from 'next/server';
import { getFeed } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const feed = getFeed();
    return NextResponse.json({
      success: true,
      count: feed.length,
      profiles: feed,
    });
  } catch (error) {
    console.error('API /feed error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve profile feed' },
      { status: 500 }
    );
  }
}

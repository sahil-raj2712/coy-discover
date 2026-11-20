import { NextResponse } from 'next/server';
import { getMatches } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const matches = getMatches();
    return NextResponse.json({
      success: true,
      count: matches.length,
      matches,
    });
  } catch (error) {
    console.error('API /matches error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve matches' },
      { status: 500 }
    );
  }
}

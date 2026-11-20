import { NextRequest, NextResponse } from 'next/server';
import { recordSwipe } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { profileId, action } = body;

    if (!profileId || !['like', 'pass'].includes(action)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid payload: profileId and action ("like" | "pass") are required',
        },
        { status: 400 }
      );
    }

    const result = recordSwipe(profileId, action);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      action,
      profileId,
      matched: result.matched,
      match: result.match || null,
    });
  } catch (error) {
    console.error('API /swipe error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process swipe' },
      { status: 500 }
    );
  }
}

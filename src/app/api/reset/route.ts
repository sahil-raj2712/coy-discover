import { NextResponse } from 'next/server';
import { resetDemo } from '@/lib/db';

export async function POST() {
  try {
    const result = resetDemo();
    return NextResponse.json({
      success: true,
      message: 'Demo store reset successfully',
      totalProfiles: result.totalProfiles,
    });
  } catch (error) {
    console.error('API /reset error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to reset demo store' },
      { status: 500 }
    );
  }
}

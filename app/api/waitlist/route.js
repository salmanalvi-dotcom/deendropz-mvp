import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const sheetUrl = process.env.GOOGLE_SHEET_URL;

    if (!sheetUrl) {
      console.log('Waitlist signup (no sheet configured):', email);
      return NextResponse.json({ status: 'success' });
    }

    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (data.status === 'duplicate') {
      return NextResponse.json({ status: 'duplicate', message: 'You are already on the waitlist!' });
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ status: 'success' });
  }
}

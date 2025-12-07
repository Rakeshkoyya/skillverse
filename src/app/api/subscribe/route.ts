import { NextRequest, NextResponse } from 'next/server';
import { sendToGoogleSheets, formatSubscriptionData } from '@/lib/sheets';

interface SubscribeData {
  name: string;
  email: string;
  mobile?: string;
  city: string;
  role: string;
  message?: string;
  type: 'webinar' | 'subscribe';
}

export async function POST(request: NextRequest) {
  try {
    const data: SubscribeData = await request.json();

    // Validate required fields based on type
    if (data.type === 'subscribe') {
      // For simple subscription, only email is required
      if (!data.email) {
        return NextResponse.json(
          { success: false, error: 'Email is required' },
          { status: 400 }
        );
      }
    } else {
      // For webinar, require full details
      if (!data.name || !data.email || !data.city || !data.role) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('New subscription:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Send to Google Sheets (if configured)
    const sheetUrl = process.env.GOOGLE_SHEETS_SUBSCRIBE_URL;
    if (sheetUrl) {
      const formattedData = formatSubscriptionData(data);
      await sendToGoogleSheets(sheetUrl, formattedData);
    }

    // TODO: Add email notification
    // TODO: Add to email marketing platform (e.g., Mailchimp, SendGrid)

    return NextResponse.json({
      success: true,
      message: data.type === 'webinar' 
        ? 'Successfully registered for the webinar!' 
        : 'Successfully subscribed for updates!',
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Skillverse Subscription API',
    endpoints: {
      POST: 'Submit subscription/webinar registration',
    },
  });
}

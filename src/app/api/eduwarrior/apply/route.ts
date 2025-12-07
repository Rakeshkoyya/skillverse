import { NextRequest, NextResponse } from 'next/server';
import { sendToGoogleSheets, formatEduWarriorData } from '@/lib/sheets';

interface EduWarriorApplicationData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  education: string;
  expertise: string;
  experience?: string;
  motivation: string;
  availability: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: EduWarriorApplicationData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.mobile || !data.city || !data.education || !data.expertise || !data.motivation || !data.availability) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate mobile number (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(data.mobile)) {
      return NextResponse.json(
        { success: false, error: 'Invalid mobile number. Please enter 10 digits.' },
        { status: 400 }
      );
    }

    // Log application
    console.log('New EduWarrior Application:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Send to Google Sheets (if configured)
    const sheetUrl = process.env.GOOGLE_SHEETS_EDUWARRIOR_URL;
    if (sheetUrl) {
      const formattedData = formatEduWarriorData(data);
      await sendToGoogleSheets(sheetUrl, formattedData);
    }

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to applicant

    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest in becoming an EduWarrior! We will review your application and contact you soon.',
    });

  } catch (error) {
    console.error('EduWarrior application error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Skillverse EduWarrior Application API',
    endpoints: {
      POST: 'Submit EduWarrior application',
    },
  });
}

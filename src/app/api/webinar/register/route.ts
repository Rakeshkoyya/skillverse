import { NextRequest, NextResponse } from 'next/server';
import { sendToGoogleSheets, formatWebinarRegistrationData } from '@/lib/sheets';

interface WebinarRegistrationData {
  parentName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  numberOfChildren: string;
  childAgeGroup: string;
  educationStage: string;
  parentConcerns: string[];
  schoolSystemOpinion: string;
  lifeSkillsAwareness: string;
  skillsNeeded: string[];
  isDecisionMaker: string;
  enrollmentReadiness: string;
  consent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const data: WebinarRegistrationData = await request.json();

    // Validate required fields
    const requiredFields = [
      'parentName', 'mobile', 'email', 'city', 'state',
      'numberOfChildren', 'childAgeGroup', 'educationStage',
      'schoolSystemOpinion', 'lifeSkillsAwareness',
      'isDecisionMaker', 'enrollmentReadiness'
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof WebinarRegistrationData]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate arrays
    if (!data.parentConcerns || data.parentConcerns.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please select at least one concern about your child' },
        { status: 400 }
      );
    }

    if (!data.skillsNeeded || data.skillsNeeded.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please select at least one skill your child needs' },
        { status: 400 }
      );
    }

    // Validate consent
    if (!data.consent) {
      return NextResponse.json(
        { success: false, error: 'Please accept the consent to proceed' },
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

    // Log registration
    console.log('New Webinar Registration:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Send to Google Sheets (if configured)
    const sheetUrl = process.env.GOOGLE_SHEETS_WEBINAR_URL;
    if (sheetUrl) {
      const formattedData = formatWebinarRegistrationData(data);
      await sendToGoogleSheets(sheetUrl, formattedData);
    }

    return NextResponse.json({
      success: true,
      message: 'Registration successful! You will receive the webinar link on WhatsApp.',
    });

  } catch (error) {
    console.error('Webinar registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Skillverse Webinar Registration API',
    webinar: {
      title: 'SKILLVERSE - India\'s First Skill-Focused Awareness Webinar for Parents',
      date: '29 December 2025',
      audience: 'Parents of students',
      mode: 'Live Webinar (Online)',
    },
    endpoints: {
      POST: 'Register for the webinar',
    },
  });
}

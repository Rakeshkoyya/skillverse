/**
 * Utility functions for sending data to Google Sheets
 * 
 * Setup Instructions:
 * 
 * Option 1: Using Google Apps Script (Free)
 * ==========================================
 * 1. Create a Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code:
 * 
 * ```javascript
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   
 *   sheet.appendRow([
 *     new Date(),
 *     data.name,
 *     data.email,
 *     data.mobile || '',
 *     data.city,
 *     data.role || data.education || '',
 *     data.type || 'eduwarrior',
 *     data.message || data.motivation || '',
 *     data.expertise || '',
 *     data.experience || '',
 *     data.availability || ''
 *   ]);
 *   
 *   return ContentService.createTextOutput(JSON.stringify({success: true}))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 * ```
 * 
 * 4. Deploy as Web App (Anyone with link can access)
 * 5. Copy the web app URL to your .env file
 * 
 * Option 2: Using Sheet.best (Easy, Paid)
 * =========================================
 * 1. Visit https://sheet.best
 * 2. Connect your Google Sheet
 * 3. Get the API endpoint
 * 4. Add to .env file
 * 
 * Option 3: Using Sheety (Free tier available)
 * =============================================
 * 1. Visit https://sheety.co
 * 2. Connect your Google Sheet
 * 3. Generate API endpoint
 * 4. Add to .env file
 */

interface SheetData {
  [key: string]: any;
}

/**
 * Send data to Google Sheets via webhook URL
 */
export async function sendToGoogleSheets(
  url: string | undefined,
  data: SheetData
): Promise<boolean> {
  if (!url) {
    console.warn('Google Sheets URL not configured');
    return false;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('Failed to send to Google Sheets:', response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    return false;
  }
}

/**
 * Format subscription data for Google Sheets
 */
export function formatSubscriptionData(data: any) {
  return {
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    mobile: data.mobile || '',
    city: data.city,
    role: data.role,
    type: data.type,
    message: data.message || '',
  };
}

/**
 * Format EduWarrior application data for Google Sheets
 */
export function formatEduWarriorData(data: any) {
  return {
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    mobile: data.mobile,
    city: data.city,
    education: data.education,
    expertise: data.expertise,
    experience: data.experience || '',
    motivation: data.motivation,
    availability: data.availability,
  };
}

/**
 * Format Webinar Registration data for Google Sheets
 */
export function formatWebinarRegistrationData(data: any) {
  return {
    timestamp: new Date().toISOString(),
    parentName: data.parentName,
    mobile: data.mobile,
    email: data.email,
    city: data.city,
    state: data.state,
    numberOfChildren: data.numberOfChildren,
    childAgeGroup: data.childAgeGroup,
    educationStage: data.educationStage,
    parentConcerns: Array.isArray(data.parentConcerns) ? data.parentConcerns.join(', ') : data.parentConcerns,
    schoolSystemOpinion: data.schoolSystemOpinion,
    lifeSkillsAwareness: data.lifeSkillsAwareness,
    skillsNeeded: Array.isArray(data.skillsNeeded) ? data.skillsNeeded.join(', ') : data.skillsNeeded,
    isDecisionMaker: data.isDecisionMaker,
    enrollmentReadiness: data.enrollmentReadiness,
    consent: data.consent ? 'Yes' : 'No',
  };
}

interface EmailData {
  to: string;
  subject: string;
  htmlBody: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

  console.log('📧 Email Sending Started');
  console.log('Script URL:', scriptUrl);
  console.log('Email To:', data.to);
  console.log('Subject:', data.subject);

  if (!scriptUrl || scriptUrl === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
    console.error('❌ Google Apps Script URL not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    console.log('📤 Sending request to Google Apps Script...');
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script Web App
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('✅ Request sent successfully (no-cors mode, response not available)');
    // Since no-cors mode doesn't give us response data, we assume success if no error is thrown
    return { success: true };
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

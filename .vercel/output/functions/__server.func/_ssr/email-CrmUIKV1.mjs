async function sendEmail(data) {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbyYcP7RYVblm2fGpjW294wTvUt84cXXSGs3G1hnoDSJTfTCMOMUqyjKd4JmHgjGE8z3Xw/exec";
  console.log("📧 Email Sending Started");
  console.log("Script URL:", scriptUrl);
  console.log("Email To:", data.to);
  console.log("Subject:", data.subject);
  try {
    console.log("📤 Sending request to Google Apps Script...");
    const response = await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      // Required for Google Apps Script Web App
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log("✅ Request sent successfully (no-cors mode, response not available)");
    return { success: true };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
export {
  sendEmail as s
};

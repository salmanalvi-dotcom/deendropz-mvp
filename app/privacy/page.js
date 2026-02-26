export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, sans-serif', color: '#1a1a1a', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Privacy Policy</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Last updated: February 23, 2026</p>

      <p>DeenDropz.AI ("we", "our", or "us") is committed to protecting the privacy of our users, especially children. This Privacy Policy explains how we collect, use, and protect information when you use our mobile application and website.</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Information We Collect</h2>
      <p><strong>Chat Messages:</strong> When you use the AskDeen feature, your questions are sent to our AI service to generate responses. We do not permanently store chat conversations or associate them with any personal identity.</p>
      <p><strong>No Account Required:</strong> DeenDropz does not require user registration, login, or any personal information to use the app.</p>
      <p><strong>No Personal Data Collection:</strong> We do not collect names, email addresses, phone numbers, photos, or location data from users.</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Children's Privacy</h2>
      <p>DeenDropz is designed for children aged 8-16. We take children's privacy seriously and comply with applicable children's privacy laws including COPPA (Children's Online Privacy Protection Act).</p>
      <p>We do not knowingly collect personal information from children under 13. No account creation is required, and no personal data is stored.</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Data Storage & Security</h2>
      <p>Chat messages are processed in real-time by our AI service and are not permanently stored. Lesson progress and quiz scores are stored locally on your device only and are not transmitted to our servers.</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Third-Party AI Service</h2>
      <p><strong>What data is sent:</strong> When you use the AskDeen chat feature, the text of your questions is sent to Anthropic (our AI provider) for processing. No other data — such as your name, device information, or location — is sent.</p>
      <p><strong>Who receives the data:</strong> Your chat questions are sent to Anthropic, PBC (San Francisco, CA). Anthropic processes the text to generate Islamic educational responses. Visit <a href="https://www.anthropic.com/privacy" style={{ color: '#1B5E20' }}>anthropic.com/privacy</a> for their privacy policy.</p>
      <p><strong>How data is used:</strong> Your questions are used solely to generate a response in real-time. Anthropic does not use API inputs to train their models. Messages are not stored, linked to your identity, or shared with any other parties.</p>
      <p><strong>User consent:</strong> The app requests your explicit permission before sending any data to Anthropic's AI service. You may decline and still use all other features of the app (lessons, quizzes, etc.).</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Advertising & Tracking</h2>
      <p>DeenDropz does not display advertisements. We do not use tracking cookies, analytics, or any third-party advertising services.</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

      <h2 style={{ fontSize: '22px', marginTop: '32px', marginBottom: '12px' }}>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p><strong>Email:</strong> privacy@deendropz.ai</p>
      <p><strong>Website:</strong> deendropz.ai</p>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f0', borderRadius: '12px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>© 2026 DeenDropz.AI. All rights reserved.</p>
      </div>
    </div>
  );
}

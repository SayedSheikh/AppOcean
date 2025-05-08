import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <title>AppOcean | Policy</title>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information when you use AppOcean.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and usage data when you register or interact with our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Data
      </h2>
      <p className="mb-4">
        We use your data to provide and improve our services, respond to your
        inquiries, and send relevant updates. We do not sell your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your data from
        unauthorized access or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        Our platform may use cookies to enhance user experience. You can control
        cookie preferences through your browser settings.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;

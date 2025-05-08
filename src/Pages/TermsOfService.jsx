import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 w-11/12">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to AppOcean! By accessing or using our app store, you agree to
        be bound by these Terms of Service. If you do not agree to these terms,
        please do not use the app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Use of Our Services
      </h2>
      <p className="mb-4">
        You agree to use the services only for lawful purposes. Any misuse, such
        as distributing harmful software or violating intellectual property
        rights, will result in account termination.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Developer Responsibilities
      </h2>
      <p className="mb-4">
        Developers submitting apps must ensure their apps are secure,
        functional, and free from malware. AppOcean reserves the right to remove
        any app at its discretion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Modifications</h2>
      <p className="mb-4">
        We may update these terms from time to time. Continued use of the
        platform implies acceptance of the updated terms.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsOfService;

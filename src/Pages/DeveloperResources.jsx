import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const DeveloperResources = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Developer Resources</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-white">
          🚀 Getting Started
        </h2>
        <p className="mb-4 text-gray-300">
          Want to publish your app on AppOcean? Start by creating a developer
          account and following our submission process. Make sure your app meets
          our guidelines for quality and security.
        </p>
        <Link
          onClick={() =>
            toast(
              "🚧 Submit App is currently under maintenance. Please try again later.",
              {
                icon: "⚠️",
                style: {
                  borderRadius: "8px",
                  background: "#fff",
                  color: "#333",
                },
              }
            )
          }
          className="btn btn-primary btn-sm">
          Submit Your App
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-white">
          📄 Documentation
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <a href="#" className="link link-hover">
              API Integration Guide (Coming Soon)
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover">
              App Validation Checklist
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover">
              Monetization & Licensing
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-white">
          📦 App Requirements
        </h2>
        <p className="mb-2">Before submitting, ensure your app:</p>
        <ul className="list-disc list-inside pl-4 space-y-1 text-gray-300">
          <li>Is free of malware or malicious scripts</li>
          <li>Has proper versioning and metadata</li>
          <li>Follows UI/UX standards for accessibility</li>
          <li>Contains a valid privacy policy (if applicable)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-white">🛠 Support</h2>
        <p className="text-gray-300">
          If you're facing issues or need help, reach out via our{" "}
          <a href="mailto:support@appocean.dev?subject=Help Needed&body=Please describe your issue here.">
            Email Us
          </a>
          or join our{" "}
          <a href="#" className="link link-hover">
            Discord community
          </a>
          .
        </p>
      </section>

      <section className="mt-10 text-sm text-gray-400">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </div>
  );
};

export default DeveloperResources;

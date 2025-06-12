// src/pages/LegalDocumentsPage.jsx
import React, { useState } from "react";

// Helper component for the two-column section layout using Flexbox
const PolicySection = ({ title, children }) => (
  <div className="flex flex-col md:flex-row md:space-x-8 py-5 border-b border-[var(--color-border-light)] border-opacity-60 last:border-b-0">
    <div className="md:w-1/3 flex-shrink-0 mb-2 md:mb-0">
      <h3 className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
        {title}
      </h3>
    </div>
    <div className="md:w-2/3 text-sm leading-relaxed text-[var(--color-text-body)] space-y-3">
      {children}
    </div>
  </div>
);

const LegalDocumentsPage = ({ navigateTo }) => {
  const [activePolicy, setActivePolicy] = useState("privacy");
  const today = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const policies = {
    privacy: {
      title: "PRIVACY POLICY",
      subtitle: "OUR PERSONAL STATEMENT, COOKIES, AND THIRD-PARTIES.",
      content: (
        <div className="space-y-4">
          <PolicySection title="1. Personal Statement">
            <p>
              We are committed to creating a secure and user-friendly experience
              for every customer. To achieve this, we aim to be as clear as
              possible about our policies, as is evident by our transparent
              Terms and Conditions. When you use our site, uHired.com, some of
              your personal information supplied during your order or by means
              of our cookies policy may be gathered.
            </p>
          </PolicySection>
          <PolicySection title="2. What Data We Collect">
            <p>
              We collect various types of data to provide and improve our
              services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number, location.
              </li>
              <li>
                <strong>Professional Information:</strong> CVs/resumes
                (including education, work experience, skills), job preferences
                (desired roles, industries, salary expectations), cover letters.
              </li>
              <li>
                <strong>Application Data:</strong> Information about jobs you
                apply for through our platform or track manually, including
                application status and interview details.
              </li>
              <li>
                <strong>Interaction Data:</strong> How you use uHired features,
                device information, IP address, and browser type.
              </li>
              <li>
                <strong>AI Interaction Data:</strong> Queries you make to our AI
                assistants and feedback you provide on AI suggestions.
              </li>
            </ul>
          </PolicySection>
          <PolicySection title="3. How We Use Your Data">
            <>
              <p>Your data is used for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account Creation & Management:</strong> To create and
                  manage your uHired account and provide you with access to our
                  services.
                </li>
                <li>
                  <strong>AI-Powered Services:</strong> This includes using your
                  data to provide job matching, resume tailoring, cover letter
                  generation, interview coaching, smart notifications, and
                  auto-apply features.
                </li>
                <li>
                  <strong>Platform Improvement:</strong> To analyze usage
                  patterns, conduct research, and develop new features and
                  improve our AI models. Anonymized and aggregated data may be
                  used for this purpose.
                </li>
                <li>
                  <strong>Communication:</strong> To send you service-related
                  announcements, updates, security alerts, and support messages.
                </li>
                <li>
                  <strong>Marketing (with consent):</strong> To send you
                  newsletters and promotional materials if you have opted in.
                </li>
              </ul>
            </>
          </PolicySection>
          <PolicySection title="4. Your Data Rights (UK GDPR)">
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                The right to <strong>access</strong> a copy of the personal data
                we hold about you.
              </li>
              <li>
                The right to <strong>rectification</strong> of incorrect
                information.
              </li>
              <li>
                The right to <strong>erasure</strong> ('Right to be Forgotten')
                of your data under certain conditions.
              </li>
              <li>
                The right to <strong>data portability</strong> so you can reuse
                your data for your own purposes.
              </li>
              <li>
                The right to <strong>object</strong> to or{" "}
                <strong>restrict</strong> certain processing, especially for
                direct marketing.
              </li>
            </ul>
            <p>
              You can exercise most of these rights through your{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("settings?tab=privacy-data");
                }}
                className="text-[var(--color-primary-action)] hover:underline"
              >
                Data and Privacy settings
              </a>{" "}
              or by contacting us.
            </p>
          </PolicySection>
          <PolicySection title="5. Data Security">
            <p>
              We implement robust technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. These include encryption
              of data in transit and at rest, strict access controls, and
              regular security reviews. However, no system is 100% secure.
            </p>
          </PolicySection>
          <PolicySection title="6. International Data Transfers">
            <p>
              As we use global cloud service providers, your data may be
              transferred and stored outside the UK. In such cases, we ensure
              that your data is protected by appropriate legal safeguards, such
              as Standard Contractual Clauses (SCCs) and the UK's International
              Data Transfer Agreement (IDTA).
            </p>
          </PolicySection>
          <PolicySection title="7. Updates">
            <p>
              Our privacy policies are subject to change. All updates will
              appear on this page.
            </p>
          </PolicySection>
        </div>
      ),
    },
    terms: {
      title: "TERMS & CONDITIONS",
      subtitle: "YOUR AGREEMENT FOR USING UHIRED SERVICES.",
      content: (
        <div className="space-y-4">
          <PolicySection title="1. Acceptance of Terms">
            <p>
              By accessing or using the uHired platform and services
              ("Service"), you agree to be bound by these Terms & Conditions
              ("Terms") and our{" "}
              <a
                href="#privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePolicy("privacy");
                }}
                className="text-[var(--color-primary-action)] hover:underline"
              >
                Privacy Policy
              </a>
              . If you do not agree to all of these Terms, do not use our
              Service.
            </p>
          </PolicySection>
          <PolicySection title="2. User Accounts">
            <p>
              You must be at least 16 years old to create an account. You are
              responsible for maintaining the confidentiality of your account
              password and for all activities that occur under your account. You
              agree to provide accurate and complete information.
            </p>
          </PolicySection>
          <PolicySection title="3. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, uHired shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, or any loss of
              data, use, goodwill, or other intangible losses.
            </p>
          </PolicySection>
        </div>
      ),
    },
    cookies: {
      title: "COOKIE POLICY",
      subtitle: "HOW WE USE COOKIES TO ENHANCE YOUR EXPERIENCE.",
      content: (
        <div className="space-y-4">
          <PolicySection title="1. What are 'cookies'?">
            <p>
              Cookies are small text files that are stored on your device when
              you visit websites. They help websites work more efficiently and
              provide information to site owners.
            </p>
          </PolicySection>
          <PolicySection title="2. Types of Cookies We Use">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These are strictly necessary
                for the platform to function and cannot be switched off. They
                are set in response to actions made by you, such as logging in
                or setting your privacy preferences.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> These cookies
                allow us to count visits and traffic sources so we can measure
                and improve the performance of our site. The information
                collected is aggregated and anonymous.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These enable the website
                to provide enhanced functionality and personalization, such as
                remembering your language preference or region.
              </li>
            </ul>
          </PolicySection>
          <PolicySection title="3. Managing Cookies">
            <p>
              You can manage your cookie preferences at any time through our
              [Cookie Settings Link/Tool - placeholder on uHired]. Most web
              browsers also allow control of cookies through their settings.
              Visit{" "}
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary-action)] hover:underline"
              >
                www.aboutcookies.org
              </a>{" "}
              for more information.
            </p>
          </PolicySection>
        </div>
      ),
    },
  };

  const policyNavItems = [
    { id: "privacy", text: "PRIVACY POLICY" },
    { id: "terms", text: "TERMS & CONDITIONS" },
    { id: "cookies", text: "COOKIE POLICY" },
  ];

  const activePolicyData = policies[activePolicy];

  return (
    <div className="bg-[var(--color-page-background)] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <nav className="mb-10 border-b border-[var(--color-border-light)] flex justify-center">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            {policyNavItems.map((item) => (
              <li key={item.id} className="mr-2 last:mr-0">
                <button
                  onClick={() => setActivePolicy(item.id)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg transition-colors duration-150
                    ${
                      activePolicy === item.id
                        ? "text-[var(--color-primary-action)] border-[var(--color-primary-action)]"
                        : "text-[var(--color-text-subtle)] hover:text-[var(--color-text-body)] hover:border-[var(--color-border-medium)] border-transparent"
                    }`}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {activePolicyData && (
          <div className="bg-[var(--color-component-background)] shadow-xl rounded-xl ring-1 ring-inset ring-[var(--color-border-light)] p-8 sm:p-10">
            <header className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[var(--color-text-heading-primary)] uppercase tracking-wider">
                {activePolicyData.title}
              </h2>
              {activePolicyData.subtitle && (
                <p className="text-sm text-[var(--color-text-subtle)] mt-1.5">
                  {activePolicyData.subtitle}
                </p>
              )}
              <p className="text-xs text-[var(--color-text-subtle)] mt-4 italic">
                Last Updated: {today}
              </p>
            </header>
            {activePolicyData.content}
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo("dashboard")}
            className="px-6 py-2.5 text-sm font-semibold border border-[var(--color-primary-action)] text-[var(--color-primary-action)] rounded-md hover:bg-[var(--color-primary-lighter)] transition-colors"
          >
            &larr; Back to Dashboard
          </button>
        </div>
      </div>
      <footer className="mt-12 py-6 border-t border-[var(--color-border-light)] text-center text-xs text-[var(--color-text-subtle)]">
        <p>&copy; {new Date().getFullYear()} uHired. All rights reserved.</p>
        <p className="mt-0.5">
          [Your Company Name Ltd.] | Registered in [City, UK] | Company No:
          [Your Company No.]
        </p>
        <p className="mt-0.5">[Your Registered Address]</p>
      </footer>
    </div>
  );
};

export default LegalDocumentsPage;

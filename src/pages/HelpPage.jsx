// src/pages/HelpPage.jsx
import React, { useState } from "react";

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-border-light)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left"
      >
        <h3 className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
          {question}
        </h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-[var(--color-text-subtle)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-[var(--color-text-body)] pb-4 pr-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const HelpPage = ({ navigateTo }) => {
  const faqs = [
    {
      q: "How does the AI job matching work?",
      a: "Our AI analyzes your profile, resume, and preferences against millions of job postings to find the roles that best match your skills and career goals. The more complete your profile, the better the matches.",
    },
    {
      q: "Can I upload more than one resume?",
      a: "Yes, with a Pro subscription, you can save and manage multiple versions of your resume. This is great for tailoring your application to different types of roles.",
    },
    {
      q: "How do I cancel my subscription?",
      a: "You can manage your subscription at any time from the 'Subscriptions & Billing' tab in your settings. From there, you can upgrade, downgrade, or cancel your plan.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We use industry-standard encryption and security protocols to protect your data. You can learn more in our Privacy Policy and control your data from the 'Data & Privacy' tab in your settings.",
    },
    {
      q: "How do I export my data?",
      a: "You can request a full export of your data from the 'Data & Privacy' tab in your settings. We will email you a ZIP file containing your profile information, resumes, and application history.",
    },
  ];

  return (
    <div className="bg-[var(--color-page-background)] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-component-background)] shadow-xl rounded-xl ring-1 ring-inset ring-[var(--color-border-light)] p-8 sm:p-10">
          <header className="text-center mb-10">
            <h1 className="text-2xl font-bold text-[var(--color-text-heading-primary)] uppercase tracking-wider">
              Help & FAQ
            </h1>
            <p className="text-sm text-[var(--color-text-subtle)] mt-1.5">
              Find answers to common questions about using uHired.
            </p>
          </header>

          <div>
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--color-border-light)] text-center">
            <h2 className="text-lg font-semibold text-[var(--color-text-heading-secondary)]">
              Still need help?
            </h2>
            <p className="text-sm text-[var(--color-text-subtle)] mt-1 mb-4">
              Our support team is happy to assist you.
            </p>
            <a
              href="mailto:support@uhired.example.com"
              className="px-5 py-2.5 text-sm font-medium bg-[var(--color-primary-action)] text-[var(--color-text-white)] rounded-md hover:bg-[var(--color-primary-action-hover)] no-underline"
            >
              Contact Support
            </a>
          </div>
        </div>

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
      </footer>
    </div>
  );
};

export default HelpPage;

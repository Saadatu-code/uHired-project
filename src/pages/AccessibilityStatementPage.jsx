// src/pages/AccessibilityStatementPage.jsx
import React from "react";

// This component creates the two-column layout consistent with your policy pages.
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

const AccessibilityStatementPage = ({ navigateTo }) => {
  const today = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-[var(--color-page-background)] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-component-background)] shadow-xl rounded-xl ring-1 ring-inset ring-[var(--color-border-light)] p-8 sm:p-10">
          <header className="text-center mb-10">
            <h1 className="text-2xl font-bold text-[var(--color-text-heading-primary)] uppercase tracking-wider">
              Accessibility Statement
            </h1>
            <p className="text-sm text-[var(--color-text-subtle)] mt-1.5">
              Our commitment to digital accessibility for all users.
            </p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-4 italic">
              Last Updated: {today}
            </p>
          </header>

          <div className="space-y-4">
            <PolicySection title="Commitment to Accessibility">
              <p>
                uHired is committed to ensuring digital accessibility for people
                with disabilities. We are continually improving the user
                experience for everyone and applying the relevant accessibility
                standards.
              </p>
            </PolicySection>

            <PolicySection title="Conformance Status">
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines
                requirements for designers and developers to improve
                accessibility for people with disabilities. It defines three
                levels of conformance: Level A, Level AA, and Level AAA. uHired
                aims to be conformant with WCAG 2.1 level AA.
              </p>
              <p>
                We are aware that some parts of this site may not fully conform
                to the accessibility standard, and we are working to achieve
                full conformance as an ongoing effort.
              </p>
            </PolicySection>

            <PolicySection title="Measures Taken">
              <p>
                uHired takes the following measures to ensure accessibility:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Include accessibility as part of our mission statement.</li>
                <li>Integrate accessibility into our procurement practices.</li>
                <li>Provide continual accessibility training for our staff.</li>
                <li>
                  Assign clear accessibility targets and responsibilities.
                </li>
                <li>Employ formal accessibility quality assurance methods.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Feedback">
              <p>
                We welcome your feedback on the accessibility of uHired. Please
                let us know if you encounter accessibility barriers:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  E-mail:{" "}
                  <a
                    href="mailto:accessibility@uhired.example.com"
                    className="text-[var(--color-primary-action)] hover:underline"
                  >
                    accessibility@uhired.example.com
                  </a>
                </li>
                <li>Postal address: [Your Company Address, City, Postcode]</li>
              </ul>
              <p>We try to respond to feedback within 5 business days.</p>
            </PolicySection>

            <PolicySection title="Technical Specifications">
              <p>
                Accessibility of uHired relies on the following technologies to
                work with the particular combination of web browser and any
                assistive technologies or plugins installed on your computer:
                HTML, WAI-ARIA, CSS, and JavaScript. These technologies are
                relied upon for conformance with the accessibility standards
                used.
              </p>
            </PolicySection>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo("settings?tab=accessibility")}
            className="px-6 py-2.5 text-sm font-semibold border border-[var(--color-primary-action)] text-[var(--color-primary-action)] rounded-md hover:bg-[var(--color-primary-lighter)] transition-colors"
          >
            &larr; Back to Accessibility Settings
          </button>
        </div>
      </div>
      <footer className="mt-12 py-6 border-t border-[var(--color-border-light)] text-center text-xs text-[var(--color-text-subtle)]">
        <p>&copy; {new Date().getFullYear()} uHired. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AccessibilityStatementPage;

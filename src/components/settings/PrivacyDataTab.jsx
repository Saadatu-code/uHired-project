// src/components/settings/PrivacyDataTab.jsx
import React, { useState } from "react";
import ExportDataModal from "../modals/ExportDataModal";
import DeleteAccountModal from "../modals/DeleteAccountModal";

const SettingToggle = ({ label, id, enabled, onChange, helpText }) => (
  <div className="flex items-start justify-between">
    <div className="pr-4 flex-grow">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[var(--color-text-heading-secondary)]"
      >
        {label}
      </label>
      <p className="text-xs text-[var(--color-text-subtle)] mt-1 max-w-prose">
        {helpText}
      </p>
    </div>
    <div className="flex-shrink-0 mt-1">
      <button
        type="button"
        id={id}
        onClick={onChange}
        className={`${
          enabled
            ? "bg-[var(--color-primary-action)]"
            : "bg-gray-200 dark:bg-slate-600"
        } relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-component-background)] focus-visible:ring-[var(--color-primary-action)]`}
        role="switch"
        aria-checked={enabled}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`${
            enabled ? "translate-x-4" : "translate-x-0"
          } pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
    </div>
  </div>
);

const PrivacyDataTab = ({ navigateTo, profileData }) => {
  const [shareAnonymizedData, setShareAnonymizedData] = useState(true);
  const [showExportDataModal, setShowExportDataModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleConfirmDeleteAccount = () => {
    setShowDeleteModal(false);
    navigateTo("login");
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-[var(--color-text-heading-primary)]">
        Privacy & Data
      </h3>

      <div className="p-6 border border-[var(--color-border-light)] rounded-lg">
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)] border-b border-[var(--color-border-light)] pb-3 mb-4">
          Data Sharing & Consent
        </h4>
        <SettingToggle
          id="shareAnonymizedDataToggle"
          label="Help Improve uHired's AI"
          enabled={shareAnonymizedData}
          onChange={() => setShareAnonymizedData((p) => !p)}
          helpText="Allow uHired to use your anonymized data to enhance AI features for everyone. Your personal info is never shared."
        />
      </div>

      <div className="p-6 border border-[var(--color-border-light)] rounded-lg">
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)] border-b border-[var(--color-border-light)] pb-3 mb-4">
          Your Data Control Options
        </h4>
        <div className="flex items-center justify-between py-3 border-b border-[var(--color-border-light)]">
          <div>
            <p className="text-sm font-medium">Export Data</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">
              Download a copy of your profile and application data.
            </p>
          </div>
          <button
            onClick={() => setShowExportDataModal(true)}
            className="px-4 py-1.5 text-xs font-medium border border-[var(--color-primary-action)] text-[var(--color-primary-action)] rounded-md hover:bg-[var(--color-primary-lighter)]"
          >
            Export
          </button>
        </div>
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="text-sm font-medium text-[var(--color-error-red)]">
              Delete Account
            </p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">
              This action is permanent and cannot be undone.
            </p>
          </div>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="px-4 py-1.5 text-xs font-medium bg-[var(--color-error-red)] text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <a
          href="#legal-documents"
          onClick={(e) => {
            e.preventDefault();
            navigateTo("legal-documents");
          }}
          className="text-xs text-[var(--color-primary-action)] hover:underline"
        >
          Review our full Privacy Policy, Terms & Cookie Policy
        </a>
      </div>

      <ExportDataModal
        isOpen={showExportDataModal}
        onClose={() => setShowExportDataModal(false)}
        userEmail={profileData.email}
      />
      <DeleteAccountModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirmDelete={handleConfirmDeleteAccount}
      />
    </div>
  );
};

export default PrivacyDataTab;

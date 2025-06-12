// src/components/modals/ExportDataModal.jsx
import React from "react";

const CheckCircleOutlineIcon = ({ className = "w-10 h-10" }) => (
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
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CloseButtonIcon = ({ className = "w-5 h-5" }) => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ExportDataModal = ({ isOpen, onClose, userEmail }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="bg-[var(--color-component-background)] p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-subtle)] hover:text-[var(--color-text-body)] transition-colors"
          aria-label="Close modal"
        >
          <CloseButtonIcon />
        </button>
        <div className="flex flex-col items-center text-center">
          <CheckCircleOutlineIcon className="w-12 h-12 text-[var(--color-success-green)] mb-4" />
          <h3 className="text-xl font-semibold text-[var(--color-text-heading-primary)] mb-3">
            Data Export Initiated
          </h3>
          <p className="text-sm text-[var(--color-text-body)] mb-1">
            We are preparing your data export.
          </p>
          <p className="text-sm text-[var(--color-text-body)] mb-6 max-w-xs">
            A ZIP file containing your profile, resume(s), and activity logs
            will be sent to{" "}
            <strong className="text-[var(--color-primary-action)]">
              {userEmail}
            </strong>{" "}
            shortly (usually within a few minutes).
          </p>
          <div className="w-full">
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 text-sm font-medium bg-[var(--color-primary-action)] text-white rounded-md hover:bg-[var(--color-primary-action-hover)] transition-colors"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportDataModal;

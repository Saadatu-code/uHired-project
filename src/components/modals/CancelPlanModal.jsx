// src/components/modals/CancelPlanModal.jsx
import React from "react";

// Icon for Cancel Plan Modal (similar to the screenshot)
const WarningIcon = ({ className = "w-10 h-10" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
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

const CancelPlanModal = ({ isOpen, onClose, onConfirmCancel }) => {
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
          <WarningIcon className="w-12 h-12 text-red-400 mb-4" />
          <h3 className="text-xl font-semibold text-[var(--color-text-heading-primary)] mb-3">
            Cancel subscription
          </h3>
          <p className="text-sm text-[var(--color-text-body)] mb-8 max-w-xs">
            You will lose access to premium uHired features such as advanced AI
            assistance, unlimited job tracking, and priority support.
          </p>
          <div className="flex flex-col sm:flex-row w-full space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 text-sm font-medium border border-[var(--color-primary-action)] text-[var(--color-primary-action)] rounded-md hover:bg-[var(--color-primary-lighter)] transition-colors"
            >
              Keep subscription
            </button>
            <button
              onClick={onConfirmCancel}
              className="w-full px-4 py-2.5 text-sm font-medium bg-[var(--color-error-red)] text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Cancel subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPlanModal;

// src/components/modals/DeleteAccountModal.jsx
import React, { useState } from "react";

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

const DeleteAccountModal = ({ isOpen, onClose, onConfirmDelete }) => {
  const [confirmationText, setConfirmationText] = useState("");
  const [showError, setShowError] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (confirmationText === "DELETE") {
      onConfirmDelete();
      setConfirmationText(""); // Reset for next time
      setShowError(false);
    } else {
      setShowError(true);
      const deleteInput = document.getElementById(
        "deleteAccountConfirmationInputModal"
      );
      if (deleteInput) {
        deleteInput.classList.add("border-red-500", "ring-red-500");
        deleteInput.focus();
      }
      setTimeout(() => {
        setShowError(false);
        if (deleteInput)
          deleteInput.classList.remove("border-red-500", "ring-red-500");
      }, 3000);
    }
  };

  const handleClose = () => {
    setConfirmationText("");
    setShowError(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="bg-[var(--color-component-background)] p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[var(--color-text-subtle)] hover:text-[var(--color-text-body)] transition-colors"
          aria-label="Close modal"
        >
          <CloseButtonIcon />
        </button>
        <h3 className="text-lg font-semibold text-[var(--color-text-heading-primary)] mb-4">
          Confirm Account Deletion
        </h3>
        <p className="text-sm text-[var(--color-text-body)] mb-3">
          This action is{" "}
          <span className="font-bold text-[var(--color-error-red)]">
            irreversible
          </span>{" "}
          and will permanently delete:
        </p>
        <ul className="list-disc list-inside text-sm text-[var(--color-text-body)] mb-5 space-y-1 pl-2">
          <li>Your profile information and resume data</li>
          <li>Job application history and tracked jobs</li>
          <li>All saved preferences and AI customizations</li>
          <li>Any active subscriptions (if applicable)</li>
        </ul>
        <p className="text-sm text-[var(--color-text-body)] mb-3">
          To confirm, please type "DELETE" in the box below.
        </p>
        <input
          type="text"
          id="deleteAccountConfirmationInputModal"
          value={confirmationText}
          onChange={(e) => {
            setConfirmationText(e.target.value);
            if (showError && e.target.value === "DELETE") {
              setShowError(false);
              e.target.classList.remove("border-red-500", "ring-red-500");
            }
          }}
          placeholder='Type "DELETE" to confirm'
          className={`w-full px-3 py-2 text-sm border rounded-md shadow-sm bg-[var(--color-component-background)] text-[var(--color-text-body)] placeholder:text-[var(--color-text-placeholder)] focus:ring-1 mb-5 ${
            showError
              ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-[var(--color-border-medium)] focus:border-[var(--color-primary-action)] focus:ring-[var(--color-primary-action)]"
          }`}
        />
        {showError && (
          <p className="text-xs text-red-500 -mt-3 mb-3">
            Please type DELETE to confirm.
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium border border-[var(--color-border-medium)] rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={confirmationText !== "DELETE"}
            className="w-full sm:w-auto px-4 py-2 text-xs bg-[var(--color-error-red)] text-white rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Permanently Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;

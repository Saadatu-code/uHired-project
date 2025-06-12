// src/components/modals/DateTimePickerModal.jsx
import React from "react";
import DateTimePicker from "../ui/DateTimePicker";

const DateTimePickerModal = ({
  isOpen,
  onClose,
  initialDateTime,
  onDateTimeChange,
}) => {
  if (!isOpen) return null;

  const handleSave = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="bg-[var(--color-component-background)] p-6 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 relative">
        <h3 className="text-lg font-semibold text-[var(--color-text-heading-primary)] mb-4 text-center">
          Set Custom Reminder Date & Time
        </h3>
        <DateTimePicker
          initialDateTime={initialDateTime}
          onDateTimeChange={onDateTimeChange}
        />
        <div className="flex justify-end space-x-3 mt-5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium bg-[var(--color-primary-action)] text-white rounded-md hover:bg-[var(--color-primary-action-hover)] transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePickerModal;

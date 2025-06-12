// src/components/settings/JobTrackingTab.jsx
import React, { useState, useCallback } from "react";
import DateTimePickerModal from "../modals/DateTimePickerModal"; // Assuming modal is available
import SettingToggle from "./SettingToggle"; // Use the shared component

const JobTrackingTab = ({ navigateTo }) => {
  const [autoTrackApps, setAutoTrackApps] = useState(true);
  const [remindFollowUp, setRemindFollowUp] = useState(true);
  const [followUpDateTime, setFollowUpDateTime] = useState(() => {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 7);
    defaultDate.setHours(9, 0, 0, 0);
    return defaultDate;
  });
  const [showDateTimePickerModal, setShowDateTimePickerModal] = useState(false);
  const [calendarSync, setCalendarSync] = useState(false);

  const handleFollowUpDateTimeChange = useCallback((newDateTime) => {
    setFollowUpDateTime(newDateTime);
  }, []);

  const handleSetQuickReminder = (days) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + days);
    newDate.setHours(9, 0, 0, 0);
    setFollowUpDateTime(newDate); // Update state
  };

  const formatDisplayDateTime = (dateObj) => {
    if (!dateObj || !(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
      return "Not set";
    }
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    let formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      dateObj
    );
    const offset = -dateObj.getTimezoneOffset() / 60;
    const timezoneStr = `GMT${offset >= 0 ? "+" : ""}${offset}`;
    return `${formattedDate} (${timezoneStr})`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)]">
          Job Application Tracking
        </h3>
        <button
          onClick={() => navigateTo && navigateTo("dashboard")}
          className="px-3 py-1.5 text-xs font-medium rounded-md border border-[var(--color-primary-action)] text-[var(--color-primary-action)] hover:bg-[var(--color-primary-lighter)] transition-colors whitespace-nowrap"
        >
          Job Tracker
        </button>
      </div>
      <SettingToggle
        label="Auto-track submitted applications"
        id="autoTrackApps"
        enabled={autoTrackApps}
        onChange={() => setAutoTrackApps((p) => !p)}
        helpText="Automatically add jobs to your tracker when you apply through integrated platforms."
      />

      <div className="py-2">
        <SettingToggle
          label="Remind me to follow up"
          id="remindFollowUp"
          enabled={remindFollowUp}
          onChange={() => setRemindFollowUp((p) => !p)}
          helpText="Get reminders for following up on applications."
        />
        {remindFollowUp && (
          <div className="pl-0 md:pl-4 mt-3 space-y-3 relative">
            <p className="text-xs text-[var(--color-text-subtle)] mb-2">
              Current reminder: {formatDisplayDateTime(followUpDateTime)}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => handleSetQuickReminder(1)}
                className="text-xs px-2.5 py-1 border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] bg-[var(--color-component-background)] hover:bg-[var(--color-primary-lighter)] transition-colors"
              >
                Tomorrow
              </button>
              <button
                onClick={() => handleSetQuickReminder(3)}
                className="text-xs px-2.5 py-1 border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] bg-[var(--color-component-background)] hover:bg-[var(--color-primary-lighter)] transition-colors"
              >
                In 3 days
              </button>
              <button
                onClick={() => handleSetQuickReminder(7)}
                className="text-xs px-2.5 py-1 border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] bg-[var(--color-component-background)] hover:bg-[var(--color-primary-lighter)] transition-colors"
              >
                In 1 week
              </button>
              <button
                onClick={() => handleSetQuickReminder(30)}
                className="text-xs px-2.5 py-1 border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] bg-[var(--color-component-background)] hover:bg-[var(--color-primary-lighter)] transition-colors"
              >
                In 1 month
              </button>
            </div>
            <button
              onClick={() => setShowDateTimePickerModal(true)}
              className="text-xs px-3 py-1.5 border border-[var(--color-primary-action)] text-[var(--color-primary-action)] rounded-md hover:bg-[var(--color-primary-lighter)] transition-colors"
            >
              Set Custom Date & Time...
            </button>
          </div>
        )}
      </div>
      <SettingToggle
        label="Enable calendar sync for interviews"
        id="calendarSync"
        enabled={calendarSync}
        onChange={() => setCalendarSync((p) => !p)}
        helpText="Automatically add scheduled interviews to your connected calendar."
      />
      <DateTimePickerModal
        isOpen={showDateTimePickerModal}
        onClose={() => setShowDateTimePickerModal(false)}
        initialDateTime={followUpDateTime}
        onDateTimeChange={handleFollowUpDateTimeChange}
      />
    </div>
  );
};

export default JobTrackingTab;

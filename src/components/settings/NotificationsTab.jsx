// src/components/settings/NotificationsTab.jsx
import React, { useState } from "react";
import SettingToggle from "./SettingToggle";

const NotificationsTab = () => {
  const [jobMatchNotifications, setJobMatchNotifications] = useState(false);
  const [applicationUpdateNotifications, setApplicationUpdateNotifications] =
    useState(true);

  const handleNotificationToggle = (preference) => {
    if (preference === "jobMatch") {
      setJobMatchNotifications((prev) => !prev);
    } else if (preference === "applicationUpdate") {
      setApplicationUpdateNotifications((prev) => !prev);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)]">
        Notification Preferences
      </h3>
      <p className="text-sm text-[var(--color-text-body)]">
        Choose how you want to be notified by uHired.
      </p>
      <div className="border-t border-[var(--color-border-light)]">
        <SettingToggle
          id="jobMatchNotifications"
          label="New Job Matches"
          enabled={jobMatchNotifications}
          onChange={() => handleNotificationToggle("jobMatch")}
          helpText="Get notified about new jobs that match your profile."
        />
        <SettingToggle
          id="applicationUpdateNotifications"
          label="Application Updates"
          enabled={applicationUpdateNotifications}
          onChange={() => handleNotificationToggle("applicationUpdate")}
          helpText="Receive updates on your job applications."
        />
      </div>
    </div>
  );
};

export default NotificationsTab;

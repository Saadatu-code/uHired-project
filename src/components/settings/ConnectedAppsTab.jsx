// src/components/settings/ConnectedAppsTab.jsx
import React, { useState } from "react";
import AppConnectionButton from "./AppConnectionButton"; // Use the shared component

const ConnectedAppsTab = () => {
  const [googleDriveConnected, setGoogleDriveConnected] = useState(true);
  const [linkedInConnected, setLinkedInConnected] = useState(false);
  const [dropboxConnected, setDropboxConnected] = useState(false);

  const toggleConnection = (app) => {
    if (app === "googleDrive") setGoogleDriveConnected((prev) => !prev);
    if (app === "linkedIn") setLinkedInConnected((prev) => !prev);
    if (app === "dropbox") setDropboxConnected((prev) => !prev);
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)] mb-4">
        Connected Apps & Integrations
      </h3>
      <div className="p-4 border border-[var(--color-border-light)] rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
            Google Drive
          </p>
          <AppConnectionButton
            isConnected={googleDriveConnected}
            onToggle={() => toggleConnection("googleDrive")}
          />
        </div>
        <p className="text-xs text-[var(--color-text-subtle)]">
          Sync your resumes and cover letters with Google Drive.
        </p>
      </div>
      <div className="p-4 border border-[var(--color-border-light)] rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
            LinkedIn
          </p>
          <AppConnectionButton
            isConnected={linkedInConnected}
            onToggle={() => toggleConnection("linkedIn")}
          />
        </div>
        <p className="text-xs text-[var(--color-text-subtle)]">
          Import your LinkedIn profile to quickly populate your uHired profile.
        </p>
      </div>
      <div className="p-4 border border-[var(--color-border-light)] rounded-lg">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
            Dropbox
          </p>
          <AppConnectionButton
            isConnected={dropboxConnected}
            onToggle={() => toggleConnection("dropbox")}
          />
        </div>
        <p className="text-xs text-[var(--color-text-subtle)]">
          Access documents stored in your Dropbox account.
        </p>
      </div>
    </div>
  );
};

export default ConnectedAppsTab;

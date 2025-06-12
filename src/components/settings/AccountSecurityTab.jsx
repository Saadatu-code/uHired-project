// src/components/settings/AccountSecurityTab.jsx
import React from "react";

const AccountSecurityTab = ({ navigateTo }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)]">
        Account Security
      </h3>
      <p className="text-sm text-[var(--color-text-body)]">
        Manage your password and security settings.
      </p>
      <div className="py-2">
        <p className="text-sm font-medium text-[var(--color-text-body)]">
          Change Password
        </p>
        <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">
          Update your account password.
        </p>
        <button
          onClick={() => navigateTo && navigateTo("set-new-password")}
          className="px-3 py-1.5 border border-[var(--color-border-medium)] rounded-md text-xs font-medium text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] mt-2"
        >
          Change Password
        </button>
      </div>
      <div className="pt-2 border-t border-[var(--color-border-light)]">
        <h4 className="text-base font-medium text-[var(--color-text-heading-secondary)] mb-1">
          Two-Factor Authentication
        </h4>
        <p className="text-xs text-[var(--color-text-subtle)] mb-1.5">
          Enhance your account security by enabling 2FA.
        </p>
        <button className="px-3 py-1.5 bg-[var(--color-secondary-purple)] text-white rounded-md text-xs font-medium hover:bg-[var(--color-secondary-purple-hover)]">
          Enable 2FA (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default AccountSecurityTab;

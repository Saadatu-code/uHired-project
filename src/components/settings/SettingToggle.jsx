// src/components/settings/SettingToggle.jsx
import React from "react";

const SettingToggle = ({ label, id, enabled, onChange, helpText }) => (
  <div className="flex items-start justify-between py-3">
    <div className="pr-4 flex-grow">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[var(--color-text-heading-secondary)]"
      >
        {label}
      </label>
      {helpText && (
        <p className="text-xs text-[var(--color-text-subtle)] mt-1 max-w-prose">
          {helpText}
        </p>
      )}
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
        } relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-component-background)] focus-visible:ring-[var(--color-primary-action)]`}
        role="switch"
        aria-checked={enabled}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-4" : "translate-x-0"
          } pointer-events-none inline-block h-4 w-4 rounded-full bg-[var(--color-toggle-thumb)] shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
    </div>
  </div>
);

export default SettingToggle;

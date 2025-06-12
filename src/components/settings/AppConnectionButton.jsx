// src/components/settings/AppConnectionButton.jsx
import React from "react";
import { CheckCircleIcon } from "../ui/Icons";

const AppConnectionButton = ({ isConnected, onToggle }) => (
  <button
    onClick={onToggle}
    className={`text-xs px-3 py-1.5 rounded-md font-medium inline-flex items-center justify-center transition-colors duration-150
    ${
      isConnected
        ? "bg-green-600 text-white hover:bg-green-700" // Always green when connected for clear status
        : "bg-[var(--color-primary-action)] text-[var(--color-text-white)] hover:bg-[var(--color-primary-action-hover)]"
    }`}
  >
    {isConnected && <CheckCircleIcon className="mr-1.5 text-white" />}
    {isConnected ? "Connected" : "Connect"}
  </button>
);

export default AppConnectionButton;

// src/components/settings/AccessibilityTab.jsx
import React, { useState, useEffect } from "react";
import SettingToggle from "./SettingToggle"; // Use the shared component

const SegmentedControl = ({ value, onChange, options }) => (
  <div className="flex items-center p-0.5 bg-[var(--color-page-background)] border border-[var(--color-border-light)] rounded-lg">
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onChange(option.value)}
        className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
          value === option.value
            ? "bg-[var(--color-primary-action)] text-[var(--color-text-white)] shadow-sm"
            : "text-[var(--color-text-body)] hover:bg-[var(--color-component-background)]"
        }`}
      >
        {option.label}
      </button>
    ))}
  </div>
);

const AccessibilitySetting = ({ title, children }) => (
  <div className="flex flex-col md:flex-row md:space-x-8 py-5 border-b border-[var(--color-border-light)] border-opacity-60 last:border-b-0">
    <div className="md:w-1/3 flex-shrink-0 mb-3 md:mb-0">
      <h3 className="text-sm font-semibold text-[var(--color-text-heading-secondary)]">
        {title}
      </h3>
    </div>
    <div className="md:w-2/3 space-y-3">{children}</div>
  </div>
);

const AccessibilityTab = ({ navigateTo }) => {
  const [fontSize, setFontSize] = useState("100");
  const [contrast, setContrast] = useState("standard");
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [enhancedFocus, setEnhancedFocus] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--font-size-multiplier",
      `${parseInt(fontSize, 10) / 100}`
    );
    root.classList.toggle("high-contrast", contrast === "high");
    root.classList.toggle("dyslexia-friendly-font", dyslexicFont);
    root.classList.toggle("reduced-motion", reducedMotion);
    root.classList.toggle("enhanced-focus", enhancedFocus);
  }, [fontSize, contrast, dyslexicFont, reducedMotion, enhancedFocus]);

  return (
    <div>
      <h3 className="text-xl font-semibold text-[var(--color-text-heading-primary)] mb-4">
        Accessibility Preferences
      </h3>

      <AccessibilitySetting title="Text Size">
        <p className="text-xs text-[var(--color-text-subtle)]">
          Adjust the text size for better readability.
        </p>
        <div className="flex items-center space-x-3 pt-2">
          <input
            type="range"
            id="font-size-slider"
            min="80"
            max="140"
            step="10"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-600"
          />
          <span className="text-sm font-semibold w-12 text-right">
            {fontSize}%
          </span>
        </div>
      </AccessibilitySetting>

      <AccessibilitySetting title="Contrast">
        <p className="text-xs text-[var(--color-text-subtle)]">
          Increase text and UI element contrast.
        </p>
        <SegmentedControl
          value={contrast}
          onChange={setContrast}
          options={[
            { label: "Standard", value: "standard" },
            { label: "High", value: "high" },
          ]}
        />
      </AccessibilitySetting>

      <AccessibilitySetting title="Reading Aids">
        <SettingToggle
          id="dyslexicFont"
          label="Dyslexia-Friendly Font"
          enabled={dyslexicFont}
          onChange={() => setDyslexicFont((p) => !p)}
          helpText="Switches to a font designed to improve readability."
        />
      </AccessibilitySetting>

      <AccessibilitySetting title="Motion & Focus">
        <SettingToggle
          id="reducedMotion"
          label="Reduce Motion"
          enabled={reducedMotion}
          onChange={() => setReducedMotion((p) => !p)}
          helpText="Simplifies animations and transitions."
        />
        <SettingToggle
          id="enhancedFocus"
          label="Enhanced Focus Indicator"
          enabled={enhancedFocus}
          onChange={() => setEnhancedFocus((p) => !p)}
          helpText="Makes the outline around selected items more visible."
        />
      </AccessibilitySetting>

      <div className="pt-6 text-center">
        <button
          onClick={() => navigateTo("accessibility-statement")}
          className="text-sm text-[var(--color-primary-action)] hover:underline"
        >
          Read our full Accessibility Statement
        </button>
      </div>
    </div>
  );
};

export default AccessibilityTab;

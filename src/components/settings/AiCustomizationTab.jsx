// src/components/settings/AiCustomizationTab.jsx
import React, { useState } from "react";
import SettingToggle from "./SettingToggle";

// Helper components can be moved to a shared file later
const SettingSelect = ({ label, id, value, onChange, options, helpText }) => (
  <div className="py-2">
    <label
      htmlFor={id}
      className="flex items-center text-sm font-semibold text-[var(--color-text-heading-secondary)] mb-1"
    >
      {label}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border-[var(--color-border-medium)] focus:outline-none focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] rounded-md bg-[var(--color-component-background)] text-[var(--color-text-body)]"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {helpText && (
      <p className="mt-1.5 text-xs text-[var(--color-text-subtle)]">
        {helpText}
      </p>
    )}
  </div>
);

const AiCustomizationTab = () => {
  const defaultAiSettings = {
    aiTone: "Formal",
    coverLetterStyle: "Professional",
    interviewCoachStyle: "Constructive",
    smartSuggestions: true,
    resumeRewrite: false,
  };

  const [aiTone, setAiTone] = useState(defaultAiSettings.aiTone);
  const [coverLetterStyle, setCoverLetterStyle] = useState(
    defaultAiSettings.coverLetterStyle
  );
  const [interviewCoachStyle, setInterviewCoachStyle] = useState(
    defaultAiSettings.interviewCoachStyle
  );
  const [smartSuggestions, setSmartSuggestions] = useState(
    defaultAiSettings.smartSuggestions
  );
  const [resumeRewrite, setResumeRewrite] = useState(
    defaultAiSettings.resumeRewrite
  );

  const handleResetAiSettings = () => {
    setAiTone(defaultAiSettings.aiTone);
    setCoverLetterStyle(defaultAiSettings.coverLetterStyle);
    setInterviewCoachStyle(defaultAiSettings.interviewCoachStyle);
    setSmartSuggestions(defaultAiSettings.smartSuggestions);
    setResumeRewrite(defaultAiSettings.resumeRewrite);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)]">
          AI Assistant Customization
        </h3>
        <button
          onClick={handleResetAiSettings}
          className="px-3 py-1.5 text-xs font-medium rounded-md border border-[var(--color-border-medium)] bg-[var(--color-component-background)] text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] transition-colors"
        >
          Restore Defaults
        </button>
      </div>

      <div className="p-4 border border-[var(--color-border-light)] border-opacity-75 rounded-lg space-y-4">
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)] border-b border-[var(--color-border-light)] border-opacity-50 pb-2 mb-3">
          Content Generation Styles
        </h4>
        <SettingSelect
          label="AI Tone"
          id="aiTone"
          value={aiTone}
          onChange={(e) => setAiTone(e.target.value)}
          options={[
            { value: "Formal", label: "Formal" },
            { value: "Friendly", label: "Friendly" },
            { value: "Direct", label: "Direct" },
            { value: "Persuasive", label: "Persuasive" },
          ]}
          helpText="Defines the overall personality of the AI when generating text for you."
        />
        <SettingSelect
          label="Cover Letter Style"
          id="coverLetterStyle"
          value={coverLetterStyle}
          onChange={(e) => setCoverLetterStyle(e.target.value)}
          options={[
            { value: "Professional", label: "Professional" },
            { value: "Creative", label: "Creative" },
            { value: "Concise", label: "Concise & To-the-point" },
          ]}
          helpText="Tailor the writing style for AI-assisted cover letters to match your approach."
        />
        <SettingSelect
          label="Interview Coach Style"
          id="interviewCoachStyle"
          value={interviewCoachStyle}
          onChange={(e) => setInterviewCoachStyle(e.target.value)}
          options={[
            { value: "Constructive", label: "Constructive Feedback" },
            { value: "Challenging", label: "Challenging Scenarios" },
            { value: "Supportive", label: "Supportive & Encouraging" },
          ]}
          helpText="Choose the type of feedback and interaction style for mock interviews."
        />
      </div>

      <div className="p-4 border border-[var(--color-border-light)] border-opacity-75 rounded-lg space-y-4 mt-5">
        <h4 className="text-base font-semibold text-[var(--color-text-heading-secondary)] border-b border-[var(--color-border-light)] border-opacity-50 pb-2 mb-3">
          Assistance Features
        </h4>
        <SettingToggle
          label="Enable Smart Suggestions"
          id="smartSuggestions"
          enabled={smartSuggestions}
          onChange={() => setSmartSuggestions((p) => !p)}
          helpText="Receive real-time, contextual suggestions for keywords and phrasing as you write."
        />
        <SettingToggle
          label="Resume Rewrite Assistance"
          id="resumeRewrite"
          enabled={resumeRewrite}
          onChange={() => setResumeRewrite((p) => !p)}
          helpText="Allow the AI to propose complete rewrites for sections of your resume for impact."
        />
      </div>
    </div>
  );
};

export default AiCustomizationTab;

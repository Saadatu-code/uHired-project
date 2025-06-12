// src/components/settings/ProfileViewTab.jsx
import React from "react";

const ProfileViewTab = ({ profileData }) => {
  const skillsArray = profileData.keySkills
    ? profileData.keySkills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill)
    : [];
  const preferredTitlesArray = profileData.preferredJobTitles
    ? profileData.preferredJobTitles
        .split(",")
        .map((title) => title.trim())
        .filter((title) => title)
    : [];
  const jobPreferencesArray = profileData.jobTypePreferences
    ? profileData.jobTypePreferences
        .split(",")
        .map((pref) => pref.trim())
        .filter((pref) => pref)
    : [];

  const profileFields = [
    { label: "Full Name", value: profileData.fullName },
    { label: "Email Address", value: profileData.email },
    { label: "Phone Number", value: profileData.phone || "Not specified" },
    { label: "Location", value: profileData.location || "Not specified" },
    {
      label: "Current Job Title",
      value: profileData.currentJobTitle || "Not specified",
    },
    {
      label: "Preferred Job Titles",
      value:
        preferredTitlesArray.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {preferredTitlesArray.map((title, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs bg-[var(--color-primary-lighter)] text-[var(--color-primary-action)] rounded-full font-medium"
              >
                {title}
              </span>
            ))}
          </div>
        ) : (
          "Not specified"
        ),
    },
    {
      label: "Employment Status",
      value: profileData.employmentStatus || "Not specified",
    },
    {
      label: "Job Type Preferences",
      value:
        jobPreferencesArray.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {jobPreferencesArray.map((pref, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs bg-[var(--color-primary-lighter)] text-[var(--color-primary-action)] rounded-full font-medium"
              >
                {pref}
              </span>
            ))}
          </div>
        ) : (
          "Not specified"
        ),
    },
    {
      label: "Minimum Salary",
      value: profileData.minimumSalary || "Not specified",
    },
    { label: "Resume", value: profileData.resumeFileName || "Not uploaded" },
    {
      label: "Availability",
      value: profileData.availability || "Not specified",
    },
    {
      label: "Key Skills",
      value:
        skillsArray.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {skillsArray.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs bg-[var(--color-primary-lighter)] text-[var(--color-primary-action)] rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          "Not specified"
        ),
    },
  ];

  return (
    <div className="space-y-4 pt-6 border-t border-[var(--color-border-light)]">
      <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)] mb-2">
        Profile Overview
      </h3>
      {profileFields.map((field) => (
        <div key={field.label}>
          <h4 className="text-xs font-medium text-[var(--color-text-subtle)] mb-0.5">
            {field.label}
          </h4>
          {typeof field.value === "string" ? (
            <p className={`text-sm text-[var(--color-text-body)]`}>
              {field.value}
            </p>
          ) : (
            field.value
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileViewTab;

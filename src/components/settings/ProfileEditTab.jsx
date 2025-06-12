// src/components/settings/ProfileEditTab.jsx
import React, { useRef } from "react";
import { SpinnerIcon } from "../ui/Icons"; // Assuming Spinner is in ui

// Reusable form components
const FormInput = (props) => (
  <input
    {...props}
    className={`w-full px-3 py-2 text-sm border rounded-md shadow-sm focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] bg-[var(--color-component-background)] text-[var(--color-text-body)] placeholder:text-[var(--color-text-placeholder)] 
      ${
        props.readOnly
          ? "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700 cursor-not-allowed"
          : "border-[var(--color-border-medium)]"
      } ${props.className || ""}`}
  />
);

const FormTextarea = React.forwardRef((props, ref) => {
  const { value, ...otherProps } = props;
  return (
    <textarea
      ref={ref}
      value={value}
      {...otherProps}
      className={`w-full px-3 py-2 text-sm border border-[var(--color-border-medium)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] bg-[var(--color-component-background)] text-[var(--color-text-body)] placeholder:text-[var(--color-text-placeholder)] resize-none overflow-hidden ${
        props.className || ""
      }`}
    />
  );
});

const FormSelect = (props) => (
  <select
    {...props}
    className={`w-full px-3 py-2 text-sm border border-[var(--color-border-medium)] rounded-md shadow-sm focus:ring-1 focus:ring-[var(--color-primary-action)] focus:border-[var(--color-primary-action)] bg-[var(--color-component-background)] text-[var(--color-text-body)] ${
      props.className || ""
    }`}
  />
);

const ProfileEditTab = ({
  profileData,
  handleInputChange,
  handleSaveChanges,
  isLoading,
}) => {
  const resumeInputRef = useRef(null);
  const textareaRef = useRef(null);

  const handleResumeUploadClick = () => {
    resumeInputRef.current?.click();
  };

  return (
    <form
      onSubmit={handleSaveChanges}
      className="space-y-4 pt-6 border-t border-[var(--color-border-light)]"
    >
      <h3 className="text-lg font-semibold text-[var(--color-text-heading-secondary)] mb-2">
        Edit Profile Details
      </h3>
      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Full Name
        </label>
        <FormInput
          type="text"
          name="fullName"
          id="fullName"
          value={profileData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Email Address
        </label>
        <FormInput
          type="email"
          name="email"
          id="email"
          value={profileData.email}
          readOnly
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Phone Number
        </label>
        <FormInput
          type="tel"
          name="phone"
          id="phone"
          value={profileData.phone}
          onChange={handleInputChange}
          placeholder="e.g., +44 7700 900000"
        />
      </div>
      <div>
        <label
          htmlFor="location"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Location
        </label>
        <FormInput
          type="text"
          name="location"
          id="location"
          value={profileData.location}
          onChange={handleInputChange}
          placeholder="e.g., London, UK"
        />
      </div>
      <div>
        <label
          htmlFor="currentJobTitle"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Current Job Title
        </label>
        <FormInput
          type="text"
          name="currentJobTitle"
          id="currentJobTitle"
          value={profileData.currentJobTitle}
          onChange={handleInputChange}
          placeholder="e.g., Senior Software Engineer"
        />
      </div>
      <div>
        <label
          htmlFor="preferredJobTitles"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Preferred Job Titles (use commas to separate)
        </label>
        <FormTextarea
          ref={textareaRef}
          name="preferredJobTitles"
          id="preferredJobTitles"
          rows="2"
          value={profileData.preferredJobTitles}
          onChange={handleInputChange}
          placeholder="e.g., Product Manager, UX Lead, Head of Product"
        />
      </div>
      <div>
        <label
          htmlFor="employmentStatus"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Employment Status
        </label>
        <FormSelect
          name="employmentStatus"
          id="employmentStatus"
          value={profileData.employmentStatus}
          onChange={handleInputChange}
        >
          <option value="">Select status...</option>
          <option value="Employed">Employed</option>
          <option value="Open to Work">Open to Work</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Student">Student</option>
        </FormSelect>
      </div>
      <div>
        <label
          htmlFor="jobTypePreferences"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Job Type Preferences (use commas to separate)
        </label>
        <FormTextarea
          ref={textareaRef}
          name="jobTypePreferences"
          id="jobTypePreferences"
          rows="2"
          value={profileData.jobTypePreferences}
          onChange={handleInputChange}
          placeholder="e.g., Full-time, Remote, Contract"
        />
      </div>
      <div>
        <label
          htmlFor="minimumSalary"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Minimum Salary Expectation
        </label>
        <FormInput
          type="text"
          name="minimumSalary"
          id="minimumSalary"
          value={profileData.minimumSalary}
          onChange={handleInputChange}
          placeholder="e.g., £75,000 or $100,000"
        />
      </div>
      <div>
        <label
          htmlFor="resume"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Resume/CV
        </label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handleResumeUploadClick}
            className="px-3 py-1.5 text-xs border border-[var(--color-border-medium)] rounded-md text-[var(--color-text-body)] bg-[var(--color-component-background)] hover:bg-[var(--color-primary-lighter)]"
          >
            {profileData.resumeFileName ? "Change File" : "Upload File"}
          </button>
          {profileData.resumeFileName && (
            <span className="text-xs text-[var(--color-text-subtle)] truncate">
              {profileData.resumeFileName}
            </span>
          )}
        </div>
        <input
          type="file"
          name="resume"
          id="resume"
          ref={resumeInputRef}
          onChange={() => {}} /* On change handled by parent */
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
        />
        <p className="text-[10px] text-[var(--color-text-subtle)] mt-1">
          Accepted formats: PDF, DOC, DOCX, TXT.
        </p>
      </div>
      <div>
        <label
          htmlFor="availability"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Availability
        </label>
        <FormInput
          type="text"
          name="availability"
          id="availability"
          value={profileData.availability}
          onChange={handleInputChange}
          placeholder="e.g., Immediately, In 2 weeks"
        />
      </div>
      <div>
        <label
          htmlFor="keySkills"
          className="block text-xs font-medium text-[var(--color-text-body-light)] mb-1"
        >
          Key Skills (use commas to separate)
        </label>
        <FormTextarea
          ref={textareaRef}
          name="keySkills"
          id="keySkills"
          rows="3"
          value={profileData.keySkills}
          onChange={handleInputChange}
          placeholder="e.g., JavaScript, React, Node.js, Project Management"
        />
      </div>
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-white)] bg-[var(--color-primary-action)] hover:bg-[var(--color-primary-action-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-action)] disabled:opacity-50"
        >
          {isLoading && (
            <SpinnerIcon className="w-3.5 h-3.5 mr-1.5 animate-spin" />
          )}
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileEditTab;

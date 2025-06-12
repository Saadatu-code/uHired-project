// src/components/settings/ProfileHeader.jsx
import React from "react";

// Icons - assuming they are available from a central location
import { CameraIcon, SpinnerIcon } from "../ui/Icons";

// This is a new, reusable component for the header section of the profile tabs.
const ProfileHeader = ({
  profileData,
  avatarPreview,
  isLoading,
  onAvatarFileChange,
  onSaveAvatar,
  onAvatarUploadClick,
  fileInputRef,
}) => {
  const calculateProfileCompletion = () => {
    const fields = [
      profileData.fullName,
      profileData.email,
      profileData.phone,
      profileData.location,
      profileData.currentJobTitle,
      profileData.preferredJobTitles,
      profileData.employmentStatus,
      profileData.jobTypePreferences,
      profileData.resumeFileName,
      profileData.availability,
      profileData.keySkills,
      profileData.minimumSalary,
    ];
    const filledFields = fields.filter(
      (field) => field && String(field).trim() !== ""
    ).length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const profileCompletionPercentage = calculateProfileCompletion();

  const generateAvatarInitials = (name) => {
    if (!name || typeof name !== "string" || name.trim() === "") return "U";
    const nameParts = name.trim().split(" ").filter(Boolean);
    if (nameParts.length === 0) return "U";
    let initials = nameParts[0].charAt(0);
    if (nameParts.length > 1) {
      initials += nameParts[nameParts.length - 1].charAt(0);
    }
    return initials.toUpperCase();
  };

  const avatarInitials = generateAvatarInitials(profileData.fullName);
  const isDarkTheme =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");
  const placeholderBgColor = isDarkTheme ? "012A52" : "D9E8F6";
  const placeholderTextColor = isDarkTheme ? "2A8EE8" : "0466C8";
  const placeholderAvatarUrl = `https://placehold.co/112x112/${placeholderBgColor}/${placeholderTextColor}?text=${encodeURIComponent(
    avatarInitials
  )}&font=inter`;

  return (
    <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center md:items-center justify-between p-4 mb-4">
      <div className="relative group w-28 h-28 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        {avatarPreview && avatarPreview.startsWith("data:image") ? (
          <img
            className="h-full w-full rounded-full object-cover aspect-square ring-2 ring-[var(--color-primary-light)]"
            src={avatarPreview}
            alt="User avatar preview"
          />
        ) : profileData.avatarUrl ? (
          <img
            className="h-full w-full rounded-full object-cover aspect-square ring-2 ring-[var(--color-primary-light)]"
            src={profileData.avatarUrl}
            alt="User avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderAvatarUrl;
            }}
          />
        ) : (
          <div className="h-full w-full rounded-full bg-[var(--color-primary-lighter)] flex items-center justify-center text-4xl font-semibold text-[var(--color-primary-action)] ring-2 ring-[var(--color-primary-light)]">
            {avatarInitials}
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={onAvatarFileChange}
          accept="image/*"
          className="hidden"
        />
        <button
          onClick={onAvatarUploadClick}
          className="absolute bottom-0 right-0 bg-[var(--color-component-background)] hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 p-1.5 rounded-full shadow-md border border-[var(--color-border-light)]"
          aria-label="Change profile photo"
        >
          <CameraIcon className="w-4 h-4 text-[var(--color-primary-action)]" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center flex-grow text-center md:text-left mb-4 md:mb-0">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-[var(--color-text-heading-primary)] truncate">
            {profileData.fullName}
          </h2>
          <p className="text-sm text-[var(--color-text-subtle)] truncate">
            {profileData.email}
          </p>
        </div>
        {avatarPreview && avatarPreview.startsWith("data:image") && (
          <button
            onClick={onSaveAvatar}
            disabled={isLoading}
            className="mt-2 w-full md:w-auto inline-flex items-center justify-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[var(--color-primary-action)] hover:bg-[var(--color-primary-action-hover)] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--color-primary-action)] disabled:opacity-50"
          >
            {isLoading && (
              <SpinnerIcon className="w-3.5 h-3.5 mr-1.5 animate-spin" />
            )}
            Save Photo
          </button>
        )}
      </div>

      <div className="w-full md:w-auto mt-4 md:mt-6 px-4 md:px-0 md:ml-0">
        <div className="flex flex-wrap justify-between text-xs text-[var(--color-text-subtle)]">
          <span className="pr-1">Profile Completion</span>
          <span>{profileCompletionPercentage}%</span>
        </div>
        <div className="w-full bg-[var(--color-primary-lighter)] rounded-full h-1.5 mt-1">
          <div
            className="bg-[var(--color-primary-action)] h-1.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${profileCompletionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

// src/pages/SettingsPage.jsx
import React, { useState, useEffect, useRef } from "react";

// Import Modals and other specific components
import CancelPlanModal from "../components/modals/CancelPlanModal.jsx";
import ChangePaymentModal from "../components/modals/ChangePaymentModal.jsx";
import ExportDataModal from "../components/modals/ExportDataModal.jsx";
import DeleteAccountModal from "../components/modals/DeleteAccountModal.jsx";

// Import the new tab components
import ProfileHeader from "../components/settings/ProfileHeader.jsx";
import ProfileViewTab from "../components/settings/ProfileViewTab.jsx";
import ProfileEditTab from "../components/settings/ProfileEditTab.jsx";
import AccountSecurityTab from "../components/settings/AccountSecurityTab.jsx";
import AiCustomizationTab from "../components/settings/AiCustomizationTab.jsx";
import ConnectedAppsTab from "../components/settings/ConnectedAppsTab.jsx";
import JobTrackingTab from "../components/settings/JobTrackingTab.jsx";
import NotificationsTab from "../components/settings/NotificationsTab.jsx";
import SubscriptionsTab from "../components/settings/SubscriptionsTab.jsx";
import PrivacyDataTab from "../components/settings/PrivacyDataTab.jsx";
import AccessibilityTab from "../components/settings/AccessibilityTab.jsx";

// Import necessary icons
import { SpinnerIcon } from "../components/ui/Icons.jsx";

const SettingsPage = ({
  navigateTo,
  userEmail: propUserEmail,
  userName: propUserName,
  userAvatarUrl: propUserAvatarUrl,
  onUserDataUpdate,
  initialTab,
  accessibilityProps,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab || "view-profile");

  // --- State Management ---
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });

  const [profileData, setProfileData] = useState({
    fullName: propUserName,
    email: propUserEmail,
    phone: "+44 7700 900000",
    location: "London, UK",
    currentJobTitle: "Senior Product Manager @ Tech Solutions",
    preferredJobTitles: "Product Owner, Head of Product, Senior PM",
    employmentStatus: "Employed",
    jobTypePreferences: "Full-time, Remote",
    resumeFileName: "my_cv_final_v2.pdf",
    availability: "Immediately Available",
    keySkills: "Product Strategy, Agile Methodologies, User Research",
    minimumSalary: "£75,000",
    avatarUrl: propUserAvatarUrl,
  });

  const [avatarPreview, setAvatarPreview] = useState(profileData.avatarUrl);
  const fileInputRef = useRef(null);

  // --- Effects ---
  useEffect(() => {
    // Update profile data if props change
    setProfileData((prevData) => ({
      ...prevData,
      fullName: propUserName,
      email: propUserEmail,
      avatarUrl: propUserAvatarUrl,
    }));
    setAvatarPreview(propUserAvatarUrl);
  }, [propUserName, propUserEmail, propUserAvatarUrl]);

  useEffect(() => {
    // Handle hash changes to switch tabs
    if (initialTab && initialTab !== activeTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // --- Event Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUploadClick = () => fileInputRef.current?.click();

  const handleSaveAvatar = async () => {
    setIsLoading(true);
    setFormMessage({ type: "", text: "" });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (avatarPreview && avatarPreview.startsWith("data:image")) {
      setProfileData((prev) => ({ ...prev, avatarUrl: avatarPreview }));
      onUserDataUpdate?.({ userAvatarUrl: avatarPreview });
      setFormMessage({
        type: "success",
        text: "Avatar updated successfully! (Demo)",
      });
    } else {
      setFormMessage({ type: "info", text: "No new avatar image selected." });
    }
    setIsLoading(false);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage({ type: "", text: "" });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onUserDataUpdate?.({
      userName: profileData.fullName,
      userEmail: profileData.email,
    });
    setIsLoading(false);
    setFormMessage({ type: "success", text: "Profile updated! (Demo)" });
  };

  // --- Tab Rendering ---
  const renderTabContent = () => {
    const showProfileHeader =
      activeTab === "view-profile" || activeTab === "edit-profile";

    // Pass only necessary props to each component
    const tabProps = {
      navigateTo,
      profileData,
      handleInputChange,
      handleSaveChanges,
      isLoading,
      SpinnerIcon,
    };

    return (
      <>
        {showProfileHeader && (
          <ProfileHeader
            profileData={profileData}
            avatarPreview={avatarPreview}
            isLoading={isLoading}
            onAvatarFileChange={handleAvatarFileChange}
            onSaveAvatar={handleSaveAvatar}
            onAvatarUploadClick={handleAvatarUploadClick}
            fileInputRef={fileInputRef}
          />
        )}
        {formMessage.text && (
          <div className="w-full mx-auto mb-4">
            <div
              className={`p-3 rounded-md text-sm ${
                formMessage.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-200 dark:bg-green-700/30 dark:text-green-300 dark:border-green-600/50"
                  : formMessage.type === "error"
                  ? "bg-red-100 text-red-700 border border-red-200 dark:bg-red-700/30 dark:text-red-300 dark:border-red-600/50"
                  : "bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-700/30 dark:text-blue-300 dark:border-blue-600/50"
              }`}
            >
              {formMessage.text}
            </div>
          </div>
        )}

        {
          {
            "view-profile": <ProfileViewTab {...tabProps} />,
            "edit-profile": <ProfileEditTab {...tabProps} />,
            "account-security": <AccountSecurityTab {...tabProps} />,
            "ai-customization": <AiCustomizationTab {...tabProps} />,
            "connected-apps": <ConnectedAppsTab {...tabProps} />,
            "job-tracking": <JobTrackingTab {...tabProps} />,
            notifications: <NotificationsTab {...tabProps} />,
            subscriptions: <SubscriptionsTab {...tabProps} />,
            "privacy-data": (
              <PrivacyDataTab {...tabProps} profileData={profileData} />
            ),
            accessibility: (
              <AccessibilityTab {...tabProps} {...accessibilityProps} />
            ),
          }[activeTab]
        }
      </>
    );
  };

  const TabButton = ({ id, title, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-left group w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-action)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-component-background)]
        ${
          isActive
            ? "bg-[var(--color-primary-action)] text-[var(--color-text-white)] shadow-sm"
            : "text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)]"
        }`}
    >
      <span>{title}</span>
    </button>
  );

  const settingsTabs = [
    { id: "view-profile", title: "View Profile" },
    { id: "edit-profile", title: "Edit Profile" },
    { id: "account-security", title: "Account Security" },
    { id: "ai-customization", title: "AI Assistant" },
    { id: "connected-apps", title: "Connected Apps" },
    { id: "job-tracking", title: "Job Tracking" },
    { id: "notifications", title: "Notifications" },
    { id: "subscriptions", title: "Subscriptions" },
    { id: "privacy-data", title: "Privacy & Data" },
    { id: "accessibility", title: "Accessibility" },
  ];

  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading-primary)] mb-6 px-1 md:px-0 text-left">
        Application Settings
      </h1>
      <div className="md:grid md:grid-cols-12 md:gap-8">
        <aside className="md:col-span-4 lg:col-span-3 mb-6 md:mb-0 md:sticky md:top-8 self-start transition-all duration-300 ease-in-out">
          <div className="space-y-1">
            {settingsTabs.map((tab) => (
              <TabButton
                key={tab.id}
                {...tab}
                isActive={activeTab === tab.id}
              />
            ))}
          </div>
        </aside>
        <main className="md:col-span-8 lg:col-span-9">
          <div className="bg-[var(--color-component-background)] shadow-lg rounded-xl p-6 ring-1 ring-inset ring-[var(--color-border-light)] min-h-full">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;

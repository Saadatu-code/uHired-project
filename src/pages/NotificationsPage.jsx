// src/pages/NotificationsPage.jsx
import React, { useState, useEffect } from "react";

// Re-using icons from TopNavbar.jsx or define them here if preferred
// For simplicity, I'll copy the relevant ones. In a larger app, centralize icons.
const NotificationBriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const NotificationDocumentTextIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);
const NotificationMessageSquareIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const CogIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.093c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.27.96-.12 1.35l-.773.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.93l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527a1.125 1.125 0 01-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108 1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107 1.204l-.527-.738a1.125 1.125 0 01.12-1.35l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71.505.78-.93l.15-.893z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const BellDotIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const initialNotifications = [
  {
    id: 1,
    type: "job",
    title: "New Job Matches!",
    message: "We found 3 new jobs that match your profile.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    icon: NotificationBriefcaseIcon,
    read: false,
  },
  {
    id: 2,
    type: "resume",
    title: "Resume Updated",
    message: 'Your "Senior Developer" resume was successfully updated.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    icon: NotificationDocumentTextIcon,
    read: true,
  },
  {
    id: 3,
    type: "interview",
    title: "Interview Reminder",
    message: "Your interview with Tech Solutions is tomorrow at 10 AM.",
    timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
    icon: NotificationMessageSquareIcon,
    read: false,
  },
  {
    id: 4,
    type: "job",
    title: "Application Viewed",
    message: 'Your application for "Product Manager" was viewed.',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    icon: NotificationBriefcaseIcon,
    read: true,
  },
  {
    id: 5,
    type: "system",
    title: "Welcome to uHired!",
    message: "Explore features and start your job search journey.",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    icon: CogIcon,
    read: true,
  },
  {
    id: 6,
    type: "job",
    title: "New Opportunity: UI/UX Designer",
    message: "Creative Inc. is looking for a talented designer.",
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    icon: NotificationBriefcaseIcon,
    read: false,
  },
  {
    id: 7,
    type: "resume",
    title: "AI Suggestion: Resume Keywords",
    message: 'Add "Agile" and "Scrum" to your resume for better matching.',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    icon: NotificationDocumentTextIcon,
    read: false,
  },
  {
    id: 8,
    type: "system",
    title: "Profile Completion Reminder",
    message:
      "Your profile is 80% complete. Finish it for better job recommendations.",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    icon: CogIcon,
    read: true,
  },
];

const formatTimeAgo = (date) => {
  const now = new Date();
  const seconds = Math.round((now - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  if (seconds < 60) return `${seconds}s ago`;
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return `Yesterday`;
  return `${days}d ago`;
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("all");

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const displayedNotifications =
    activeTab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  const TabButton = ({ tabName, label }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors no-underline
        ${
          activeTab === tabName
            ? "bg-[var(--color-primary-action)] text-white shadow-md"
            : "text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)]"
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="mx-auto w-full md:w-3/4 lg:w-1/2 p-4 md:p-6 lg:p-8 bg-[var(--color-component-background)] text-[var(--color-text-body)] rounded-xl shadow-xl ring-1 ring-inset ring-[var(--color-border-light)] min-h-full flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading-primary)]">
          Notifications
        </h1>
      </header>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 space-y-3 sm:space-y-0">
        <div className="flex space-x-2 bg-[var(--color-page-background)] p-1 rounded-lg">
          <TabButton tabName="all" label="All" />
          <TabButton tabName="unread" label="Unread" />
        </div>
        <button
          onClick={markAllAsRead}
          disabled={
            notifications.every((n) => n.read) ||
            (activeTab === "unread" && displayedNotifications.length === 0)
          }
          className="px-3 py-1.5 text-xs font-medium rounded-md border border-[var(--color-border-medium)] text-[var(--color-text-body-light)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] hover:border-[var(--color-primary-action)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Mark all as read
        </button>
      </div>

      {displayedNotifications.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center py-12">
          <BellDotIcon className="w-16 h-16 text-[var(--color-primary-lighter)] mb-4" />
          <p className="text-lg font-semibold text-[var(--color-text-heading-secondary)] mb-1">
            {activeTab === "unread"
              ? "All caught up!"
              : "No notifications yet."}
          </p>
          <p className="text-sm text-[var(--color-text-subtle)]">
            {activeTab === "unread"
              ? "You have no unread notifications."
              : "We'll let you know when something new comes up."}
          </p>
        </div>
      ) : (
        <ul
          role="list"
          className="divide-y divide-[var(--color-border-light)] divide-opacity-75 flex-grow overflow-y-auto notification-scrollbar pr-1"
        >
          {displayedNotifications.map((notification) => (
            <li
              key={notification.id}
              // Consistent padding on the li. The pl-4 accounts for the border + desired text indent.
              className={`relative py-4 pl-4 pr-1 transition-colors duration-150 group ${
                !notification.read
                  ? "cursor-pointer hover:bg-[var(--color-primary-lighter)]"
                  : "opacity-70"
              }`}
              onClick={() => !notification.read && markAsRead(notification.id)}
            >
              {!notification.read && (
                // Absolute positioned border, does not affect flow of sibling content.
                // It sits within the li's pl-4 area.
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-primary-action)] rounded-l-sm group-hover:bg-[var(--color-primary-action-hover)]"></div>
              )}
              {/* This div's content will now always start at the same horizontal position relative to the li's padding box */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-primary-lighter)]">
                  <notification.icon className="w-5 h-5 text-[var(--color-primary-action)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${
                      notification.read
                        ? "text-[var(--color-text-body)]"
                        : "text-[var(--color-text-heading-secondary)]"
                    }`}
                  >
                    {notification.title}
                  </p>
                  <p className="text-sm text-[var(--color-text-body-light)] truncate mt-0.5">
                    {notification.message}
                  </p>
                </div>
                <div className="flex-shrink-0 self-start text-xs text-[var(--color-text-subtle)] whitespace-nowrap">
                  {formatTimeAgo(notification.timestamp)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsPage;

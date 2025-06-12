// src/components/layout/DashboardShell.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

// Icons for Sidebar navItems
const HomeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const FileIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);
const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const BookOpenIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);
const MessageCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
    <circle cx="12" cy="10" r="2"></circle>
    <line x1="12" y1="2" x2="12" y2="4"></line>
    <line x1="12" y1="14" x2="12" y2="16"></line>
  </svg>
);

const navItemsList = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: <HomeIcon />,
    sectionId: "dashboard",
  },
  {
    id: "job-finder",
    name: "Job Finder",
    icon: <SearchIcon />,
    sectionId: "job-finder",
  },
  {
    id: "resume-builder",
    name: "Resume Builder",
    icon: <FileIcon />,
    sectionId: "resume-builder",
  },
  {
    id: "cover-letter",
    name: "Cover Letter",
    icon: <MailIcon />,
    sectionId: "cover-letter",
  },
  {
    id: "career-guide",
    name: "Career Guide",
    icon: <BookOpenIcon />,
    sectionId: "career-guide",
  },
  {
    id: "interview-coach",
    name: "Interview Coach",
    icon: <MessageCircleIcon />,
    sectionId: "interview-coach",
  },
];

const DashboardShell = ({
  children,
  activeSectionId,
  onNavItemClick,
  userName,
  userEmail,
  userAvatarUrl,
  navigateTo,
  currentTheme,
  toggleTheme,
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uHiredSidebarCollapsed") === "true";
    }
    return false;
  });

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((prevCollapsed) => {
      const newState = !prevCollapsed;
      if (typeof window !== "undefined") {
        localStorage.setItem("uHiredSidebarCollapsed", newState.toString());
      }
      return newState;
    });
  };

  return (
    <div className="flex h-screen font-sans bg-[var(--color-page-background)]">
      <Sidebar
        navItems={navItemsList}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebarCollapse={toggleSidebarCollapse}
        activeSectionId={activeSectionId}
        onNavItemClick={onNavItemClick}
        currentTheme={currentTheme}
      />
      <div
        id="mainContentAreaContainer"
        className={`flex-1 flex flex-col bg-[var(--color-page-background)] transition-all duration-300 ease-out ${
          isSidebarCollapsed ? "ml-14" : "ml-48"
        }`}
      >
        <TopNavbar
          userName={userName}
          userEmail={userEmail}
          userAvatarUrl={userAvatarUrl}
          navigateTo={navigateTo}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
        <main className="flex-1 flex flex-col overflow-y-auto bg-[var(--color-page-background)] p-6 md:p-8">
          <div className="flex-grow h-full">{children}</div>
        </main>
        <footer className="p-2 text-center text-xs text-[var(--color-text-subtle)] bg-[var(--color-page-background)] border-t border-[var(--color-border-light)] flex-shrink-0">
          &copy; {new Date().getFullYear()} uHired. All rights reserved. Your
          Intelligent Career Companion.
        </footer>
      </div>
    </div>
  );
};

export default DashboardShell;

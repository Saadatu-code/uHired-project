// src/components/layout/DashboardShell.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

// Icons for Sidebar (default size 16x16 for w-4 h-4)
const HomeIcon = () => (
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
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const SearchIcon = () => (
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
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const FileIcon = () => (
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
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);
const MailIcon = () => (
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
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const BookOpenIcon = () => (
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
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);
const MessageCircleIcon = () => (
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
  >
    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
    <circle cx="12" cy="10" r="2"></circle>
    <line x1="12" y1="2" x2="12" y2="4"></line>
    <line x1="12" y1="14" x2="12" y2="16"></line>
  </svg>
);
const IconCollapseState = () => (
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
  >
    <polyline points="11 7 6 12 11 17"></polyline>
    <polyline points="18 7 13 12 18 17"></polyline>
  </svg>
);
const IconExpandState = () => (
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
  >
    <polyline points="13 17 18 12 13 7"></polyline>
    <polyline points="6 17 11 12 6 7"></polyline>
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
  navigateTo,
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
    localStorage.getItem("uHiredSidebarCollapsed") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("sidebar-is-collapsed", isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  const toggleSidebarCollapse = () => {
    const newState = !isSidebarCollapsed;
    setIsSidebarCollapsed(newState);
    localStorage.setItem("uHiredSidebarCollapsed", newState.toString());
  };

  return (
    <div className="flex h-screen bg-page-background font-sans">
      <Sidebar
        navItems={navItemsList}
        collapseButtonIcons={{
          collapse: <IconCollapseState />,
          expand: <IconExpandState />,
        }}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebarCollapse={toggleSidebarCollapse}
        activeSectionId={activeSectionId}
        onNavItemClick={onNavItemClick}
      />
      <main
        id="mainContentArea"
        className={`main-content-area flex-1 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "ml-14" : "ml-48"
        }`}
      >
        {" "}
        {/* Adjusted for w-14 and w-48 */}
        <TopNavbar userName={userName} navigateTo={navigateTo} />
        <div className="p-6 sm:p-8 md:p-10 flex-grow">{children}</div>
        <footer className="mt-auto p-6 border-t border-border-light text-center text-xs text-text-subtle">
          &copy; {new Date().getFullYear()} uHired. All rights reserved. Your
          Intelligent Career Companion.
        </footer>
      </main>
    </div>
  );
};

export default DashboardShell;

// src/components/layout/TopNavbar.jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// --- Icon Definitions ---
const Bars3Icon = ({ className = "w-5 h-5", isMobileMenuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`${className} transition-opacity duration-300 ease-in-out ${
      isMobileMenuOpen ? "opacity-0" : "opacity-100"
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
    />
  </svg>
);
const XMarkIcon = ({ className = "w-5 h-5", isMobileMenuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`${className} transition-opacity duration-300 ease-in-out ${
      isMobileMenuOpen ? "opacity-100" : "opacity-0"
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SunIcon = ({ className = "w-5 h-5" }) => (
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
    <circle cx="12" cy="12" r="4" /> <path d="M12 4h.01" />{" "}
    <path d="M20 12h.01" /> <path d="M12 20h.01" /> <path d="M4 12h.01" />{" "}
    <path d="M17.657 6.343h.01" /> <path d="M17.657 17.657h.01" />{" "}
    <path d="M6.343 17.657h.01" /> <path d="M6.343 6.343h.01" />
  </svg>
);

const MoonIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
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
    <circle
      cx="17.5"
      cy="4"
      r="4"
      fill="var(--color-error-red)"
      stroke="none"
    />
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

const LogoutIcon = ({ className = "w-5 h-5" }) => (
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
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    />
  </svg>
);

const SparklesIcon = ({ className = "w-5 h-5" }) => (
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
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.188.398a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>
);
const QuestionMarkCircleIcon = ({ className = "w-5 h-5" }) => (
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
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
    />
  </svg>
);
const ShieldCheckIcon = ({ className = "w-5 h-5" }) => (
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
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

const NotificationBriefcaseIcon = ({ className = "w-4 h-4" }) => (
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
const NotificationDocumentTextIcon = ({ className = "w-4 h-4" }) => (
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
const NotificationMessageSquareIcon = ({ className = "w-4 h-4" }) => (
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

const StyledTooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const targetRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({
    top: 0,
    left: 0,
    opacity: 0,
  });

  const handleMouseEnter = () => {
    if (targetRef.current && text) {
      const rect = targetRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
        opacity: 1,
      });
      setShowTooltip(true);
    }
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
    setTooltipPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  useEffect(() => {
    if (showTooltip && tooltipRef.current && targetRef.current) {
      const tooltipNode = tooltipRef.current;
      const targetRect = targetRef.current.getBoundingClientRect();
      let newLeft =
        targetRect.left + targetRect.width / 2 - tooltipNode.offsetWidth / 2;
      if (newLeft < 8) newLeft = 8;
      if (newLeft + tooltipNode.offsetWidth > window.innerWidth - 8) {
        newLeft = window.innerWidth - tooltipNode.offsetWidth - 8;
      }
      setTooltipPosition((prev) => ({
        ...prev,
        left: newLeft,
        top: targetRect.bottom + 8,
      }));
    }
  }, [showTooltip]);

  return (
    <div
      className="relative inline-flex"
      ref={targetRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip &&
        text &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
              opacity: tooltipPosition.opacity,
            }}
            className="fixed z-[1000] px-2.5 py-1.5 text-xs font-medium bg-[var(--color-tooltip-bg)] text-[var(--color-tooltip-text)] rounded-md shadow-lg whitespace-nowrap transition-opacity duration-150"
          >
            {text}
            <div className="absolute w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] border-b-[var(--color-tooltip-bg)] -top-[6px] left-1/2 -translate-x-1/2"></div>
          </div>,
          document.body
        )}
    </div>
  );
};

const ThemeSwitch = ({ currentTheme, toggleTheme, isHighContrast }) => {
  const isDarkMode = currentTheme === "dark";

  const moonIconClass =
    isDarkMode && isHighContrast
      ? "h-3.5 w-3.5 text-yellow-400"
      : "h-3.5 w-3.5 text-[var(--color-primary-action)]";

  const thumbClasses = `pointer-events-none inline-flex items-center justify-center h-5 w-5 transform rounded-full bg-[var(--color-toggle-thumb)] ring-0 transition duration-200 ease-in-out ${
    isDarkMode ? "translate-x-5" : "translate-x-0"
  } ${isDarkMode && isHighContrast ? "border-2 border-white" : ""}`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-action)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-component-background)] ${
        isDarkMode
          ? "bg-[var(--color-primary-action)]"
          : "bg-gray-300 dark:bg-slate-700"
      } dark:hover:ring-2 dark:hover:ring-offset-1 dark:hover:ring-offset-[var(--color-component-background)] dark:hover:ring-[var(--color-primary-action-hover)]`}
      role="switch"
      aria-checked={isDarkMode}
    >
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={thumbClasses}>
        {isDarkMode ? (
          <MoonIcon className={moonIconClass} />
        ) : (
          <SunIcon className="h-3.5 w-3.5 text-yellow-500" />
        )}
      </span>
    </button>
  );
};

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

const mockNotifications = [
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
];

const NotificationPopover = ({
  notifications,
  onNavigate,
  currentTheme,
  closePopover,
}) => {
  const [activeTab, setActiveTab] = useState("all");

  let displayedNotifications = notifications;
  if (activeTab === "unread") {
    displayedNotifications = notifications.filter((n) => !n.read);
  }
  const recentNotifications = displayedNotifications.slice(0, 5);

  const TabButton = ({ tabName, label }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors no-underline 
        ${
          activeTab === tabName
            ? "bg-[var(--color-primary-action)] text-[var(--color-text-white)]"
            : "text-[var(--color-text-body-light)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)]"
        }`}
    >
      {label}
    </button>
  );

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    onNavigate("notifications");
    if (closePopover) {
      closePopover();
    }
  };

  const handleNotificationItemClick = (e) => {
    e.preventDefault();
    onNavigate("notifications");
    if (closePopover) {
      closePopover();
    }
  };

  return (
    <div className="origin-top-right absolute right-0 mt-2 w-60 sm:w-68 rounded-xl shadow-2xl bg-[var(--color-component-background)] ring-1 ring-[var(--color-border-light)] focus:outline-none border-t border-[var(--color-border-light)] border-opacity-75 z-50">
      <div className="px-2.5 py-1.5 border-b border-[var(--color-border-light)] border-opacity-75">
        <h3 className="text-sm font-semibold text-[var(--color-text-heading-primary)]">
          Notifications
        </h3>
      </div>
      <div className="flex space-x-1 p-1 border-b border-[var(--color-border-light)] border-opacity-75">
        <TabButton tabName="all" label="All" />
        <TabButton tabName="unread" label="Unread" />
      </div>
      <div className="max-h-60 overflow-y-auto notification-scrollbar">
        {recentNotifications.length === 0 ? (
          <p className="text-xs text-[var(--color-text-subtle)] text-center py-6 px-2.5">
            {activeTab === "unread"
              ? "No unread notifications."
              : "No notifications yet."}
          </p>
        ) : (
          <ul
            role="list"
            className="divide-y divide-[var(--color-border-light)] divide-opacity-75"
          >
            {recentNotifications.map((notification) => (
              <li
                key={notification.id}
                className={`relative hover:bg-[var(--color-primary-lighter)] transition-colors duration-150`}
              >
                {!notification.read && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--color-primary-action)]"></div>
                )}
                <a
                  href="#"
                  onClick={handleNotificationItemClick}
                  className="block p-1.5 no-underline hover:no-underline"
                >
                  <div className="flex items-start space-x-1.5">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-[var(--color-primary-lighter)]">
                      <notification.icon className="w-3 h-3 text-[var(--color-primary-action)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[var(--color-text-heading-secondary)] truncate">
                        {notification.title}
                      </p>
                      <p className="text-xs text-[var(--color-text-body)] truncate mt-0.5">
                        {notification.message}
                      </p>
                      <p className="text-[10px] text-[var(--color-text-subtle)] mt-1">
                        {formatTimeAgo(notification.timestamp)}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="px-2.5 py-1.5 border-t border-[var(--color-border-light)] border-opacity-75 text-center">
        <a
          href="#"
          onClick={handleSeeAllClick}
          className="text-xs font-medium text-[var(--color-primary-action)] hover:text-[var(--color-primary-action-hover)] no-underline hover:no-underline"
        >
          See All
        </a>
      </div>
    </div>
  );
};

const TopNavbar = ({
  navigateTo = (path) =>
    console.warn("navigateTo prop not provided, tried to navigate to:", path),
  userName = "User",
  userEmail = "user@example.com",
  userAvatarUrl = "",
  toggleTheme = () => console.warn("toggleTheme prop not provided"),
  currentTheme = "light",
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationPopoverOpen, setIsNotificationPopoverOpen] =
    useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const profileDropdownRef = useRef(null);
  const profileButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const notificationPopoverRef = useRef(null);
  const notificationButtonRef = useRef(null);

  useEffect(() => {
    // Check for high-contrast mode when the component mounts and when the theme changes
    const checkHighContrast = () => {
      setIsHighContrast(
        document.documentElement.classList.contains("high-contrast")
      );
    };
    checkHighContrast();

    // Observe class changes on the html element
    const observer = new MutationObserver(checkHighContrast);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
      if (
        notificationPopoverRef.current &&
        !notificationPopoverRef.current.contains(event.target) &&
        notificationButtonRef.current &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        setIsNotificationPopoverOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (
      isProfileDropdownOpen ||
      isNotificationPopoverOpen ||
      isMobileMenuOpen
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdownOpen, isNotificationPopoverOpen, isMobileMenuOpen]);

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

  const avatarInitials = generateAvatarInitials(userName);

  const isDarkTheme = currentTheme === "dark";

  let placeholderBgColor;
  let placeholderTextColor;

  if (isDarkTheme && isHighContrast) {
    placeholderBgColor = "ffff00"; // yellow
    placeholderTextColor = "000000"; // black
  } else if (isDarkTheme) {
    placeholderBgColor = "012A52";
    placeholderTextColor = "2A8EE8";
  } else if (isHighContrast) {
    placeholderBgColor = "0000ff"; // blue
    placeholderTextColor = "ffffff"; // white
  } else {
    placeholderBgColor = "D9E8F6";
    placeholderTextColor = "0466C8";
  }

  const placeholderAvatarUrl = `https://placehold.co/36x36/${placeholderBgColor}/${placeholderTextColor}?text=${encodeURIComponent(
    avatarInitials
  )}&font=inter`;

  const handleMobileMenuNavigation = (path) => {
    navigateTo(path);
    setIsMobileMenuOpen(false);
  };

  const toggleNotificationPopover = () => {
    setIsNotificationPopoverOpen(!isNotificationPopoverOpen);
    if (isProfileDropdownOpen) setIsProfileDropdownOpen(false);
  };

  const closeNotificationPopover = () => {
    setIsNotificationPopoverOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    if (isNotificationPopoverOpen) setIsNotificationPopoverOpen(false);
  };

  return (
    <nav className="sticky top-0 h-14 flex items-center justify-between w-full flex-shrink-0 z-20 px-4 sm:px-6 bg-[var(--color-component-background)] border-b border-[var(--color-border-light)]">
      <div className="flex items-center md:hidden">
        <button
          ref={mobileMenuButtonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 rounded-md text-[var(--color-text-body-light)] hover:text-[var(--color-primary-action)] hover:bg-[var(--color-primary-lighter)] relative w-8 h-8 flex items-center justify-center"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <Bars3Icon
            className="w-5 h-5 absolute"
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <XMarkIcon
            className="w-5 h-5 absolute"
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </button>
      </div>
      <div className="hidden md:flex items-center"></div>

      <div className="flex items-center space-x-3">
        <StyledTooltip
          text={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
        >
          <ThemeSwitch
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
            isHighContrast={isHighContrast}
          />
        </StyledTooltip>

        <div className="relative">
          <StyledTooltip text="View notifications">
            <button
              ref={notificationButtonRef}
              onClick={toggleNotificationPopover}
              className="relative p-2 rounded-full text-[var(--color-text-body-light)] hover:text-[var(--color-primary-action)] hover:bg-[var(--color-primary-lighter)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-component-background)] focus-visible:ring-[var(--color-primary-action)] flex items-center justify-center dark:hover:ring-2 dark:hover:ring-offset-1 dark:hover:ring-offset-[var(--color-component-background)] dark:hover:ring-[var(--color-primary-action-hover)]"
              aria-label="View notifications"
              aria-expanded={isNotificationPopoverOpen}
              style={{ width: "36px", height: "36px" }}
            >
              <BellDotIcon className="w-5 h-5" />
            </button>
          </StyledTooltip>
          {isNotificationPopoverOpen && (
            <div ref={notificationPopoverRef}>
              <NotificationPopover
                notifications={mockNotifications}
                onNavigate={navigateTo}
                currentTheme={currentTheme}
                closePopover={closeNotificationPopover}
              />
            </div>
          )}
        </div>

        <div className="relative">
          <button
            ref={profileButtonRef}
            type="button"
            onClick={toggleProfileDropdown}
            className="flex items-center text-sm rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-component-background)] focus-visible:ring-[var(--color-primary-action)] dark:hover:ring-2 dark:hover:ring-offset-2 dark:hover:ring-offset-[var(--color-component-background)] dark:hover:ring-[var(--color-primary-action-hover)]"
            id="user-menu-button"
            aria-expanded={isProfileDropdownOpen}
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-9 w-9 rounded-full object-cover bg-[var(--color-primary-lighter)]"
              src={userAvatarUrl || placeholderAvatarUrl}
              alt={`${userName} avatar`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderAvatarUrl;
              }}
            />
          </button>
          {isProfileDropdownOpen && (
            <div
              ref={profileDropdownRef}
              className="origin-top-right absolute right-0 mt-2 w-60 rounded-xl shadow-lg bg-[var(--color-component-background)] ring-1 ring-[var(--color-border-light)] focus:outline-none border-t border-[var(--color-border-light)] divide-y divide-[var(--color-border-light)]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-[var(--color-text-heading-primary)] truncate">
                  {userName}
                </p>
                <p className="text-xs text-[var(--color-text-subtle)] truncate">
                  {userEmail}
                </p>
              </div>
              <div className="py-1" role="none">
                {/* Removed My Profile link */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("settings");
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md mx-1.5 my-0.5 no-underline hover:no-underline"
                  role="menuitem"
                >
                  <CogIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
                  Settings
                </a>
              </div>
              <div className="py-1" role="none">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("settings?tab=subscriptions");
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md mx-1.5 my-0.5 no-underline hover:no-underline"
                  role="menuitem"
                >
                  <SparklesIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
                  Upgrade
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("help");
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md mx-1.5 my-0.5 no-underline hover:no-underline"
                  role="menuitem"
                >
                  <QuestionMarkCircleIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
                  Help & FAQ
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("legal-documents");
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md mx-1.5 my-0.5 no-underline hover:no-underline"
                  role="menuitem"
                >
                  <ShieldCheckIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
                  Terms & Policy
                </a>
              </div>
              <div className="py-1" role="none">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("login");
                    setIsProfileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md mx-1.5 my-0.5 no-underline hover:no-underline"
                  role="menuitem"
                >
                  <LogoutIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
                  Log Out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 right-0 mt-0.5 bg-[var(--color-component-background)] shadow-2xl rounded-b-xl border-t border-[var(--color-border-light)] z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        style={{ maxHeight: isMobileMenuOpen ? "500px" : "0px" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="px-3 py-3 border-b border-[var(--color-border-light)] mb-2">
            <div className="flex items-center space-x-3">
              <img
                className="h-10 w-10 rounded-full object-cover bg-[var(--color-primary-lighter)]"
                src={
                  userAvatarUrl ||
                  placeholderAvatarUrl.replace("36x36", "40x40")
                }
                alt={`${userName} avatar`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderAvatarUrl.replace("36x36", "40x40");
                }}
              />
              <div>
                <p className="text-base font-semibold text-[var(--color-text-heading-primary)] truncate">
                  {userName}
                </p>
                <p className="text-xs text-[var(--color-text-subtle)] truncate">
                  {userEmail}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 text-sm text-[var(--color-text-body)] rounded-md hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group">
            <span className="flex items-center">
              {currentTheme === "light" ? (
                <SunIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />
              ) : (
                <MoonIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />
              )}
              Switch Theme
            </span>
            <ThemeSwitch
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
            />
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleMobileMenuNavigation("notifications");
            }}
            className="flex items-center px-3 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md"
          >
            <BellDotIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
            Notifications
          </a>
          {/* Removed My Profile link from mobile menu */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleMobileMenuNavigation("settings");
            }}
            className="flex items-center px-3 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md"
          >
            <CogIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
            Settings
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleMobileMenuNavigation("login");
            }}
            className="flex items-center px-3 py-2.5 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary-action)] group rounded-md"
          >
            <LogoutIcon className="mr-3 w-5 h-5 text-[var(--color-text-body-light)] group-hover:text-[var(--color-primary-action)]" />{" "}
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

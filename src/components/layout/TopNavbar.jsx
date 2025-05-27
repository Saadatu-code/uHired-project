// src/components/layout/TopNavbar.jsx
import React, { useState, useEffect, useRef } from "react";

// Lucide-Style SVG Icons (defined locally for this component)
const Bars3Icon = ({ className = "w-6 h-6" }) => (
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
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const BellIconOutline = ({ className = "w-6 h-6" }) => (
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
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    />
  </svg>
);
const UserCircleIconOutline = ({ className = "w-5 h-5" }) => (
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
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const Cog6ToothIconOutline = ({ className = "w-5 h-5" }) => (
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
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.096.573.393 1.076.784 1.464l.932.889c.43.41.994.625 1.584.625h2.019c.59 0 1.097.375 1.214.926l.218 1.039c.096.457.026.94-.195 1.332l-.78 1.352c-.273.473-.398.996-.398 1.53l0 .538c0 .533.125 1.056.398 1.53l.78 1.352c.22.392.29.875.195 1.332l-.218 1.039c-.117.55-.624.926-1.214.926h-2.019c-.59 0-1.154-.215-1.584-.625l-.932-.889c-.39-.388-.687-.89-.784-1.464l-.213-1.281c-.09-.543-.56-.941-1.11-.941h-2.594c-.55 0-1.019.398-1.11.941l-.213 1.281c-.096.573-.393 1.076-.784 1.464l-.932.889c-.43.41.994.625-1.584.625H4.342c-.59 0-1.097-.375-1.214-.926l-.218-1.039c-.096-.457-.026-.94.195-1.332l.78-1.352c.273-.473.398-.996-.398-1.53l0-.538c0-.533-.125-1.056-.398-1.53l-.78-1.352c-.22-.392-.29-.875-.195-1.332l.218-1.039c.117-.55.624-.926 1.214-.926h2.019c.59 0 1.154.215 1.584.625l.932.889c.39.388.687.891.784 1.464l.213-1.281z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const ArrowLeftOnRectangleIconOutline = ({ className = "w-5 h-5" }) => (
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
// ChevronDownIconOutline removed as user name is not next to avatar

const SunIconOutline = ({ className = "w-5 h-5" }) => (
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
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 012.25 2.25 2.25 2.25 0 01-2.25 2.25A2.25 2.25 0 019.75 12a2.25 2.25 0 012.25-2.25z"
    />
  </svg>
);
const MoonIconOutline = ({ className = "w-5 h-5" }) => (
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
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

const TopNavbar = ({
  navigateTo,
  userName = "User",
  onToggleSidebar,
  isSidebarOpen,
  toggleTheme,
  currentTheme,
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);
  const profileButtonRef = useRef(null);

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
    };

    if (isProfileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const avatarInitial = userName ? userName.charAt(0).toUpperCase() : "U";
  const avatarImageUrl = `https://placehold.co/40x40/E7D1FF/8B5CF6?text=${avatarInitial}&font=inter`; // Using secondary purple for avatar placeholder

  return (
    <nav className="bg-component-background h-10 flex items-center justify-between px-4 sm:px-6 w-full flex-shrink-0 shadow-sm border-b border-border-light ">
      <div className="flex items-center">
        {/* Sidebar Toggle Button Removed */}
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-uhired-gray-600 hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-uhired-primary-blue"
          aria-label={`Switch to ${
            currentTheme === "light" ? "dark" : "light"
          } mode`}
        >
          {currentTheme === "light" ? (
            <MoonIconOutline className="w-5 h-5" />
          ) : (
            <SunIconOutline className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={() => navigateTo("notifications")}
          className="text-uhired-gray-600 hover:text-uhired-primary-blue p-2 rounded-full hover:bg-uhired-primary-lighter-blue transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-uhired-primary-blue"
          aria-label="View notifications"
        >
          <BellIconOutline className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full ring-1 ring-white bg-uhired-action-pink"></span>
        </button>

        <div className="relative">
          <div>
            <button
              ref={profileButtonRef}
              type="button"
              className="flex items-center text-sm rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-uhired-gray-50 focus-visible:ring-uhired-secondary-purple"
              id="user-menu-button"
              aria-expanded={isProfileDropdownOpen}
              aria-haspopup="true"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-9 w-9 rounded-full object-cover ring-2 ring-uhired-secondary-purple shadow-sm"
                src={avatarImageUrl}
                alt={userName}
              />
            </button>
          </div>
          {isProfileDropdownOpen && (
            <div
              ref={profileDropdownRef}
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-xl shadow-lg py-1 bg-white ring-1 ring-uhired-gray-200 focus:outline-none z-50"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <div className="px-4 py-3 border-b border-uhired-gray-200">
                <p className="text-sm font-semibold text-uhired-gray-900 truncate">
                  {userName}
                </p>
                <p className="text-xs text-uhired-gray-500 truncate">
                  user@example.com
                </p>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("profile");
                  setIsProfileDropdownOpen(false);
                }}
                className="flex items-center px-4 py-2 text-sm text-uhired-gray-700 hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue group"
                role="menuitem"
                tabIndex="-1"
              >
                <UserCircleIconOutline className="mr-3 text-uhired-gray-500 group-hover:text-uhired-primary-blue" />{" "}
                My Profile
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("settings");
                  setIsProfileDropdownOpen(false);
                }}
                className="flex items-center px-4 py-2 text-sm text-uhired-gray-700 hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue group"
                role="menuitem"
                tabIndex="-1"
              >
                <Cog6ToothIconOutline className="mr-3 text-uhired-gray-500 group-hover:text-uhired-primary-blue" />{" "}
                Settings
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("login");
                  setIsProfileDropdownOpen(false);
                }}
                className="flex items-center px-4 py-2 text-sm text-uhired-gray-700 hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue rounded-b-md group"
                role="menuitem"
                tabIndex="-1"
              >
                <ArrowLeftOnRectangleIconOutline className="mr-3 text-uhired-gray-500 group-hover:text-uhired-primary-blue" />{" "}
                Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

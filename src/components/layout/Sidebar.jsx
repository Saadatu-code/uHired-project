// src/components/layout/Sidebar.jsx
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

// Tooltip component
const TooltipWithPortal = ({ content, position }) => {
  if (!position || !content) return null;
  const tooltipStyle = {
    position: "fixed",
    top: `${position.top}px`,
    left: `${position.left}px`,
    transform: "translateY(-50%) translateX(8px)", // Position tooltip to the right of the item
    zIndex: 1050, // Ensure tooltip is above other elements
    pointerEvents: "none", // Allow mouse events to pass through to elements below
  };
  return ReactDOM.createPortal(
    <div style={tooltipStyle}>
      {/* Tooltip bubble styling */}
      <span className="relative inline-block px-2 py-1 text-xs bg-[var(--color-tooltip-bg)] text-[var(--color-tooltip-text)] rounded-md shadow-xl whitespace-nowrap">
        {content}
        {/* Tooltip arrow (triangle) pointing left */}
        <div className="absolute w-0 h-0 border-y-[5px] border-y-transparent border-r-[5px] border-r-[var(--color-tooltip-bg)] -left-[5px] top-1/2 -translate-y-1/2"></div>
      </span>
    </div>,
    document.body // Append tooltip to the body to avoid z-index issues
  );
};

// Chevron Icon
const ChevronLeftIcon = ({ className = "w-4 h-4" }) => (
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
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const Sidebar = ({
  navItems,
  isSidebarCollapsed,
  toggleSidebarCollapse,
  activeSectionId,
  onNavItemClick,
  currentTheme, // Added currentTheme prop
}) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);
  const [collapseButtonHovered, setCollapseButtonHovered] = useState(false);
  const [collapseTooltipPosition, setCollapseTooltipPosition] = useState(null);

  const handleNav = (e, item) => {
    e.preventDefault();
    if (onNavItemClick) {
      onNavItemClick(item.sectionId);
    }
  };

  // Updated Tailwind CSS classes to use primary blue color scheme
  const activeBgClass = "bg-[var(--color-primary-action)]"; // Was bg-secondary-purple
  const activeTextClass = "text-[var(--color-text-white)]"; // Remains white for good contrast
  const inactiveTextClass = "text-[var(--color-text-body)]";
  const inactiveIconClass = "text-[var(--color-text-body-light)]";
  const itemHoverBgClass = "hover:bg-[var(--color-primary-lighter)]"; // Was hover:bg-secondary-light-purple
  const itemHoverTextClass = "hover:text-[var(--color-primary-action)]"; // Was hover:text-secondary-purple
  const collapseButtonIconColor = "text-[var(--color-text-body-light)]";
  const collapseButtonHoverBg = "hover:bg-[var(--color-border-light)]"; // Or hover:bg-[var(--color-primary-lighter)] for consistency
  const collapseButtonHoverIconColor =
    "hover:text-[var(--color-primary-action)]"; // Was hover:text-secondary-purple

  const handleNavItemMouseEnter = (item, event) => {
    if (isSidebarCollapsed) {
      const targetElement = event.currentTarget;
      const rect = targetElement.getBoundingClientRect();
      setHoveredItemId(item.id);
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 6,
      });
    }
  };
  const handleNavItemMouseLeave = () => {
    if (isSidebarCollapsed) {
      setHoveredItemId(null);
      setTooltipPosition(null);
    }
  };

  const handleCollapseButtonMouseEnter = (event) => {
    setCollapseButtonHovered(true);
    const targetElement = event.currentTarget;
    const rect = targetElement.getBoundingClientRect();
    setCollapseTooltipPosition({
      top: rect.top + rect.height / 2,
      left: rect.right + 10,
    });
  };
  const handleCollapseButtonMouseLeave = () => {
    setCollapseButtonHovered(false);
    setCollapseTooltipPosition(null);
  };

  const currentNavItems = Array.isArray(navItems) ? navItems : [];

  return (
    <>
      <aside
        id="sidebar"
        className={`bg-[var(--color-component-background)] flex flex-col shrink-0 fixed top-0 left-0 h-full z-30 transition-all duration-300 ease-out
                    ${isSidebarCollapsed ? "w-14" : "w-48"}`}
      >
        <div
          className={`h-14 flex items-center shrink-0 ${
            isSidebarCollapsed ? "px-0 justify-center" : "px-4 justify-start"
          }`}
        >
          {isSidebarCollapsed ? (
            <div className="w-8 h-8 bg-[var(--color-primary-action)] text-[var(--color-text-white)] flex items-center justify-center rounded-lg text-lg font-bold">
              {" "}
              {/* Changed to primary-action */}U
            </div>
          ) : (
            <h1 className="text-2xl font-extrabold tracking-tight flex items-baseline">
              <span className="text-[var(--color-primary-action)]">u</span>{" "}
              {/* Changed to primary-action */}
              <span
                className={`text-[var(--color-text-heading-primary)] overflow-hidden whitespace-nowrap transition-opacity duration-200 ease-in-out delay-100 ${
                  isSidebarCollapsed
                    ? "opacity-0 max-w-0"
                    : "opacity-100 max-w-xs"
                }`}
              >
                Hired
              </span>
            </h1>
          )}
        </div>

        <nav className="flex-grow overflow-y-auto overflow-x-hidden p-2.5 space-y-1">
          {currentNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.sectionId}`}
              onMouseEnter={(e) => handleNavItemMouseEnter(item, e)}
              onMouseLeave={handleNavItemMouseLeave}
              onClick={(e) => handleNav(e, item)}
              className={`flex items-center rounded-lg transition-colors duration-150 group no-underline hover:no-underline relative ${
                isSidebarCollapsed ? "p-2 justify-center" : "px-3 py-2"
              } ${
                activeSectionId === item.sectionId
                  ? `${activeBgClass} ${activeTextClass} shadow-sm`
                  : `${inactiveTextClass} ${itemHoverBgClass} ${itemHoverTextClass}`
              }`}
            >
              {item.icon &&
                React.cloneElement(item.icon, {
                  className: `w-5 h-5 shrink-0 transition-colors duration-150 ${
                    activeSectionId === item.sectionId
                      ? activeTextClass // Active icon is white on primary-action bg
                      : `${inactiveIconClass} group-hover:text-[var(--color-primary-action)]` // Changed to primary-action on hover
                  }`,
                })}
              <span
                className={`font-medium text-xs whitespace-nowrap overflow-hidden transition-all duration-200 ease-in-out delay-100 ${
                  isSidebarCollapsed
                    ? "opacity-0 max-w-0 pointer-events-none"
                    : "opacity-100 max-w-[100px] ml-2.5"
                }`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </aside>

      <button
        id="collapseSidebarBtn"
        onClick={toggleSidebarCollapse}
        onMouseEnter={handleCollapseButtonMouseEnter}
        onMouseLeave={handleCollapseButtonMouseLeave}
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={`fixed bottom-5 z-40 w-7 h-7 rounded-full bg-[var(--color-component-background)] border border-[var(--color-border-light)] shadow-lg 
                    flex items-center justify-center transition-all duration-300 ease-out group 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-action)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-component-background)]
                    ${collapseButtonHoverBg}
                    ${isSidebarCollapsed ? "left-14" : "left-48"} 
                  `}
        style={{ transform: `translateX(-50%)` }}
      >
        <ChevronLeftIcon
          className={`w-4 h-4 ${collapseButtonIconColor} group-hover:${collapseButtonHoverIconColor} transition-transform duration-300 ease-in-out ${
            isSidebarCollapsed ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <TooltipWithPortal
        content={
          hoveredItemId &&
          isSidebarCollapsed &&
          currentNavItems.find((item) => item.id === hoveredItemId)?.name
        }
        position={tooltipPosition}
      />
      <TooltipWithPortal
        content={
          collapseButtonHovered
            ? isSidebarCollapsed
              ? "Expand Sidebar"
              : "Collapse Sidebar"
            : null
        }
        position={collapseTooltipPosition}
      />
    </>
  );
};

export default Sidebar;

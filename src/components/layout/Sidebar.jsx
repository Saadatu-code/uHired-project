// src/components/layout/Sidebar.jsx
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

// Tooltip component that uses a Portal
const TooltipWithPortal = ({ content, position }) => {
  if (!position || !content) return null;

  const tooltipStyle = {
    position: "fixed",
    top: `${position.top}px`,
    left: `${position.left}px`,
    transform: "translateY(-50%)" + " translateX(-15%)", // Adjust for arrow and spacing
    zIndex: 1050,
    pointerEvents: "none",
  };

  // Using theme variables for tooltip colors
  // Background: --color-secondary-light-purple (#e7d1ff)
  // Text: --color-primary-action-hover (#437dff)
  return ReactDOM.createPortal(
    <div style={tooltipStyle}>
      <span className="relative inline-block px-1 py-0.75 text-[0.65rem] bg-tooltip-bg text-tooltip-text rounded-md shadow-xl whitespace-nowrap tooltip-bubble-purple-left">
        {content}
      </span>
    </div>,
    document.body
  );
};

const Sidebar = ({
  navItems,
  collapseButtonIcons,
  isSidebarCollapsed,
  toggleSidebarCollapse,
  activeSectionId,
  onNavItemClick,
}) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);

  const handleNav = (e, item) => {
    e.preventDefault();
    onNavItemClick(item.sectionId);
  };

  const activeBgClass = "bg-[#4F46E5]";
  const logoColorClass = "text-indigo-700";
  const collapsedLogoBgClass = "bg-indigo-700";
  const inactiveTextClass = "text-text-body";
  const inactiveIconClass = "text-text-body-light";
  // Icon hover state from your theme: hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue
  // --color-primary-lighter-blue is not in index.css, assuming --color-primary-lighter (#dde7ff)
  // --color-primary-blue (for text) is not in index.css, assuming --color-primary-action (#5c8dff)
  const iconHoverBgClass = "hover:bg-secondary-light-purple"; // Lighter shade of purple for bg
  const iconHoverTextClass = "hover:text-secondary-purple"; // Purple for text/icon

  const handleMouseEnter = (item, event) => {
    if (isSidebarCollapsed) {
      const targetElement = event.currentTarget;
      const rect = targetElement.getBoundingClientRect();
      setHoveredItemId(item.id);
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12, // Gap for the callout arrow and spacing
      });
    }
  };

  const handleMouseLeave = () => {
    if (isSidebarCollapsed) {
      setHoveredItemId(null);
      setTooltipPosition(null);
    }
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`bg-component-background text-text-body flex flex-col shrink-0 fixed top-0 left-0 h-full z-40 border-r border-border-light transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "w-14" : "w-48"
        }`}
      >
        {/* Logo Area */}
        <div
          className={`h-10 flex items-center shadow-sm shrink-0 border-b border-border-light ${
            isSidebarCollapsed ? "px-0 justify-center" : "px-4 justify-start"
          }`}
        >
          {isSidebarCollapsed ? (
            <div
              className={`w-8 h-8 text-black flex items-center justify-center rounded-md text-lg font-bold`}
            >
              U
            </div>
          ) : (
            <h1 className="text-2xl font-extrabold tracking-tight">
              <span className="text-text-heading-primary">u</span>
              <span className="text-indigo-700">Hired</span>
            </h1>
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex-grow overflow-y-auto overflow-x-hidden ${
            isSidebarCollapsed ? "p-2 space-y-1.5" : "p-3 space-y-1"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleNav(e, item)}
              className={`flex items-center space-x-2 rounded-lg transition-colors duration-150 group no-underline hover:no-underline relative ${
                isSidebarCollapsed ? "p-2.5 justify-center" : "px-3 py-2"
              } ${
                activeSectionId === item.sectionId
                  ? `${activeBgClass} text-white`
                  : `${inactiveTextClass} ${iconHoverBgClass} ${iconHoverTextClass}` // Using defined hover classes
              }`}
            >
              {React.cloneElement(item.icon, {
                className: `w-4 h-4 shrink-0 ${
                  activeSectionId === item.sectionId
                    ? "text-white"
                    : `${inactiveIconClass} group-hover:text-secondary-purple` // Ensure icon also uses hover color
                }`,
              })}
              {!isSidebarCollapsed && (
                <span className="font-medium text-xs">{item.name}</span>
              )}
            </a>
          ))}
        </nav>

        {/* Collapse Button */}
        <div
          className={`p-1 border-t border-border-light shrink-0 mt-auto ${
            isSidebarCollapsed ? "flex justify-center" : ""
          }`}
        >
          <button
            id="collapseSidebarBtn"
            title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            onClick={toggleSidebarCollapse}
            className={`w-full flex items-center rounded-lg transition-colors duration-150 group ${
              isSidebarCollapsed ? "p-2 justify-center" : "px-3 py-2 space-x-2"
            } ${inactiveTextClass} ${iconHoverBgClass} ${iconHoverTextClass}`}
          >
            {isSidebarCollapsed
              ? React.cloneElement(collapseButtonIcons.expand, {
                  className: `w-4 h-4 ${inactiveIconClass} group-hover:text-primary-action`,
                })
              : React.cloneElement(collapseButtonIcons.collapse, {
                  className: `w-4 h-4 ${inactiveIconClass} group-hover:text-primary-action`,
                })}
            {!isSidebarCollapsed && (
              <span className="font-medium text-xs">
                {isSidebarCollapsed ? "Expand" : "Collapse"}
              </span>
            )}
          </button>
        </div>
      </aside>

      <TooltipWithPortal
        content={
          hoveredItemId
            ? navItems.find((item) => item.id === hoveredItemId)?.name
            : null
        }
        position={tooltipPosition}
      />
    </>
  );
};

export default Sidebar;

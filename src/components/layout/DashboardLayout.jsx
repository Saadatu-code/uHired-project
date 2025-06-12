// src/components/layout/DashboardLayout.jsx
import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardShell from "./DashboardShell";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSectionId, setActiveSectionId] = useState("dashboard"); // Default active section

  // This effect will run when the route changes
  useEffect(() => {
    // Extract the section ID from the pathname
    // Example: if pathname is '/dashboard/job-finder', sectionId becomes 'job-finder'
    // If pathname is just '/dashboard', sectionId becomes 'dashboard'
    const pathSegments = location.pathname.split("/").filter(Boolean); // filter(Boolean) removes empty strings from split
    const currentSection =
      pathSegments.length > 1 ? pathSegments[1] : "dashboard";
    setActiveSectionId(currentSection);
  }, [location.pathname]);

  const handleNavItemClick = (sectionId) => {
    setActiveSectionId(sectionId);
    // Navigate to the corresponding route.
    // Assuming your routes are set up like '/dashboard/:sectionId' or '/dashboard' for the main dashboard.
    if (sectionId === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate(`/dashboard/${sectionId}`);
    }
  };

  // Dummy user data - replace with actual auth context or props
  const userName = "Saadatu";
  const userEmail = "saadatu@example.com";
  const userAvatarUrl = ""; // Replace with actual avatar URL or leave empty for placeholder

  const handleNavigate = (path) => {
    // This function can be used by TopNavbar for navigation actions
    // For example, navigating to login, settings, profile etc.
    // This is a simplified example; you might have more complex routing.
    if (path === "login") {
      navigate("/login"); // Assuming you have a /login route
    } else if (path === "profile") {
      navigate("/dashboard/profile"); // Example route
    } else if (path === "settings") {
      navigate("/dashboard/settings"); // Example route
    } else if (path === "notifications") {
      // Potentially open a notifications panel or navigate to a notifications page
      console.log("Navigate to notifications");
    } else {
      navigate(path);
    }
  };

  return (
    <DashboardShell
      activeSectionId={activeSectionId}
      onNavItemClick={handleNavItemClick}
      userName={userName}
      // userEmail={userEmail} // Pass if needed by TopNavbar's profile dropdown directly
      // userAvatarUrl={userAvatarUrl} // Pass if needed by TopNavbar directly
      navigateTo={handleNavigate} // Pass navigation handler to DashboardShell, which can pass to TopNavbar
    >
      <Outlet />
      {/* This is where the content for the current dashboard route will be rendered */}
    </DashboardShell>
  );
};

export default DashboardLayout;

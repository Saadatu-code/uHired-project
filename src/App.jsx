// src/App.jsx
import React, { useState, useEffect } from "react";

// Layout
import DashboardShell from "./components/layout/DashboardShell";

// Page Components
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RequestPasswordResetPage from "./pages/RequestPasswordResetPage";
import SetNewPasswordPage from "./pages/SetNewPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import JobFinderPage from "./pages/JobFinderPage"; // Import the new page
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import LegalDocumentsPage from "./pages/LegalDocumentsPage";
import AccessibilityStatementPage from "./pages/AccessibilityStatementPage";
import HelpPage from "./pages/HelpPage";

// Placeholder components for other dashboard sections
const ResumeBuilderContent = () => (
  <div className="p-4 bg-[var(--color-component-background)] text-[var(--color-text-body)] rounded-lg shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
    <h1 className="text-xl font-semibold text-[var(--color-text-heading-primary)]">
      Resume Builder
    </h1>
    <p>AI resume building tools will appear here.</p>
  </div>
);
const CoverLetterPageContent = () => (
  <div className="p-4 bg-[var(--color-component-background)] text-[var(--color-text-body)] rounded-lg shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
    <h1 className="text-xl font-semibold text-[var(--color-text-heading-primary)]">
      Cover Letter Generator
    </h1>
    <p>AI cover letter generation tools will appear here.</p>
  </div>
);
const CareerGuidePageContent = () => (
  <div className="p-4 bg-[var(--color-component-background)] text-[var(--color-text-body)] rounded-lg shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
    <h1 className="text-xl font-semibold text-[var(--color-text-heading-primary)]">
      Career Guide
    </h1>
    <p>Career advice and resources will appear here.</p>
  </div>
);
const InterviewCoachPageContent = () => (
  <div className="p-4 bg-[var(--color-component-background)] text-[var(--color-text-body)] rounded-lg shadow-lg ring-1 ring-inset ring-[var(--color-border-light)]">
    <h1 className="text-xl font-semibold text-[var(--color-text-heading-primary)]">
      Interview Coach
    </h1>
    <p>AI interview practice tools will appear here.</p>
  </div>
);

import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [activeDashboardSection, setActiveDashboardSection] =
    useState("dashboard");
  const [initialSettingsTab, setInitialSettingsTab] = useState(null);

  const [userData, setUserData] = useState({
    userName: "Saadatu Yakubu",
    userEmail: "saadatu@example.com",
    userAvatarUrl: "",
    isLoggedIn: true,
  });

  // --- Theme and Accessibility State Lifted to App Level ---
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("uHiredTheme") || "light";
    }
    return "light";
  });
  const [fontSize, setFontSize] = useState("100");
  const [contrast, setContrast] = useState("standard");
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [enhancedFocus, setEnhancedFocus] = useState(false);

  // --- Global Effect for Theming and Accessibility ---
  useEffect(() => {
    const root = document.documentElement;
    // Apply light/dark theme
    if (currentTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("uHiredTheme", currentTheme);

    const unThemedPages = [
      "login",
      "signup",
      "request-password-reset",
      "set-new-password",
    ];

    const shouldApplyTheme = !unThemedPages.includes(currentPage);

    if (shouldApplyTheme) {
      root.style.setProperty(
        "--font-size-multiplier",
        `${parseInt(fontSize, 10) / 100}`
      );
      root.classList.toggle("high-contrast", contrast === "high");
      root.classList.toggle("dyslexia-friendly-font", dyslexicFont);
      root.classList.toggle("reduced-motion", reducedMotion);
      root.classList.toggle("enhanced-focus", enhancedFocus);
    } else {
      root.style.removeProperty("--font-size-multiplier");
      root.classList.remove(
        "high-contrast",
        "dyslexia-friendly-font",
        "reduced-motion",
        "enhanced-focus"
      );
    }
  }, [
    currentPage,
    currentTheme,
    fontSize,
    contrast,
    dyslexicFont,
    reducedMotion,
    enhancedFocus,
  ]);

  const handleUserDataUpdate = (newUserData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newUserData,
    }));
  };

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const navigateTo = (pageOrSection) => {
    window.location.hash = pageOrSection;
  };

  const handleDashboardNav = (sectionId) => {
    setActiveDashboardSection(sectionId);
    window.location.hash = sectionId;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const initialPage = userData.isLoggedIn ? "dashboard" : "login";

      const hashParts = hash.split("?");
      const targetPageOrSection = hashParts[0] || initialPage;
      const queryParams = new URLSearchParams(hashParts[1] || "");
      const tab = queryParams.get("tab");

      const authPages = [
        "login",
        "signup",
        "request-password-reset",
        "set-new-password",
      ];
      const dashboardSections = [
        "dashboard",
        "job-finder",
        "resume-builder",
        "cover-letter",
        "career-guide",
        "interview-coach",
        "settings",
        "profile",
        "notifications",
      ];
      const standalonePages = [
        "legal-documents",
        "accessibility-statement",
        "help",
      ];

      if (authPages.includes(targetPageOrSection)) {
        setCurrentPage(targetPageOrSection);
      } else if (standalonePages.includes(targetPageOrSection)) {
        setCurrentPage(targetPageOrSection);
      } else if (dashboardSections.includes(targetPageOrSection)) {
        if (userData.isLoggedIn) {
          setCurrentPage("dashboard");
          if (targetPageOrSection === "profile") {
            setActiveDashboardSection("settings");
            setInitialSettingsTab("view-profile");
          } else {
            setActiveDashboardSection(targetPageOrSection);
            if (targetPageOrSection === "settings" && tab) {
              setInitialSettingsTab(tab);
            } else {
              setInitialSettingsTab(null);
            }
          }
        } else {
          navigateTo("login");
        }
      } else {
        const fallbackPage = userData.isLoggedIn ? "dashboard" : "login";
        navigateTo(fallbackPage);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [userData.isLoggedIn]);

  const mockLogin = (name, email, avatar) => {
    setUserData({
      userName: name || "Saadatu Yakubu",
      userEmail: email || "saadatu@example.com",
      userAvatarUrl: avatar || "",
      isLoggedIn: true,
    });
    navigateTo("dashboard");
  };

  const mockLogout = () => {
    setUserData({
      userName: "Guest",
      userEmail: "",
      userAvatarUrl: "",
      isLoggedIn: false,
    });
    navigateTo("login");
  };

  let pageContentToRender;

  const accessibilityProps = {
    settings: {
      fontSize,
      contrast,
      dyslexicFont,
      reducedMotion,
      enhancedFocus,
    },
    setters: {
      setFontSize,
      setContrast,
      setDyslexicFont,
      setReducedMotion,
      setEnhancedFocus,
    },
  };

  if (currentPage === "dashboard" && userData.isLoggedIn) {
    switch (activeDashboardSection) {
      case "dashboard":
        pageContentToRender = (
          <DashboardPage
            userName={userData.userName}
            onNavItemClick={handleDashboardNav}
          />
        );
        break;
      case "job-finder":
        pageContentToRender = <JobFinderPage />; // Add the new page component here
        break;
      case "resume-builder":
        pageContentToRender = <ResumeBuilderContent />;
        break;
      case "cover-letter":
        pageContentToRender = <CoverLetterPageContent />;
        break;
      case "career-guide":
        pageContentToRender = <CareerGuidePageContent />;
        break;
      case "interview-coach":
        pageContentToRender = <InterviewCoachPageContent />;
        break;
      case "settings":
        pageContentToRender = (
          <SettingsPage
            navigateTo={navigateTo}
            userEmail={userData.userEmail}
            userName={userData.userName}
            userAvatarUrl={userData.userAvatarUrl}
            onUserDataUpdate={handleUserDataUpdate}
            initialTab={initialSettingsTab}
            accessibilityProps={accessibilityProps}
          />
        );
        break;
      case "notifications":
        pageContentToRender = <NotificationsPage />;
        break;
      default:
        pageContentToRender = (
          <DashboardPage
            userName={userData.userName}
            onNavItemClick={handleDashboardNav}
          />
        );
        setActiveDashboardSection("dashboard");
        window.location.hash = "dashboard";
    }
    return (
      <DashboardShell
        navigateTo={navigateTo}
        activeSectionId={activeDashboardSection}
        userName={userData.userName}
        userEmail={userData.userEmail}
        userAvatarUrl={userData.userAvatarUrl}
        onNavItemClick={handleDashboardNav}
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
      >
        {pageContentToRender}
      </DashboardShell>
    );
  } else {
    // Render auth pages and standalone pages without the shell
    switch (currentPage) {
      case "signup":
        pageContentToRender = <SignUpPage navigateTo={navigateTo} />;
        break;
      case "login":
        pageContentToRender = (
          <LoginPage navigateTo={navigateTo} onLoginSuccess={mockLogin} />
        );
        break;
      case "request-password-reset":
        pageContentToRender = (
          <RequestPasswordResetPage navigateTo={navigateTo} />
        );
        break;
      case "set-new-password":
        pageContentToRender = <SetNewPasswordPage navigateTo={navigateTo} />;
        break;
      case "legal-documents":
        pageContentToRender = <LegalDocumentsPage navigateTo={navigateTo} />;
        break;
      case "accessibility-statement":
        pageContentToRender = (
          <AccessibilityStatementPage navigateTo={navigateTo} />
        );
        break;
      case "help":
        pageContentToRender = <HelpPage navigateTo={navigateTo} />;
        break;
      default:
        pageContentToRender = (
          <LoginPage navigateTo={navigateTo} onLoginSuccess={mockLogin} />
        );
        if (window.location.hash !== "#login") {
          window.location.hash = "login";
        }
    }

    // This wrapper is now removed to allow page-level backgrounds to take precedence
    return pageContentToRender;
  }
}

export default App;

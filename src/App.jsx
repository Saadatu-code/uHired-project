// src/App.jsx
import React, { useState, useEffect } from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import RequestPasswordResetPage from "./pages/RequestPasswordResetPage";
import SetNewPasswordPage from "./pages/SetNewPasswordPage";
import DashboardShell from "./components/layout/DashboardShell";

import "./index.css"; // Your Tailwind CSS and custom styles

// Updated Placeholder content components for different sections
const DashboardContent = () => (
  <div className="space-y-8">
    <header className="mb-6">
      <h2 className="text-3xl font-bold text-text-heading-primary tracking-tight">
        Welcome back, Saadatu!
      </h2>
      <p className="text-text-body-light mt-1 text-base">
        Let uHired's AI guide your next step.
      </p>
    </header>

    {/* AI Co-Pilot Suggestions */}
    <section>
      <h3 className="text-xl font-semibold text-text-heading-secondary mb-4">
        Your AI Co-Pilot Suggests:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: New Job Matches */}
        <div className="bg-component-background p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2 bg-primary-lighter rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary-action)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4 className="font-semibold text-base text-text-heading-secondary mt-1">
                New Job Matches
              </h4>
            </div>
            <p className="text-text-body text-sm mb-4">
              We've found 12 new roles matching your 'Data Scientist' profile.
              Review them now!
            </p>
          </div>
          <button className="mt-auto w-full px-4 py-2 bg-primary-action text-white font-medium rounded-lg hover:bg-primary-action-hover transition-colors duration-150 text-sm">
            Open Job Finder
          </button>
        </div>
        {/* Card 2: Refine Your Resume */}
        <div className="bg-component-background p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2 bg-primary-lighter rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary-action)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h4 className="font-semibold text-base text-text-heading-secondary mt-1">
                Refine Your Resume
              </h4>
            </div>
            <p className="text-text-body text-sm mb-4">
              Strengthen your 'Senior Analyst' resume for roles requiring
              'Python'. Let's tailor it.
            </p>
          </div>
          <button className="mt-auto w-full px-4 py-2 bg-primary-action text-white font-medium rounded-lg hover:bg-primary-action-hover transition-colors duration-150 text-sm">
            Go to Resume Builder
          </button>
        </div>
        {/* Card 3: Interview Prep */}
        <div className="bg-component-background p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-start space-x-3 mb-3">
              <div className="p-2 bg-primary-lighter rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary-action)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <circle cx="12" cy="10" r="2"></circle>
                </svg>
              </div>
              <h4 className="font-semibold text-base text-text-heading-secondary mt-1">
                Interview Prep
              </h4>
            </div>
            <p className="text-text-body text-sm mb-4">
              Interview for 'Product Manager' at TechCorp soon? Sharpen
              responses with the Coach.
            </p>
          </div>
          <button className="mt-auto w-full px-4 py-2 bg-primary-action text-white font-medium rounded-lg hover:bg-primary-action-hover transition-colors duration-150 text-sm">
            Start Interview Practice
          </button>
        </div>
      </div>
    </section>

    {/* Quick Access */}
    <section>
      <h3 className="text-xl font-semibold text-text-heading-secondary mb-4">
        Quick Access
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-component-background p-4 rounded-lg shadow-md text-center">
          <h4 className="font-semibold text-base text-text-heading-secondary mb-1">
            Job Finder
          </h4>
          <p className="text-primary-action font-bold text-xl mb-1">12 New</p>
          <p className="text-text-subtle text-xs">Recommended Jobs</p>
          <button className="mt-3 w-full px-3 py-1.5 bg-primary-lighter text-primary-action font-medium rounded-md hover:bg-d3e1ff transition-colors duration-150 text-sm">
            View Matches
          </button>
        </div>
        <div className="bg-component-background p-4 rounded-lg shadow-md text-center">
          <h4 className="font-semibold text-base text-text-heading-secondary mb-1">
            Resume Hub
          </h4>
          <p className="text-primary-action font-bold text-xl mb-1">3 Active</p>
          <p className="text-text-subtle text-xs">Resumes</p>
          <button className="mt-3 w-full px-3 py-1.5 bg-primary-lighter text-primary-action font-medium rounded-md hover:bg-d3e1ff transition-colors duration-150 text-sm">
            Manage Resumes
          </button>
        </div>
        <div className="bg-component-background p-4 rounded-lg shadow-md text-center">
          <h4 className="font-semibold text-base text-text-heading-secondary mb-1">
            Cover Letters
          </h4>
          <p className="text-primary-action font-bold text-xl mb-1">
            5 Drafted
          </p>
          <p className="text-text-subtle text-xs">Letters</p>
          <button className="mt-3 w-full px-3 py-1.5 bg-primary-lighter text-primary-action font-medium rounded-md hover:bg-d3e1ff transition-colors duration-150 text-sm">
            Manage Letters
          </button>
        </div>
        <div className="bg-component-background p-4 rounded-lg shadow-md text-center">
          <h4 className="font-semibold text-base text-text-heading-secondary mb-1">
            Career Guide
          </h4>
          <p className="text-primary-action font-bold text-xl mb-1">New!</p>
          <p className="text-text-subtle text-xs">'Navigating Transitions'</p>
          <button className="mt-3 w-full px-3 py-1.5 bg-primary-lighter text-primary-action font-medium rounded-md hover:bg-d3e1ff transition-colors duration-150 text-sm">
            Read Now
          </button>
        </div>
      </div>
    </section>

    {/* Application Tracker */}
    <section className="bg-component-background p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-text-heading-secondary">
          Application Tracker
        </h3>
        <span className="text-sm font-medium text-primary-action bg-primary-lighter px-3 py-1 rounded-full">
          5 Active Applications
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-text-body">
          <thead className="text-xs text-text-heading-secondary uppercase bg-slate-50">
            <tr>
              <th scope="col" className="px-4 py-3">
                Company
              </th>
              <th scope="col" className="px-4 py-3">
                Role
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3">
                Next Action Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-light hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-text-heading-primary">
                TechCorp Inc.
              </td>
              <td className="px-4 py-3">Product Manager</td>
              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  Interview Scheduled
                </span>
              </td>
              <td className="px-4 py-3">2025-06-01</td>
            </tr>
            <tr className="border-b border-border-light hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-text-heading-primary">
                Innovate Solutions
              </td>
              <td className="px-4 py-3">Data Scientist</td>
              <td className="px-4 py-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  Applied
                </span>
              </td>
              <td className="px-4 py-3">2025-05-30 (Follow-up)</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-text-heading-primary">
                Future Systems
              </td>
              <td className="px-4 py-3">Frontend Developer</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  Offer Extended
                </span>
              </td>
              <td className="px-4 py-3">2025-05-28 (Decision)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="mt-4 w-full sm:w-auto px-5 py-2.5 bg-primary-action text-white font-semibold rounded-lg hover:bg-primary-action-hover transition-colors duration-150 text-sm">
        View Full Application Log
      </button>
    </section>

    {/* AI-Powered Insights */}
    <section className="bg-primary-lighter p-6 rounded-lg shadow-md border border-primary-light">
      <h3 className="text-xl font-semibold text-indigo-800 mb-3">
        Strategic Insights
      </h3>
      <p className="text-indigo-700 text-sm mb-2">
        {" "}
        <span className="font-semibold">Market Trend:</span> Companies in the
        'Tech' sector are increasingly seeking 'AI Ethics' skills. Our Career
        Guide can help you explore this.
      </p>
      <p className="text-indigo-700 text-sm">
        {" "}
        <span className="font-semibold">Strategic Tip:</span> Based on your
        activity, explore roles titled 'Machine Learning Engineer'. Try this in
        Job Finder!
      </p>
    </section>
  </div>
);

const JobFinderPageContent = () => (
  <div className="bg-component-background p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
      Job Finder
    </h3>
    <p className="text-text-body">
      Advanced job searching and filtering tools will appear here...
    </p>
  </div>
);
const ResumeBuilderPageContent = () => (
  <div className="bg-component-background p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
      Resume Builder
    </h3>
    <p className="text-text-body">
      AI-powered resume creation and tailoring tools...
    </p>
  </div>
);
const CoverLetterPageContent = () => (
  <div className="bg-component-background p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
      Cover Letter Builder
    </h3>
    <p className="text-text-body">
      Generate personalized cover letters that stand out.
    </p>
  </div>
);
const CareerGuidePageContent = () => (
  <div className="bg-component-background p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
      Career Guide
    </h3>
    <p className="text-text-body">
      Personalized advice for your professional growth.
    </p>
  </div>
);
const InterviewCoachPageContent = () => (
  <div className="bg-component-background p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
      Interview Coach
    </h3>
    <p className="text-text-body">
      Build confidence with AI-powered interview practice.
    </p>
  </div>
);
const SettingsPageContent = () => (
  <div className="bg-component-background p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
      Settings
    </h3>
    <p className="text-text-body">Manage your uHired preferences.</p>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [activeDashboardSection, setActiveDashboardSection] =
    useState("dashboard");
  const [userName, setUserName] = useState("Saadatu");

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleDashboardNav = (sectionId) => {
    setActiveDashboardSection(sectionId);
    window.location.hash = sectionId;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const pageName = hash.split("?")[0] || "login";

      const authPages = [
        "login",
        "signup",
        "request-password-reset",
        "set-new-password",
      ];
      const dashboardNavItems = [
        "dashboard",
        "job-finder",
        "resume-builder",
        "cover-letter",
        "career-guide",
        "interview-coach",
        "settings",
        "profile", // Added profile as a potential dashboard section
      ];

      if (authPages.includes(pageName)) {
        setCurrentPage(pageName);
      } else if (dashboardNavItems.includes(pageName)) {
        setCurrentPage("dashboard");
        setActiveDashboardSection(pageName);
      } else {
        setCurrentPage("login");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  let pageContentToRender;
  if (currentPage === "dashboard") {
    switch (activeDashboardSection) {
      case "dashboard":
        pageContentToRender = <DashboardContent />;
        break;
      case "job-finder":
        pageContentToRender = <JobFinderPageContent />;
        break;
      case "resume-builder":
        pageContentToRender = <ResumeBuilderPageContent />;
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
        pageContentToRender = <SettingsPageContent />;
        break;
      case "profile": // Added for My Profile navigation
        pageContentToRender = (
          <div className="bg-component-background p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-text-heading-secondary mb-4">
              My Profile
            </h3>
            <p className="text-text-body">
              User profile details and edit options will appear here.
            </p>
          </div>
        );
        break;
      default:
        pageContentToRender = <DashboardContent />;
    }
  } else {
    switch (currentPage) {
      case "signup":
        pageContentToRender = <SignUpPage navigateTo={navigateTo} />;
        break;
      case "login":
        pageContentToRender = <LoginPage navigateTo={navigateTo} />;
        break;
      case "request-password-reset":
        pageContentToRender = (
          <RequestPasswordResetPage navigateTo={navigateTo} />
        );
        break;
      case "set-new-password":
        pageContentToRender = <SetNewPasswordPage navigateTo={navigateTo} />;
        break;
      default:
        pageContentToRender = <LoginPage navigateTo={navigateTo} />;
    }
  }

  const authPages = [
    "login",
    "signup",
    "request-password-reset",
    "set-new-password",
  ];

  if (authPages.includes(currentPage)) {
    return (
      <div className="font-sans bg-page-background min-h-screen">
        {pageContentToRender}
      </div>
    );
  } else {
    return (
      <DashboardShell
        navigateTo={navigateTo}
        activeSectionId={activeDashboardSection}
        userName={userName}
        onNavItemClick={handleDashboardNav}
      >
        {pageContentToRender}
      </DashboardShell>
    );
  }
}

export default App;

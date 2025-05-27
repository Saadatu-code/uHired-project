// src/pages/NewDashboardPage.jsx
import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons (as defined in the HTML example) ---
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const FileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.25 14.155V7.845a2.25 2.25 0 00-2.25-2.25h-12A2.25 2.25 0 003.75 7.845v6.31M21 14.155V19.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-5.345M15.75 8.25h-7.5" /></svg>;
const MessageCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 8.25h9m-9 3H12m-6.75 3h9m-9 3h9M3.75 6.75h16.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const IconCollapse = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 7 6 12 11 17"></polyline><polyline points="18 7 13 12 18 17"></polyline></svg>;
const IconExpand = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>;
const ThemeToggleSunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const ThemeToggleMoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;
const NotificationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
// --- End Icons ---


function DashboardPage({ navigateTo, userName = "Saadatu" }) { // navigateTo prop for App.jsx router
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
  const [activeSection, setActiveSection] = useState(localStorage.getItem('activeDashboardSection') || 'dashboard-content');
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');
  
  // Refs for modal elements (if needed for direct manipulation, otherwise manage with state)
  const messageModalRef = useRef(null);
  const modalTitleElRef = useRef(null);
  const modalMessageElRef = useRef(null);

  const GEMINI_API_KEY = ""; // User needs to add their API key here for AI features

  useEffect(() => {
    document.body.classList.toggle('sidebar-is-collapsed', isSidebarCollapsed);
    localStorage.setItem('sidebarCollapsed', isSidebarCollapsed.toString());
  }, [isSidebarCollapsed]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    // Handle initial section display based on hash or default
    const hash = window.location.hash.substring(1);
    const targetSection = document.querySelector(`.sidebar-item[id='${hash}']`)?.dataset.section || 'dashboard-content';
    setActiveSectionAndItem(targetSection);

    // Update current year in footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  const setActiveSectionAndItem = (sectionId) => {
    setActiveSection(sectionId);
    localStorage.setItem('activeDashboardSection', sectionId);

    // Update active class on sidebar items
    document.querySelectorAll('.sidebar-item, .settings-item').forEach(item => {
      item.classList.remove('bg-uhired-primary-blue', 'text-white', 'active-item');
      item.classList.add('text-uhired-gray-600', 'hover:bg-uhired-primary-lighter-blue', 'hover:text-uhired-primary-blue');
      const icon = item.querySelector('svg');
      if (icon) {
        icon.style.stroke = "currentColor"; // Reset stroke
        icon.style.color = "var(--uhired-gray-600)"; // Reset color
      }
    });
    const activeItem = document.querySelector(`[data-section='${sectionId}']`);
    if (activeItem) {
      activeItem.classList.add('bg-uhired-primary-blue', 'text-white', 'active-item');
      activeItem.classList.remove('text-uhired-gray-600', 'hover:bg-uhired-primary-lighter-blue', 'hover:text-uhired-primary-blue');
      const icon = activeItem.querySelector('svg');
      if (icon) {
        icon.style.stroke = "white";
        icon.style.color = "white";
      }
    }
  };

  const showModal = (title, message) => {
    if (modalTitleElRef.current) modalTitleElRef.current.textContent = title;
    if (modalMessageElRef.current) modalMessageElRef.current.textContent = message;
    if (messageModalRef.current) messageModalRef.current.classList.add('active');
  };

  const hideModal = () => {
    if (messageModalRef.current) messageModalRef.current.classList.remove('active');
  };

  const handleThemeToggle = () => {
    setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    showModal("Logged Out", "You have been successfully logged out.");
    setTimeout(() => {
        navigateTo('login'); // Use navigateTo prop for routing
    }, 2000);
  };
  
  // uHired navigation items
  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: <HomeIcon />, section: "dashboard-content" },
    { id: "job-finder", name: "Job Finder", icon: <SearchIcon />, section: "job-finder-content" },
    { id: "resume-builder", name: "Resume Builder", icon: <FileIcon />, section: "resume-builder-content" },
    { id: "cover-letter", name: "Cover Letter", icon: <MailIcon />, section: "cover-letter-content" },
    { id: "career-guide", name: "Career Guide", icon: <BriefcaseIcon />, section: "career-guide-content" }, // Changed icon
    { id: "interview-coach", name: "Interview Coach", icon: <MessageCircleIcon />, section: "interview-coach-content" },
  ];

  // Placeholder for API call function (would be more complex in React)
  const callGeminiAPI = async (prompt, loadingSpinnerId, outputElementId, buttonId) => {
    const loadingSpinnerElement = document.getElementById(loadingSpinnerId);
    const outputElement = document.getElementById(outputElementId);
    const buttonElement = document.getElementById(buttonId);

    if (!GEMINI_API_KEY) {
        showModal("API Key Missing", "Please add your Gemini API key in the script to use AI features.");
        if(outputElement) outputElement.textContent = "API Key is missing.";
        return;
    }
    if (!prompt.trim()) { showModal("Input Error", "Please provide the required input."); return; }
    
    if(loadingSpinnerElement) loadingSpinnerElement.classList.remove('hidden');
    if(outputElement) outputElement.textContent = 'Generating... please wait a moment.';
    
    let originalButtonText = "";
    let buttonTextSpan;

    if (buttonElement) {
         buttonTextSpan = buttonElement.querySelector('span:not(.loading-spinner)');
         if(buttonTextSpan) originalButtonText = buttonTextSpan.textContent;
         if(buttonTextSpan) buttonTextSpan.textContent = 'Generating...';
         buttonElement.disabled = true;
    }
    // Actual API call logic would go here
    console.log("Calling Gemini API with prompt:", prompt);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    if(outputElement) outputElement.textContent = "AI response would appear here.";

    if(loadingSpinnerElement) loadingSpinnerElement.classList.add('hidden'); 
    if (buttonElement) {
        if(buttonTextSpan) buttonTextSpan.textContent = originalButtonText;
        buttonElement.disabled = false;
    }
  };


  return (
    <div className={`flex h-screen ${isSidebarCollapsed ? 'sidebar-is-collapsed' : ''}`}>
      <aside 
        id="sidebar" 
        className="sidebar-dynamic bg-white text-uhired-gray-700 shadow-xl flex flex-col shrink-0 fixed top-0 left-0 h-full z-30 border-r border-uhired-gray-200"
      >
        <div className="h-20 flex items-center px-6 shrink-0 sidebar-logo-container">
          <h1 className="text-3xl font-extrabold text-uhired-primary-blue tracking-tight sidebar-logo-full">uHired</h1>
          <div className="sidebar-logo-collapsed items-center justify-center w-full" title="uHired">
            <div className="w-8 h-8 bg-uhired-primary-blue text-white flex items-center justify-center rounded-md text-xl font-bold">U</div>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-1.5 overflow-y-auto">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              id={item.id}
              data-section={item.section}
              title={item.name}
              onClick={(e) => { e.preventDefault(); setActiveSectionAndItem(item.section); window.location.hash = item.id; }}
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-150 group sidebar-item ${
                activeSection === item.section ? 'bg-uhired-primary-blue text-white active-item' : 'text-uhired-gray-600 hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue'
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm sidebar-item-text">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="px-4 pb-2 mt-auto">
          <a href="#settings" id="settings" data-section="settings-content" title="Settings" 
             onClick={(e) => { e.preventDefault(); setActiveSectionAndItem("settings-content"); window.location.hash = "settings";}}
             className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors duration-150 group settings-item ${
                activeSection === "settings-content" ? 'bg-uhired-primary-blue text-white active-item' : 'text-uhired-gray-600 hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue'
             }`}>
            <SettingsIcon />
            <span className="font-medium text-sm sidebar-item-text">Settings</span>
          </a>
          <button title="Log Out" id="logoutButton" onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-2.5 mt-1 text-sm text-uhired-gray-600 rounded-lg hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue transition-colors duration-150 logout-item group">
            <LogoutIcon />
            <span className="font-medium text-sm sidebar-item-text">Log Out</span>
          </button>
        </div>
        
        <div className="p-4 border-t border-uhired-gray-200 shrink-0 collapse-button-container">
          <button id="collapseSidebarBtn" onClick={toggleSidebar} className="w-full flex items-center space-x-3 px-4 py-2 text-uhired-gray-600 rounded-lg hover:bg-uhired-primary-lighter-blue hover:text-uhired-primary-blue transition-colors duration-150 group">
            {isSidebarCollapsed ? <IconExpand /> : <IconCollapse />}
            <span className="font-medium text-sm sidebar-item-text">{isSidebarCollapsed ? 'Expand' : 'Collapse'}</span>
          </button>
        </div>
      </aside>

      <main id="mainContent" className={`main-content-area flex-1 overflow-y-auto bg-uhired-gray-50 ${isSidebarCollapsed ? 'main-content-area-collapsed' : 'main-content-area-expanded'}`}>
        <header className="h-20 bg-white shadow-sm flex items-center justify-end px-6 sticky top-0 z-10 border-b border-uhired-gray-200">
          <div className="flex items-center space-x-5">
            <button title="Toggle Dark Mode" id="themeToggleBtn" onClick={handleThemeToggle} className="main-header-icon p-2 rounded-full hover:bg-uhired-gray-100 transition-colors">
              {currentTheme === 'light' ? <ThemeToggleMoonIcon /> : <ThemeToggleSunIcon />}
            </button>
            <button title="Notifications" className="main-header-icon relative p-2 rounded-full hover:bg-uhired-gray-100 transition-colors">
              <NotificationIcon />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-uhired-error-red rounded-full ring-1 ring-white"></span>
            </button>
            <div title="User Profile" className="cursor-pointer" id="userProfileButton">
              <img src={`https://placehold.co/36x36/DDE7FF/5C8DFF?text=${userName ? userName.charAt(0).toUpperCase() : 'U'}&font=inter`} alt="User Avatar" className="w-9 h-9 rounded-full object-cover ring-2 ring-uhired-primary-blue"/>
            </div>
          </div>
        </header>
        
        <div className="p-6 sm:p-8 md:p-10">
          {/* Dashboard Content (Example) */}
          <div id="dashboard-content" className={`content-section ${activeSection === 'dashboard-content' ? 'active-content-section' : ''} space-y-8`}>
            <header className="mb-6">
                <h2 className="text-4xl font-extrabold text-uhired-gray-800 tracking-tight">Welcome back, {userName}!</h2>
                <p className="text-uhired-gray-600 mt-1 text-lg">Let uHired's AI guide your next step.</p>
            </header>
            <section>
                <h3 className="text-2xl font-semibold text-uhired-gray-700 mb-4">Your AI Co-Pilot Suggests:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Suggestion Cards - Adapt content for uHired */}
                    <div className="dashboard-card p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center space-x-3 mb-3">
                                <SearchIcon />
                                <h4 className="font-semibold text-lg text-uhired-gray-800">New Job Matches</h4>
                            </div>
                            <p className="text-uhired-gray-600 text-sm mb-4">We've found 12 new roles matching your profile. Review them now!</p>
                        </div>
                        <button data-target-section="job-finder-content" onClick={() => {setActiveSectionAndItem("job-finder-content"); window.location.hash="job-finder";}} className="navigate-btn mt-auto w-full px-4 py-2 bg-uhired-primary-blue text-white font-semibold rounded-lg hover:bg-uhired-primary-blue-hover transition-colors duration-150 text-sm">Open Job Finder</button>
                    </div>
                    <div className="dashboard-card p-6 flex flex-col justify-between">
                       <div>
                            <div className="flex items-center space-x-3 mb-3">
                               <FileIcon/>
                                <h4 className="font-semibold text-lg text-uhired-gray-800">Refine Your Resume</h4>
                            </div>
                            <p className="text-uhired-gray-600 text-sm mb-4">Strengthen your resume for roles requiring specific skills. Let's tailor it.</p>
                        </div>
                        <button data-target-section="resume-builder-content" onClick={() => {setActiveSectionAndItem("resume-builder-content"); window.location.hash="resume-builder";}} className="navigate-btn mt-auto w-full px-4 py-2 bg-uhired-primary-blue text-white font-semibold rounded-lg hover:bg-uhired-primary-blue-hover transition-colors duration-150 text-sm">Go to Resume Builder</button>
                    </div>
                     <div className="dashboard-card p-6 flex flex-col justify-between">
                       <div>
                            <div className="flex items-center space-x-3 mb-3">
                                <MessageCircleIcon/>
                                <h4 className="font-semibold text-lg text-uhired-gray-800">Interview Prep</h4>
                            </div>
                            <p className="text-uhired-gray-600 text-sm mb-4">Upcoming interview? Sharpen responses with the AI Coach.</p>
                        </div>
                        <button data-target-section="interview-coach-content" onClick={() => {setActiveSectionAndItem("interview-coach-content"); window.location.hash="interview-coach";}} className="navigate-btn mt-auto w-full px-4 py-2 bg-uhired-primary-blue text-white font-semibold rounded-lg hover:bg-uhired-primary-blue-hover transition-colors duration-150 text-sm">Start Interview Practice</button>
                    </div>
                </div>
            </section>
            {/* Add other sections like Quick Access, Application Tracker here, styled similarly */}
          </div>

          {/* Placeholder for other content sections */}
          <div id="job-finder-content" className={`content-section ${activeSection === 'job-finder-content' ? 'active-content-section' : ''} bg-white p-6 rounded-lg shadow-lg`}>
              <header className="mb-6"><h2 className="text-3xl font-bold text-uhired-gray-800">Job Finder</h2><p className="text-uhired-gray-600 mt-1">Discover your next career opportunity with AI precision.</p></header>
              <p className="text-uhired-gray-700">Advanced job searching and filtering tools will appear here...</p>
          </div>
          <div id="resume-builder-content" className={`content-section ${activeSection === 'resume-builder-content' ? 'active-content-section' : ''} bg-white p-6 rounded-lg shadow-lg`}>
               <header className="mb-6"><h2 className="text-3xl font-bold text-uhired-gray-800">Resume Builder</h2><p className="text-uhired-gray-600 mt-1">Craft compelling, ATS-friendly resumes.</p></header>
               <p className="text-uhired-gray-700">AI-powered resume creation and tailoring tools...</p>
          </div>
          <div id="cover-letter-content" className={`content-section ${activeSection === 'cover-letter-content' ? 'active-content-section' : ''} bg-white p-6 rounded-lg shadow-lg`}>
              <header className="mb-6"><h2 className="text-3xl font-bold text-uhired-gray-800">Cover Letter Builder</h2><p className="text-uhired-gray-600 mt-1">Generate personalized cover letters that stand out.</p></header>
               <h3 className="text-xl font-semibold text-uhired-gray-700 mb-4">AI Cover Letter Assistant</h3>
               <div className="space-y-4">
                   <div><label htmlFor="job-description-cl" className="block text-sm font-medium text-uhired-gray-700 mb-1">Paste Job Description:</label><textarea id="job-description-cl" rows="6" className="w-full p-3 border border-uhired-gray-300 rounded-md focus:ring-2 focus:ring-uhired-primary-blue focus:border-uhired-primary-blue transition-shadow" placeholder="Paste the full job description here..."></textarea></div>
                   <div><label htmlFor="your-details-cl" className="block text-sm font-medium text-uhired-gray-700 mb-1">Briefly describe your key skills/experience for this role:</label><textarea id="your-details-cl" rows="3" className="w-full p-3 border border-uhired-gray-300 rounded-md focus:ring-2 focus:ring-uhired-primary-blue focus:border-uhired-primary-blue transition-shadow" placeholder="E.g., 5 years experience in project management..."></textarea></div>
                   <button
                     id="generate-cover-letter-btn"
                     className="inline-flex items-center px-6 py-3 bg-uhired-primary-blue text-white font-semibold rounded-lg hover:bg-uhired-primary-blue-hover transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uhired-primary-blue"
                     onClick={() => {
                       const jobDesc = document.getElementById('job-description-cl').value;
                       const yourDetails = document.getElementById('your-details-cl').value;
                       const prompt = `Write a cover letter for this job:\n${jobDesc}\n\nMy details:\n${yourDetails}`;
                       callGeminiAPI(prompt, 'cl-loading-spinner', 'cover-letter-output', 'generate-cover-letter-btn');
                     }}
                   >
                     <span className="mr-2">✨ Draft Cover Letter with AI</span>
                     <span id="cl-loading-spinner" className="loading-spinner hidden"></span>
                   </button>
                   <div id="cover-letter-output" className="mt-4 p-4 border border-uhired-gray-200 rounded-md bg-uhired-gray-50 min-h-[200px] whitespace-pre-wrap text-sm"></div>
               </div>
          </div>
          <div id="career-guide-content" className={`content-section ${activeSection === 'career-guide-content' ? 'active-content-section' : ''} bg-white p-6 rounded-lg shadow-lg`}>
              <header className="mb-6"><h2 className="text-3xl font-bold text-uhired-gray-800">Career Guide</h2><p className="text-uhired-gray-600 mt-1">Personalized advice for your professional growth.</p></header><p className="text-uhired-gray-700">AI-driven insights, articles, and skill development resources...</p>
          </div>
          <div id="interview-coach-content" className={`content-section ${activeSection === 'interview-coach-content' ? 'active-content-section' : ''} bg-white p-6 rounded-lg shadow-lg`}>
               <header className="mb-6"><h2 className="text-3xl font-bold text-uhired-gray-800">Interview Coach</h2><p className="text-uhired-gray-600 mt-1">Build confidence with AI-powered interview practice.</p></header>
               <h3 className="text-xl font-semibold text-uhired-gray-700 mb-4">AI Interview Prep</h3>
               <div className="space-y-4">
                   <div><label htmlFor="job-title-ic" className="block text-sm font-medium text-uhired-gray-700 mb-1">Enter Job Title:</label><input type="text" id="job-title-ic" className="w-full p-3 border border-uhired-gray-300 rounded-md focus:ring-2 focus:ring-uhired-primary-blue focus:border-uhired-primary-blue transition-shadow" placeholder="E.g., Software Engineer, Marketing Manager"></div>
                   <button id="generate-interview-questions-btn" className="inline-flex items-center px-6 py-3 bg-uhired-primary-blue text-white font-semibold rounded-lg hover:bg-uhired-primary-blue-hover transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uhired-primary-blue"><span className="mr-2">✨ Generate Interview Questions</span><span id="iq-loading-spinner" className="loading-spinner hidden"></span></button>
                   <div id="interview-questions-output" className="mt-4 p-4 border border-uhired-gray-200 rounded-md bg-uhired-gray-50 min-h-[200px] whitespace-pre-wrap text-sm"></div>
               </div>
          </div>
           <div id="settings-content" className={`content-section ${activeSection === 'settings-content' ? 'active-content-section' : ''} bg-white p-6 rounded-lg shadow-lg`}>
              <header className="mb-6"><h2 className="text-3xl font-bold text-uhired-gray-800">Settings</h2><p className="text-uhired-gray-600 mt-1">Manage your uHired preferences.</p></header>
              <p className="text-uhired-gray-700">Account settings, notification preferences, and other options will appear here...</p>
          </div>
          <footer className="mt-10 pt-6 border-t border-uhired-gray-200 text-center text-sm text-uhired-gray-500">&copy; <span id="currentYear"></span> uHired. All rights reserved. Your Intelligent Career Companion.</footer>
        </div>
      </main>

      <div id="messageModal" ref={messageModalRef} className="modal-overlay">
          <div className="modal-content">
              <h3 id="modalTitle" ref={modalTitleElRef} className="text-xl font-semibold mb-3 text-uhired-gray-800">Message</h3>
              <p id="modalMessage" ref={modalMessageElRef} className="text-sm text-uhired-gray-600 mb-6">This is a modal message.</p>
              <button id="modalCloseButton" onClick={hideModal} className="w-full px-4 py-2.5 bg-uhired-primary-blue text-white font-semibold rounded-lg hover:bg-uhired-primary-blue-hover transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-uhired-primary-blue">Close</button>
          </div>
      </div>
    </div>
  );
}

export default DashboardPage;

// src/components/layout/DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const DashboardLayout = ({ children, navigateTo, currentPage, userName }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar width for margin calculation (Tailwind: w-64 is 16rem, w-20 is 5rem for collapsed)
  const sidebarFullWidthClass = "md:ml-64";
  const sidebarCollapsedWidthClass = "md:ml-20"; // Adjust if your collapsed sidebar width is different

  return (
    <div className="flex h-screen bg-uhired-gray-50 text-uhired-gray-700 overflow-hidden">
      <Sidebar
        navigateTo={navigateTo}
        currentPage={currentPage}
        userName={userName}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
          isSidebarOpen ? sidebarFullWidthClass : sidebarCollapsedWidthClass
        }`}
      >
        <TopNavbar
          navigateTo={navigateTo}
          userName={userName}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
          {" "}
          {/* Added pt-16 here if TopNavbar is fixed within this div, removed if TopNavbar is above this main */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import { useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import MobileSidebar from "../components/sidebar/mobileSidebar";
import Navbar from "../components/navbar/navbar";
import FeedbackModal from "../components/feedback/FeedbackModal";
import FeedbackHistory from "../pages/FeedbackHistory";
import LogoutModal from "../components/auth/LogoutModal";
import useDashboard from "../hooks/useDashboard";
import React from "react";

function DashboardLayout({ children }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dashboardState = useDashboard();

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLogoutOpen(false);
  };

  const handleFeedbackOpen = () => {
    setActiveTab("Feedback");
    setIsFeedbackOpen(true);
  };

  const handleHistoryOpen = () => {
    setActiveTab("Feedback History");
  };

  return (
    <div className="flex bg-white h-screen overflow-hidden">
      
      {/* Desktop Sidebar */}
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onFeedbackClick={handleFeedbackOpen} 
        onHistoryClick={handleHistoryOpen}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onFeedbackClick={handleFeedbackOpen}
        onHistoryClick={handleHistoryOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          onMenuClick={() => setIsMobileMenuOpen(true)} 
          currentUser={dashboardState.currentUser}
          setCurrentUser={dashboardState.setCurrentUser}
          onLogoutClick={() => setIsLogoutOpen(true)}
          title={activeTab}
        />
        
        <main className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto">
          {/* Switch between Dashboard and FeedbackHistory based on activeTab */}
          {activeTab === "Feedback History" ? (
            <FeedbackHistory onFeedbackClick={handleFeedbackOpen} />
          ) : (
            /* Pass dashboard state to children (Dashboard page) */
            React.cloneElement(children, { ...dashboardState })
          )}
        </main>
      </div>

      {/* Modals */}
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => {
          setIsFeedbackOpen(false);
          // Don't reset activeTab here if we want to stay on the current page
        }} 
      />

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default DashboardLayout;
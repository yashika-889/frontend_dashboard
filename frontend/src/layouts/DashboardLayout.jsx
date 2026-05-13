import { useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import MobileSidebar from "../components/sidebar/mobileSidebar";
import Navbar from "../components/navbar/navbar";
import FeedbackModal from "../components/feedback/FeedbackModal";
import FeedbackHistoryModal from "../components/feedback/FeedbackHistoryModal";
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
    setIsHistoryOpen(true);
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
          {/* Pass dashboard state to children */}
          {React.cloneElement(children, { ...dashboardState })}
        </main>
      </div>

      {/* Modals */}
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => {
          setIsFeedbackOpen(false);
          setActiveTab("Dashboard"); // Reset back to dashboard after closing
        }} 
      />

      <FeedbackHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => {
          setIsHistoryOpen(false);
          setActiveTab("Dashboard"); // Reset back to dashboard after closing
        }}
      />

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default DashboardLayout;
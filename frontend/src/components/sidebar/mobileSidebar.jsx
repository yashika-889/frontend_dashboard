import SidebarItem from "./SidebarItem";
import { sidebarLinks, bottomLinks } from "../../config/sidebarLinks";
import { FiX } from "react-icons/fi";

function MobileSidebar({ isOpen, onClose, activeTab, setActiveTab, onFeedbackClick, onHistoryClick }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" 
        onClick={onClose}
      />
      
      {/* Sidebar Content */}
      <aside className="absolute left-0 top-0 bottom-0 w-[280px] bg-white flex flex-col animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="h-[64px] border-b border-gray-100 flex items-center px-6">
          <button onClick={onClose} className="p-1 -ml-1">
            <FiX size={24} className="text-black" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-1 px-4 pt-6">
          {sidebarLinks.map((item) => (
            <SidebarItem
              key={item.id}
              title={item.title}
              Icon={item.icon}
              iconSize={item.iconSize}
              active={activeTab === item.title}
              hasInfo={item.hasInfo}
              onClick={() => {
                setActiveTab(item.title);
                onClose();
              }}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto px-4 pb-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            {bottomLinks.map((item) => (
              <SidebarItem
                key={item.id}
                title={item.title}
                Icon={item.icon}
                iconSize={item.iconSize}
                active={activeTab === item.title}
                hasInfo={false}
                onClick={() => {
                  setActiveTab(item.title);
                  if (item.title === "Feedback") onFeedbackClick();
                  if (item.title === "Feedback History") onHistoryClick();
                  onClose();
                }}
              />
            ))}
          </div>

          {/* Upgrade Button */}
          <div className="flex justify-center">
            <button className="w-full h-[40px] bg-[rgba(0,0,0,0.5)] text-white text-[14px] font-medium rounded-[8px]">
              Upgrade
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileSidebar;

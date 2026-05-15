import SidebarItem from "./SidebarItem";
import { sidebarLinks, bottomLinks } from "../../config/sidebarLinks";

function Sidebar({ activeTab, setActiveTab, onFeedbackClick, onHistoryClick }) {
  return (
    <aside className="hidden md:flex w-[262px] bg-white border-r border-[#E2E2E8] min-h-screen flex-col shrink-0">
      
      {/* Header */}
      <div className="h-[65px] w-full bg-white border-b border-[#E2E2E8] flex items-center pl-[59px] shrink-0">
        <h1 className="text-[24px] font-medium text-black tracking-[0.3px] leading-none w-[72px] h-[29px] flex items-center">
          Hintro
        </h1>
      </div>

{/* Navigation Group */}
<div className="flex flex-col pl-[30px] pt-[26px] w-full">
  <div className="flex flex-col gap-[6px] w-[224px]">
    {sidebarLinks.map((item) => (
        <SidebarItem
          key={item.id}
          title={item.title}
          Icon={item.icon}
          iconSize={item.iconSize}
          active={activeTab === item.title}
          hasInfo={item.hasInfo}
          infoText={item.infoText}
          onClick={() => setActiveTab(item.title)}
        />
    ))}
  </div>
</div>

      {/* Divider */}
      <div className="mt-auto">
        <div className="h-[1px] bg-[#E2E2E8] w-full" />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col px-[20px] pb-[81px] pt-6 w-full">
        <div className="flex flex-col gap-1 w-[224px]">
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
              }}
            />
          ))}
        </div>

        {/* Upgrade Button */}
        <div className="mt-8 flex justify-center w-full">
          <button className="w-[180px] h-[33px] bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.6)] text-white text-[14px] font-normal rounded-[8px] transition-all tracking-[0.3px] flex items-center justify-center py-[8px] px-[10px]">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
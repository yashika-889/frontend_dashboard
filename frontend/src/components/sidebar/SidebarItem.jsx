import { FiInfo } from "react-icons/fi";

function SidebarItem({ title, Icon, active, hasInfo, onClick, iconSize = 18 }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-3 h-[36px] rounded-[8px] cursor-pointer transition-all duration-200 group ${
        active
          ? "bg-[rgba(102,134,255,0.12)] text-[#6686FF]"
          : "text-[#202224] hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
          <Icon 
            size={iconSize} 
            className={active ? "text-[#6686FF]" : "text-black/70"} 
          />
        </div>
        <span className="text-[14px] font-medium tracking-[0.3px] whitespace-nowrap">{title}</span>
      </div>

      {hasInfo && (
        <div className="w-[20px] h-[20px] flex items-center justify-center border-[1.5px] border-[#1F2937] rounded-full shrink-0">
          <span className="text-[11px] font-bold leading-none mt-[1px] font-sans">i</span>
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
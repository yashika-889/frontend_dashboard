
import { RiErrorWarningLine } from "react-icons/ri";

function SidebarItem({ title, Icon, active, hasInfo, infoText, onClick, iconSize = 18 }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-[10px] h-[37px] rounded-[8px] cursor-pointer transition-all duration-200 group ${
        active
          ? "bg-[rgba(102,134,255,0.12)] text-[#6686FF]"
          : "text-[#202224] hover:bg-[rgba(102,134,255,0.12)] hover:text-[#4D4D4D]"
      }`}
    >
      <div className="flex items-center gap-[12px]">
        <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
          <Icon 
            size={iconSize} 
            active={active}
            color={active ? "#6686FF" : undefined}
            className={`${
              !active && "text-black/70 group-hover:text-[#4D4D4D]"
            } transition-colors duration-200`}
          />
        </div>
        <span className="text-[14px] font-medium tracking-[0.3px] whitespace-nowrap leading-[17px]">
          {title}
        </span>
      </div>

      {hasInfo && (
        <div className="relative group/info w-[20px] h-[20px] flex items-center justify-center shrink-0">
          <RiErrorWarningLine 
            size={20} 
            color={active ? "#6686FF" : "black"}
            className="transition-colors duration-200"
          />
          
          {/* Tooltip */}
          {infoText && (
            <div className="invisible group-hover/info:visible opacity-0 group-hover/info:opacity-100 absolute left-[30px] top-[-10px] w-[280px] bg-black text-white p-[12px] rounded-[8px] shadow-xl transition-all duration-300 z-50 pointer-events-none">
              <p className="text-[12px] font-normal leading-[1.5] tracking-[0.2px] font-['Inter']">
                {infoText}
              </p>
              {/* Tooltip Arrow */}
              <div className="absolute left-[-4px] top-[14px] w-[8px] h-[8px] bg-black rotate-45" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
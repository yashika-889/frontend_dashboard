import { RiCalendarLine } from "react-icons/ri";

function EmptyCalls() {
  return (
    <div className="flex flex-col items-center bg-white border border-[#F0F0F0] rounded-[16px] w-full max-w-[802px] min-h-[188px] mx-auto overflow-hidden pb-6 md:pb-0">
      
      {/* Group of Icon and Text (Frame 428) */}
      <div className="flex flex-col items-center gap-[12px] mt-[26px] px-4">
        
        {/* Icon Box (Frame 426) */}
        <div className="w-[34px] h-[36px] bg-[rgba(102,134,255,0.12)] rounded-[8px] flex items-center justify-center p-[10px]">
          <RiCalendarLine size={16} className="text-[#6686FF]" />
        </div>

        {/* Text Area (Frame 427) */}
        <div className="flex flex-col items-center gap-[4px] w-full max-w-[355px]">
          <h4 className="text-[14px] font-medium text-black tracking-[0.5px] leading-[17px] text-center">
            No Recent Calls
          </h4>
          <p className="text-[10px] font-normal text-[rgba(0,0,0,0.4)] tracking-[0.3px] leading-[12px] text-center w-full max-w-[302px]">
            Connect your Google Calendar to see upcoming meetings, get reminders, and join calls directly from Hintro.
          </p>
        </div>
      </div>

      {/* Button (Frame 429) */}
      <div className="flex justify-center w-full mt-[16px] mb-[26px]">
        <button className="w-auto min-w-[78px] md:min-w-[119px] h-[31px] border-[0.5px] border-black rounded-[4px] text-[10px] md:text-[12px] font-medium text-black flex items-center justify-center px-[12px] md:px-[24px] tracking-[-0.16px] hover:bg-black/40 transition-all font-['Inter']">
          Start a Call
        </button>
      </div>
    </div>
  );
}

export default EmptyCalls;

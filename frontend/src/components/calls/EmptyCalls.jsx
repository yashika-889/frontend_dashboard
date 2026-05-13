import { RiPhoneLine } from "react-icons/ri";

function EmptyCalls() {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-black/10 rounded-[16px] w-full max-w-[802px] h-[220px] md:h-[188px] p-6 mx-auto">
      
      {/* Icon */}
      <div className="w-[40px] h-[40px] bg-[#E1E7FF] rounded-[8px] flex items-center justify-center mb-4">
        <RiPhoneLine size={20} className="text-[#6686FF]" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center text-center gap-1 mb-5">
        <h4 className="text-[14px] md:text-[15px] font-bold text-black tracking-[0.3px]">
          No Recent Calls
        </h4>
        <p className="text-[11px] md:text-[12px] font-normal text-black/40 tracking-[0.3px] max-w-[280px]">
          Connect your Google Calendar to see upcoming meetings, get reminders, and join calls directly from Hintro.
        </p>
      </div>

      {/* Button */}
      <button className="w-[100px] md:w-[78px] h-[28px] md:h-[24px] border border-black/50 rounded-[4px] text-[11px] font-medium text-black hover:bg-gray-50 transition-all">
        Start a call
      </button>
    </div>
  );
}

export default EmptyCalls;

import profileImg from "../../assets/profile.jpg";

function CallCard({ title, time }) {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-[786px] h-[35px] py-0 px-0 group">
      {/* Frame 417: Icon + Details */}
      <div className="flex flex-row items-center gap-[16px] w-[130px] h-[35px]">
        {/* Frame 541: Icon Box */}
        <div className="relative w-[29px] h-[29px] bg-[#8A38F5] rounded-[4px] shrink-0">
          <span className="absolute left-[10px] top-[6px] w-[10px] h-[17px] text-[14px] font-normal leading-[17px] text-black text-center tracking-[0.5px]">
            K
          </span>
        </div>

        {/* Frame 416: Title + Avatars */}
        <div className="flex flex-col items-start gap-[4px] w-[85px] h-[35px]">
          <span className="w-[85px] h-[17px] text-[14px] font-normal text-black leading-[17px] tracking-[0.5px] text-center truncate">
            {title}
          </span>

          {/* Frame 523: Avatars */}
          <div className="relative w-[30px] h-[14px] shrink-0">
            {[0, 8, 16].map((offset, idx) => (
              <div 
                key={idx}
                className="absolute top-0 w-[14px] h-[14px] rounded-[350px] bg-[#D9D9D9] overflow-hidden"
                style={{ left: `${offset}px` }}
              >
                <img
                  src={profileImg}
                  alt="participant"
                  className="absolute w-[17.5px] h-[26.25px] max-w-none"
                  style={{ 
                    left: '-1.05px', 
                    top: '-2.8px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frame 534: Time + AI Interactions + Options */}
      <div className="flex flex-row items-center gap-[12px] h-[17px]">
        <span className="w-auto text-[12px] font-medium text-black leading-[15px] tracking-[0.5px] whitespace-nowrap">
          {time}
        </span>

        {/* AI Interactions (Hidden by default, shown only on hover) */}
        <div className="hidden group-hover:flex flex-row items-center gap-[6px] transition-all duration-200">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2.66667V10.6667C14 11.0349 13.7015 11.3333 13.3333 11.3333H5.33333L2 14.6667V2.66667C2 2.29848 2.29848 2 2.66667 2H13.3333C13.7015 2 14 2.29848 14 2.66667Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[12px] font-normal text-black/60 tracking-[0.3px] whitespace-nowrap">
            6 AI Interactions
          </span>
        </div>
        
        {/* Icon (3 vertical dots) */}
        <div className="flex flex-col justify-between items-center w-[3px] h-[16px] shrink-0 cursor-pointer py-[1px]">
          <div className="w-[3px] h-[3px] bg-black rounded-full" />
          <div className="w-[3px] h-[3px] bg-black rounded-full" />
          <div className="w-[3px] h-[3px] bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default CallCard;

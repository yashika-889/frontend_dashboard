import { FiMoreVertical } from "react-icons/fi";

function CallCard({ title, time }) {
  // Mock participant avatars
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  ];

  return (
    <div className="flex items-center justify-between py-3 px-2.5 hover:bg-gray-50 rounded-xl transition-colors group">
      {/* Left Area: Icon + Details */}
      <div className="flex items-center gap-3">
        {/* Purple Initial Icon */}
        <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] text-white text-sm font-bold flex items-center justify-center shrink-0">
          K
        </div>

        {/* Text and Participant Avatars Stack */}
        <div className="flex flex-col">
          <span className="text-[13px] font-semibold text-[#111827] leading-tight">
            {title}
          </span>

          {/* Participant avatars */}
          <div className="flex items-center -space-x-1.5 mt-1">
            {avatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="participant"
                className="w-4 h-4 rounded-full object-cover border border-white"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Area: Time + Options */}
      <div className="flex items-center gap-6">
        <span className="text-[11px] font-medium text-[#6B7280]">
          {time}
        </span>
        <button className="text-[#9CA3AF] group-hover:text-gray-700 transition-colors">
          <FiMoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}

export default CallCard;

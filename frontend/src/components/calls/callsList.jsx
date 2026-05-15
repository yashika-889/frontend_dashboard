import CallCard from "./callCard";
import { formatDate, formatTime } from "../../utils/formatters";

function CallsList({ calls = [] }) {
  // Group calls by date
  const groupedCalls = calls.reduce((groups, call) => {
    const dateKey = formatDate(call.started_at);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(call);
    return groups;
  }, {});

  const callsGrouped = Object.entries(groupedCalls).map(([date, calls]) => ({
    date,
    calls
  }));

  if (calls.length === 0) return null;

  return (
    <div className="w-full max-w-[802px] flex flex-col items-center gap-[12px]">
      {/* Frame 538: Grouped Content */}
      <div className="flex flex-col items-start gap-[24px] w-full">
        {callsGrouped.map((group, gIdx) => (
          <div key={gIdx} className="flex flex-col items-start gap-[20px] w-[790px]">
            {/* Frame 536/537: Date Header */}
            <div className="w-[790px] h-[15px]">
              <span className="text-[12px] font-medium text-[#00000066] leading-[12px] tracking-[0px] block w-full">
                {group.date}
              </span>
            </div>

            {/* Calls Container */}
            <div className="flex flex-col gap-[8px] w-[789px]">
              {group.calls.map((call) => (
                <CallCard 
                  key={call._id} 
                  title={call.description || "Design Call"} 
                  time={formatTime(call.started_at)} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallsList;

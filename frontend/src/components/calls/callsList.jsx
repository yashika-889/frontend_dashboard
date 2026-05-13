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

  // Convert grouped object to array for mapping
  const callsGrouped = Object.entries(groupedCalls).map(([date, calls]) => ({
    date,
    calls
  }));

  if (calls.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col gap-4">
      {callsGrouped.map((group, gIdx) => (
        <div key={gIdx} className="flex flex-col gap-1">
          {/* Date Group Header */}
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
            {group.date}
          </span>

          {/* Grouped Call Cards */}
          <div className="flex flex-col">
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
  );
}

export default CallsList;

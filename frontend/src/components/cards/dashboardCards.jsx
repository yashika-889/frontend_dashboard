import StatCard from "./statCard";
import {
  RiPieChart2Fill,
  RiTimeFill,
  RiSparklingFill,
  RiCalendarEventFill,
} from "react-icons/ri";

function DashboardCards({ isFilled, stats, dashboardData }) {
  const usageStats = [
    {
      label: "Total Sessions",
      value: isFilled ? stats?.total_sessions || 22 : 0,
      icon: RiPieChart2Fill,
      color: "#FFE1E1",
      iconColor: "rgba(222, 54, 42, 0.8)",
    },
    {
      label: "Average Duration",
      value: isFilled ? stats?.avg_duration || "14m 22sec" : "0",
      icon: RiTimeFill,
      color: "#E1FCFF",
      iconColor: "#4C9DA6",
    },
    {
      label: "AI Used",
      value: isFilled ? `${stats?.ai_usage || 147} times` : 0,
      icon: RiSparklingFill,
      color: "#E1FFE4",
      iconColor: "#499955",
    },
    {
      label: "Last Session",
      value: isFilled ? stats?.last_session || "2 days ago" : "-",
      icon: RiCalendarEventFill,
      color: "#EBE1FF",
      iconColor: "#7B57C2",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[24px] w-full">
      {usageStats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          Icon={stat.icon}
          color={stat.color}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
}

export default DashboardCards;

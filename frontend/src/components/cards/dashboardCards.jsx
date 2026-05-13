import StatCard from "./statCard";
import {
  RiTimerLine,
  RiTimeLine,
  RiFlashlightLine,
  RiCalendarLine,
} from "react-icons/ri";

function DashboardCards({ isFilled, stats, dashboardData }) {
  const usageStats = [
    {
      label: "Total Sessions",
      value: isFilled ? stats?.total_sessions || 22 : 0,
      icon: RiTimerLine,
      color: "#FFE1E1",
      iconColor: "rgba(222, 54, 42, 0.8)",
    },
    {
      label: "Average Duration",
      value: isFilled ? stats?.avg_duration || "14m 22sec" : "0",
      icon: RiTimeLine,
      color: "#E1FCFF",
      iconColor: "rgba(63, 185, 198, 0.8)",
    },
    {
      label: "AI Used",
      value: isFilled ? `${stats?.ai_usage || 147} times` : 0,
      icon: RiFlashlightLine,
      color: "#E6FFE1",
      iconColor: "rgba(71, 191, 53, 0.8)",
    },
    {
      label: "Last Session",
      value: isFilled ? stats?.last_session || "2 days ago" : "-",
      icon: RiCalendarLine,
      color: "#EFE1FF",
      iconColor: "rgba(126, 61, 198, 0.8)",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:flex md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 justify-center">
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

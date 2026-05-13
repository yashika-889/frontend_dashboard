import DashboardCards from "../components/cards/dashboardCards";
import EmptyCalls from "../components/calls/EmptyCalls";
import CallsList from "../components/calls/callsList";

function Dashboard({ dashboardData, stats, calls, loading }) {
  const isFilled = calls?.length > 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-sm font-medium text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 p-4 md:p-12 max-w-[1200px] mx-auto w-full">
      
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 w-full gap-4">
        {/* Frame 347 */}
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[18px] md:text-[20px] font-medium text-black leading-tight tracking-[0.3px]">
            Hi, {dashboardData?.user?.firstName || "Name"} 👋 Welcome to Hintro
          </h2>
          <p className="text-[11px] md:text-[12px] font-normal text-black leading-tight tracking-[0.3px]">
            Ready to make your next call smarter ?
          </p>
        </div>

        {/* Start Call Button (Frame 4) */}
        <button className="w-[84px] md:w-[137px] h-[32px] md:h-[38px] bg-black text-white rounded-[4px] text-[12px] md:text-[14px] font-normal tracking-[0.3px] flex items-center justify-center hover:bg-gray-800 transition-all">
          Start Call
        </button>
      </div>

      {/* Stat Cards Section */}
      <div className="mb-10 md:mb-14">
        <DashboardCards
          isFilled={isFilled}
          stats={stats}
          dashboardData={dashboardData}
        />
      </div>

      {/* Recent Calls Section */}
      <div className="flex flex-col items-center gap-[12px] w-full">
        <h3 className="text-[14px] md:text-[16px] font-medium text-black leading-[19px]">
          Recent calls
        </h3>

        <div className="w-full">
          {isFilled ? (
            <CallsList calls={calls} />
          ) : (
            <EmptyCalls />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
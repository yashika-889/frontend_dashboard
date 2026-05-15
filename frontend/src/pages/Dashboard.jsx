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
    <div className="flex flex-col flex-1 px-6 md:pl-[48px] md:pr-[48px] pt-[26px] w-full max-w-full overflow-x-hidden">
      
      {/* Welcome Section (Frame 348) */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-[32px] md:mb-[52px] max-w-[1005px] w-full gap-4">
        {/* Frame 347 */}
        <div className="flex flex-col gap-[2px]">
          <h2 className="text-[18px] md:text-[20px] font-medium text-black leading-tight tracking-[0.3px]">
            Hi, {dashboardData?.user?.firstName || "Name"} 👋 Welcome to Hintro
          </h2>
          <p className="text-[11px] md:text-[12px] font-normal text-black/80 leading-tight tracking-[0.3px]">
            Ready to make your next call smarter ?
          </p>
        </div>

        {/* Start Call Button (Frame 4) */}
        <button className="w-auto min-w-[87px] md:min-w-[119px] h-[31px] md:h-[31px] bg-black text-white rounded-[4px] text-[10px] md:text-[12px] font-medium font-['Inter'] tracking-[-0.16px] flex items-center justify-center px-[12px] md:px-[24px] py-[8px] hover:bg-black/40 hover:border-[0.5px] hover:border-black hover:text-black transition-all shrink-0">
          Start Call
        </button>
      </div>

      {/* Stat Cards Section */}
      <div className="mb-[40px] md:mb-[56px] w-full max-w-[1005px]">
        <DashboardCards
          isFilled={isFilled}
          stats={stats}
          dashboardData={dashboardData}
        />
      </div>

      <div className="flex flex-col items-center gap-[12px] w-full max-w-[1005px] mb-10">
        {/* Frame 336 */}
        <div className="flex flex-row justify-center items-center w-full h-[19px]">
          <h3 className="text-[16px] font-medium text-black leading-[19px] text-center">
            Recent calls
          </h3>
        </div>

        <div className="w-full flex justify-center overflow-y-auto max-h-[313px]">
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
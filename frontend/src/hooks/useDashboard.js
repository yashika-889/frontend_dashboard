import { useState, useEffect } from "react";
import { getDashboard, getStats, getCallHistory } from "../api/dashboardApi";
import { USERS } from "../constants/users";

const useDashboard = () => {
  const [currentUser, setCurrentUser] = useState(USERS.EMPTY);
  const [dashboardData, setDashboardData] = useState(null);
  const [stats, setStats] = useState(null);
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [dashboardRes, statsRes, historyRes] = await Promise.all([
          getDashboard(currentUser),
          getStats(currentUser),
          getCallHistory(currentUser),
        ]);

        setDashboardData(dashboardRes);
        setStats(statsRes);
        setCalls(historyRes.callSessions || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  return {
    dashboardData,
    stats,
    calls,
    loading,
    currentUser,
    setCurrentUser,
  };
};

export default useDashboard;
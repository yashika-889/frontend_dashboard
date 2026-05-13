import { api } from "./axios";

export const getProfile = async (userId) => {
  const response = await api.get("/api/auth/profile", {
    headers: {
      "x-user-id": userId,
    },
  });

  return response.data;
};

export const getDashboard = async (userId) => {
  const response = await api.get("/api/auth/dashboard", {
    headers: {
      "x-user-id": userId,
    },
  });

  return response.data;
};

export const getStats = async (userId) => {
  const response = await api.get("/api/call-sessions/stats", {
    headers: {
      "x-user-id": userId,
    },
  });

  return response.data;
};

export const getCallHistory = async (userId) => {
  const response = await api.get("/api/call-sessions?limit=10", {
    headers: {
      "x-user-id": userId,
    },
  });

  return response.data;
};
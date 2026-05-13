export const formatDuration = (seconds) => {
  if (!seconds) return "0s";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  if (s > 0 || parts.length === 0) parts.push(`${s}s`);

  return parts.join(" ");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  
  // Format as "April 20th" or similar
  const options = { month: 'long', day: 'numeric' };
  let formatted = date.toLocaleDateString('en-US', options);
  
  // Add ordinal suffix (st, nd, rd, th)
  const day = date.getDate();
  const suffix = ["th", "st", "nd", "rd"][((day % 100) - 20) % 10 <= 3 ? ((day % 100) - 20) % 10 : (day % 100) % 10] || "th";
  
  return formatted + (day > 0 ? suffix : "");
};

export const formatRelativeDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "just now";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} days ago`;
  
  return date.toLocaleDateString();
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
};

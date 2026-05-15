import {
  RiInboxFill,
  RiLifebuoyFill
} from "react-icons/ri";

const DashboardIcon = ({ size = 16, active }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.33" y="1.33" width="13.33" height="4" rx="1" fill={active ? "#6686FF" : "rgba(0,0,0,0.7)"} />
    <rect x="1.33" y="6.67" width="8" height="8" rx="1" fill={active ? "#6686FF" : "rgba(0,0,0,0.7)"} />
    <rect x="10.67" y="6.67" width="4" height="8" rx="1" fill={active ? "#6686FF" : "rgba(0,0,0,0.7)"} />
  </svg>
);

const PhoneIcon = ({ size = 18, active }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M3.33334 4.04668C2.78105 4.04668 2.33334 4.49439 2.33334 5.04668C2.33334 10.2013 6.51202 14.38 11.6667 14.38C12.219 14.38 12.6667 13.9323 12.6667 13.38V11.38C12.6667 10.8764 12.2989 10.4571 11.7992 10.3916L9.75921 10.125C9.33969 10.07 8.91873 10.2458 8.67323 10.5736L7.70672 11.8603C6.44498 11.1416 5.38505 10.0817 4.66632 8.82L5.953 7.85348C6.28079 7.60798 6.45663 7.18702 6.40167 6.7675L6.13501 4.7275C6.06957 4.2278 5.65026 3.86 5.14667 3.86H3.33334V4.04668Z" 
      fill={active ? "#6686FF" : "rgba(0,0,0,0.7)"}
    />
  </svg>
);

const KnowledgeBaseIcon = ({ size = 18, active }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M3.6 1.8C3.6 1.35817 3.95817 1 4.4 1H10.6L14.4 4.8V15.975C14.4 16.4168 14.0418 16.775 13.6 16.775H4.4C3.95817 16.775 3.6 16.4168 3.6 15.975V1.8ZM9.6 2.4V5.4H12.6L9.6 2.4ZM5.4 9.6H12.6V10.8H5.4V9.6ZM12.6 12H5.4V13.2H12.6V12ZM5.4 7.2H8.4V8.4H5.4V7.2Z" 
      fill={active ? "#6686FF" : "#4C4C4C"}
    />
  </svg>
);

const PromptsIcon = ({ size = 18, active }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M2.25 3.375C2.25 2.54657 2.92157 1.875 3.75 1.875H14.25C15.0784 1.875 15.75 2.54657 15.75 3.375V12.375C15.75 13.2034 15.0784 13.875 14.25 13.875H11.25L9 16.125L6.75 13.875H3.75C2.92157 13.875 2.25 13.2034 2.25 12.375V3.375ZM5.25 5.625V7.125H12.75V5.625H5.25ZM5.25 8.625V10.125H10.5V8.625H5.25Z" 
      fill={active ? "#6686FF" : "#4C4C4C"}
    />
  </svg>
);



const BoxyControlsIcon = ({ size = 18, active }) => (
  <RiLifebuoyFill size={size} color={active ? "#6686FF" : "#4C4C4C"} />
);

const FeedbackHistoryIcon = ({ size = 20, active }) => (
  <RiInboxFill size={size} color={active ? "#6686FF" : "rgba(0,0,0,0.7)"} />
);

const FeedbackIcon = ({ size = 20, active }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M3.75 6.25C3.05964 6.25 2.5 6.80964 2.5 7.5V9.375C2.5 10.0654 3.05964 10.625 3.75 10.625H16.25C16.9404 10.625 17.5 10.0654 17.5 9.375V7.5C17.5 6.80964 16.9404 6.25 16.25 6.25H13.75C13.75 4.86929 12.6307 3.75 11.25 3.75C10.5607 3.75 10 4.31066 10 5C10 4.31066 9.43934 3.75 8.75 3.75C7.36929 3.75 6.25 4.86929 6.25 6.25H3.75ZM11.25 5C11.9404 5 12.5 5.55964 12.5 6.25H10V5.75C10 5.33579 10.3358 5 10.75 5H11.25ZM8.75 5C8.05964 5 7.5 5.55964 7.5 6.25H10V5.75C10 5.33579 9.66421 5 9.25 5H8.75ZM4.375 11.25H15.625V16.875C15.625 17.2202 15.3452 17.5 15 17.5H5C4.65482 17.5 4.375 17.2202 4.375 16.875V11.25ZM9.375 11.25V17.5H10.625V11.25H9.375Z" 
      fill={active ? "#6686FF" : "rgba(0,0,0,0.7)"}
    />
  </svg>
);

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
    iconSize: 16,
    hasInfo: false,
  },
  {
    id: 2,
    title: "Call Insights",
    icon: PhoneIcon,
    iconSize: 16,
    hasInfo: false,
  },
  {
    id: 3,
    title: "Knowledge Base",
    icon: KnowledgeBaseIcon,
    iconSize: 18,
    hasInfo: true,
    infoText: "Access your stored documents and information to quickly find answers during calls.",
  },
  {
    id: 4,
    title: "Prompts",
    icon: PromptsIcon,
    iconSize: 18,
    hasInfo: true,
    infoText: "A real-time guide that helps you structure conversations and stay on track by suggesting the right questions and responses during calls.",
  },
  {
    id: 5,
    title: "Boxy Controls",
    icon: BoxyControlsIcon,
    iconSize: 18,
    hasInfo: true,
    infoText: "Configure and manage your AI assistant's behavior and response style.",
  },
];

export const bottomLinks = [
  {
    id: 6,
    title: "Feedback History",
    icon: FeedbackHistoryIcon,
    iconSize: 20,
  },
  {
    id: 7,
    title: "Feedback",
    icon: FeedbackIcon,
    iconSize: 20,
  },
];
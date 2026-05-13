import {
  RiDashboardFill,
  RiPhoneFill,
  RiFileTextFill,
  RiMessage3Fill,
  RiLifebuoyFill,
  RiInboxFill,
  RiGiftFill
} from "react-icons/ri";

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: RiDashboardFill,
    iconSize: 16,
    hasInfo: false,
  },
  {
    id: 2,
    title: "Call Insights",
    icon: RiPhoneFill,
    iconSize: 16,
    hasInfo: false,
  },
  {
    id: 3,
    title: "Knowledge Base",
    icon: RiFileTextFill,
    iconSize: 18,
    hasInfo: true,
  },
  {
    id: 4,
    title: "Prompts",
    icon: RiMessage3Fill,
    iconSize: 18,
    hasInfo: true,
  },
  {
    id: 5,
    title: "Boxy Controls",
    icon: RiLifebuoyFill,
    iconSize: 18,
    hasInfo: true,
  },
];

export const bottomLinks = [
  {
    id: 6,
    title: "Feedback History",
    icon: RiInboxFill,
    iconSize: 20,
  },
  {
    id: 7,
    title: "Feedback",
    icon: RiGiftFill,
    iconSize: 20,
  },
];
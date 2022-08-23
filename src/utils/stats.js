import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

const defaultStatsData = [
  {
    title: "pending applications",
    count: 0,
    icon: <FaSuitcaseRolling />,
    color: "#e9b949",
    bcg: "#fcefc7",
  },
  {
    title: "interviews scheduled",
    count: 0,
    icon: <FaCalendarCheck />,
    color: "#647acb",
    bcg: "#e0e8f9",
  },
  {
    title: "jobs declined",
    count: 0,
    icon: <FaBug />,
    color: "#d66a6a",
    bcg: "#ffeeee",
  },
];

export default defaultStatsData;

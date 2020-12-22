import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/sites",
    name: "Sites",
    rtlName: "إخطارات",
    icon: "poll",
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/foremen",
    name: "Foremen",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "perm_identity",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Attendance",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/staff",
    name: "Site staff",
    rtlName: "طباعة",
    icon: "contact_page",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/invoice",
    name: "Invoicing",
    rtlName: "طباعة",
    icon: "library_books",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Leave calendar",
    rtlName: "الرموز",
    icon: "event",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/help",
    name: "Help",
    rtlName: "إخطارات",
    icon: "help",
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;

import App from "../components/App";
import Dashboard from "../components/admin/Dashboard";
import Orders from "../components/admin/Orders"
import Products from "../components/admin/Products";
import Users from "../components/admin/Users";
import Newsletter from "../components/admin/Newsletter";
import Logs from "../components/admin/Logs";
import Settings from "../components/admin/Settings";

export const ADMIN_ROUTING = [
    {
        linkTo: "/admin_dashboard",
        buttonName: "Dashboard",
        component: Dashboard
    },
    {
        linkTo: "/admin_products",
        buttonName: "Products",
        component: Products
    },
    {
        linkTo: "/admin_orders",
        buttonName: "Orders",
        component: Orders
    },
    {
        linkTo: "/admin_users",
        buttonName: "Users",
        component: Users
    },
    {
        linkTo: "/admin_newsletter",
        buttonName: "Newsletter",
        component: Newsletter
    },
    {
        linkTo: "/admin_logs",
        buttonName: "Logs",
        component: Logs
    },
    {
        linkTo: "/admin_settings",
        buttonName: "Settings",
        component: Settings
    }
]

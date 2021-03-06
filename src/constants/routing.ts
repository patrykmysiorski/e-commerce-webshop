import App from "../components/App";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Dashboard from "../components/admin/Dashboard";

export const ROUTING = [
    {
        linkTo: "/",
        buttonName: "Home page",
        component: App
    },
    {
        linkTo: "/products",
        buttonName: "Products",
        component: Products
    },
    {
        linkTo: "/cart",
        buttonName: "Your Cart",
        component: Cart
    },
    {
        linkTo: "/admin_dashboard",
        buttonName: "Dashboard",
        component: Dashboard
    }
];

import App from "../components/App";
import LandingPage from "../components/LandingPage";
import Products from "../components/Products";

export const ROUTING = [
    {
        linkTo: "/",
        buttonName: "Home page",
        component: App
    },
    {
        linkTo: "/landing",
        buttonName: "Landing",
        component: LandingPage
    },
    {
        linkTo: "/products",
        buttonName: "Products",
        component: Products
    }
];

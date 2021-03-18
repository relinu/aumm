import Home from "./Home/Home";
import ModList from "./ModList/ModList";
import Settings from "./Settings/Settings";

export const defaultRoute = "/home";

export const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/modlist",
        component: ModList
    },
    {
        path: "/settings",
        component: Settings
    },
];
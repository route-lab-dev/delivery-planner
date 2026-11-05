import { DeliveriesPage } from "@/pages/deliveries";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";
import { MenuPage } from "@/pages/menu";
import { MapPage } from "@/pages/map";
import { NotFoundPage } from "@/pages/not-found";
import { CallsPage } from "@/pages/calls";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/", element: <DeliveriesPage /> },
            { path: "/menu", element: <MenuPage /> },
            { path: "/map", element: <MapPage /> },
            { path: "/not-found", element: <NotFoundPage /> },
            { path: "/calls", element: <CallsPage /> },
        ],
    },
]);

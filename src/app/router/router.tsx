import { DeliveriesPage } from "@/pages/deliveries";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [{ path: "/", element: <DeliveriesPage /> }],
    },
]);

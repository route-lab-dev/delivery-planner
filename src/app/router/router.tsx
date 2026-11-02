import { DeliveriesPage } from "@/pages/deliveries";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DeliveriesPage />,
    },
]);

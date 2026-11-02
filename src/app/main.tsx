import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

// Фейковый сервер — только при разработке
const enableMocking = async () => {
    if (!import.meta.env.DEV) return;

    const { worker } = await import("@/shared/api/mocks");

    await worker.start();
};

enableMocking().then(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>,
    );
});

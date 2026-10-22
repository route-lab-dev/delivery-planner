import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store.ts";
import App from "./App.tsx";

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
                <App />
            </Provider>
        </StrictMode>,
    );
});

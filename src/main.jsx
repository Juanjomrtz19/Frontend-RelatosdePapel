import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Router";
import { GlobalProvider } from "./context/GlobalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  </StrictMode>
);

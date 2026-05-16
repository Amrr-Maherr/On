import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./features/tour/tour-styles.css";
import AppProviders from "@/app/providers/AppProviders";
import TourProvider from "@/features/tour/components/TourProvider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <TourProvider>
          <App />
        </TourProvider>
      </BrowserRouter>
    </AppProviders>
  </StrictMode>,
);

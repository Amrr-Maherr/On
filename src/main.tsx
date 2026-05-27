import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

import "./index.css";
import "./features/tour/tour-styles.css";
import AppProviders from "@/app/providers/AppProviders";
import TourProvider from "@/features/tour/components/TourProvider";
import { LenisProvider } from "@/shared/providers/LenisProvider";
import App from "./App.tsx";
import "./i18n";

registerSW();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <LenisProvider>
          <TourProvider>
            <App />
          </TourProvider>
        </LenisProvider>
      </BrowserRouter>
    </AppProviders>
  </StrictMode>,
);

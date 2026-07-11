import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

import "./index.css";
import AppProviders from "@/app/providers/AppProviders";
import { LenisProvider } from "@/shared/providers/LenisProvider";
import TourProvider from "@/features/tour/components/TourProvider";
import App from "./App.tsx";
import "./i18n";
import { GoogleOAuthProvider } from "@react-oauth/google";
registerSW();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AppProviders>
        <BrowserRouter>
          <LenisProvider>
            <TourProvider>
              <App />
            </TourProvider>
          </LenisProvider>
        </BrowserRouter>
      </AppProviders>
    </GoogleOAuthProvider>
  </StrictMode>,
);

import { Navigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";

export default function AuthPage() {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  return <Navigate to={buildLocalizedPath("/login", lang)} replace />;
}

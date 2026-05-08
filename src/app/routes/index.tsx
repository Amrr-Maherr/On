import { Routes, Route } from "react-router-dom";
import Hero from "@/components/layout/Hero";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

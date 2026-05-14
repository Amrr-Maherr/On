import { Toaster } from "react-hot-toast";
import AppRoutes from "./app/routes";
import Navbar from "./components/layout/Navbar";
import Footer from "@/shared/layout/Footer";
import ScrollToTopButton from "@/shared/components/ScrollToTopButton";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster position="top-right" />
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

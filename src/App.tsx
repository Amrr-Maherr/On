import AppRoutes from "./app/routes";
import Navbar from "./components/layout/Navbar";
import Footer from "@/shared/layout/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

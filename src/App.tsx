import AppRoutes from "./app/routes";
import Navbar from "./components/layout/Navbar";
import Footer from "@/shared/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/shared/components/ScrollToTopButton";
import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "@/shared/layout/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import BlobCursor from "@/components/shared/BlobCursor";
const AppRoutes = lazy(() => import("./app/routes"));
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <BlobCursor
        blobType="circle"
        fillColor="#ffffff"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="#000000"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={2147483647}
      />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "0px",
            background: "var(--background)",
            color: "var(--foreground)",
            border: "2px solid var(--border)",
            fontSize: "12px",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            padding: "16px 24px",
            boxShadow: "20px 20px 0px rgba(0,0,0,0.1)",
          },
          success: {
            style: {
              border: "2px solid #22c55e",
            },
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              border: "2px solid #ef4444",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={<Skeleton className="h-screen w-full rounded-none" />}
        >
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

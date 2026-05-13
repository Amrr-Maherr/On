import Hero from "@/components/layout/Hero";
import Banner from "../components/banner/banner";
import FeaturesSection from "../components/FeaturesSection";
import CategoriesSection from "../components/CategoriesSection";
import ProductsSection from "../components/ProductsSection";

function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <FeaturesSection />
      <CategoriesSection />
      <ProductsSection />
    </>
  );
}

export default HomePage;

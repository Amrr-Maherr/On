import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import Banner from "../components/banner/banner";
import FeaturesSection from "../components/FeaturesSection";
import CategoriesSection from "../components/CategoriesSection";
import BrandsSection from "../components/BrandsSection";
import ProductsSection from "../components/ProductsSection";

function HomePage() {
  return (
    <>
      <PageHelmet title="Home" />
      <Hero />
      <Banner />
      <FeaturesSection />
      <CategoriesSection />
      <BrandsSection />
      <ProductsSection />
    </>
  );
}

export default HomePage;

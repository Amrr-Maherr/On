import { memo } from "react";
import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import Banner from "../components/banner/banner";
import FeaturesSection from "../components/FeaturesSection";
import CategoriesSection from "../components/CategoriesSection";
import BrandsSection from "../components/BrandsSection";
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ValuesSection from "../components/ValuesSection";
import BlogSection from "../components/BlogSection";
import TeamSection from "../components/TeamSection";

const HomePage = memo(function HomePage() {
  return (
    <>
      <PageHelmet title="Home" />
      <Hero />
      <Banner />
      <FeaturesSection />
      <CategoriesSection />
      <BrandsSection />
      <ProductsSection />
      <TestimonialsSection />
      <ValuesSection />
      <BlogSection />
      <TeamSection />
    </>
  );
});

export default HomePage;

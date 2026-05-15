import { memo } from "react";
import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import ProductsSection from "../components/ProductsSection";
import CategoriesSection from "../components/CategoriesSection";
import Banner from "../components/banner/banner";
import BrandsSection from "../components/BrandsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturesSection from "../components/FeaturesSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import CtaSection from "../components/CtaSection";
import BlogSection from "../components/BlogSection";

const HomePage = memo(function HomePage() {
  return (
    <>
      <PageHelmet title="Home" />
      <Hero />
      <ProductsSection />
      <CategoriesSection />
      <Banner />
      <BrandsSection />
      <TestimonialsSection />
      <ValuesSection />
      <FeaturesSection />
      <TeamSection />
      <CtaSection />
      <BlogSection />
    </>
  );
});

export default HomePage;

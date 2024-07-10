import HomeHero from "@/components/molecules/home-hero";
import HomeCategoryTeaser from "@/components/molecules/home-category-teaser";
import HomeProductTeaser from "@/components/molecules/home-product-teaser";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeCategoryTeaser />
      <HomeProductTeaser />
    </main>
  );
}

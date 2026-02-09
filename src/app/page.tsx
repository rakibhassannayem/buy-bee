import BestSelling from "@/components/pages/home/BestSelling";
import HeroSection from "@/components/pages/home/HeroSection";
import TopCategory from "@/components/pages/home/TopCategory";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <TopCategory />
      <BestSelling />
    </div>
  );
}

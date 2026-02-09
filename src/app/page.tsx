import BestSelling from "@/components/pages/home/BestSelling";
import HeroSection from "@/components/pages/home/HeroSection";
import NewArrival from "@/components/pages/home/NewArrival";
import TopBrands from "@/components/pages/home/TopBrands";
import TopCategory from "@/components/pages/home/TopCategory";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <TopCategory />
      <TopBrands />
      <BestSelling />
      <NewArrival />
    </div>
  );
}

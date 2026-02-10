import { Banner } from "@/components/pages/home/Banner";
import LeftAside from "@/components/pages/home/LeftAside";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-0">
      <div className="lg:col-span-2 mb-4 lg:mb-0">
        <LeftAside />
      </div>
      <div className="col-span-12 lg:col-span-10 border-t">
        <Banner />
      </div>
    </div>
  );
};

export default HeroSection;

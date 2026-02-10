import BestSelling from "@/components/pages/home/BestSelling";
import ExploreProducts from "@/components/pages/home/ExploreProducts";
import HeroSection from "@/components/pages/home/HeroSection";
import NewArrival from "@/components/pages/home/NewArrival";
import TopBrands from "@/components/pages/home/TopBrands";
import TopCategory from "@/components/pages/home/TopCategory";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productsData } from "@/data/productsData";
import { Funnel } from "lucide-react";

export default function Home() {
  const categories = Array.from(new Set(productsData.map((p) => p.category)));

  const sortOptions = [
    { label: "Default", value: "default" },
    { label: "Price: Low to High", value: "price_low" },
    { label: "Price: High to Low", value: "price_high" },
    { label: "Top Rated", value: "rating" },
    { label: "Newest", value: "newest" },
  ];
  return (
    <div className="space-y-20">
      <HeroSection />
      <TopCategory />
      <TopBrands />
      <BestSelling />
      <NewArrival />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-semibold">
              Explore <span className="text-primary">Our Products</span>
            </p>
            <div className="border-t-9 border-primary mt-3" />
          </div>

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-48 bg-muted/30 border-none h-12 flex items-center justify-start gap-2 px-4 cursor-pointer">
                <Funnel size={18} />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48 bg-muted/30 border-none h-12">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ExploreProducts />
      </div>
    </div>
  );
}

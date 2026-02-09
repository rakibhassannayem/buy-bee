import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productsData } from "@/data/productsData";
import { Funnel, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

const ExploreProducts = () => {
  // Get unique categories for filtering
  const categories = Array.from(new Set(productsData.map((p) => p.category)));

  const sortOptions = [
    { label: "Default", value: "default" },
    { label: "Price: Low to High", value: "price_low" },
    { label: "Price: High to Low", value: "price_high" },
    { label: "Top Rated", value: "rating" },
    { label: "Newest", value: "newest" },
  ];

  return (
    <div className="container mx-auto mt-20">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-15">
        {productsData.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="bg-muted h-50 rounded-xl flex flex-col items-center justify-center relative transition-all group-hover:shadow-xl border border-transparent group-hover:border-primary/20 overflow-hidden">
              <img
                src={product?.image}
                alt={product?.title}
                className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {product.discount && (
                <div className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
                  -{product.discount}%
                </div>
              )}
              <Button className="w-full rounded-t-none absolute bottom-0">
                <ShoppingCart />
                Add To Cart
              </Button>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium mt-1 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#DB4444] font-bold text-xl">
                  ${product.price}
                </span>
                <div className="flex items-center gap-1 font-semibold text-muted-foreground ml-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={
                          i < Math.floor(product.rating) ? "#FFAD33" : "none"
                        }
                        className={
                          i < Math.floor(product.rating)
                            ? "text-[#FFAD33]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm">({product.review})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-15">
        <Button className="rounded p-6 cursor-pointer text-lg">View All</Button>
      </div>
    </div>
  );
};

export default ExploreProducts;

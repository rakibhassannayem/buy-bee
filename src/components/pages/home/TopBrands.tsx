import { ArrowLeft, ArrowRight } from "lucide-react";
import laptop from "@/assets/topBrands/img1.png";
import tv from "@/assets/topBrands/img2.jpg";
import phone from "@/assets/topBrands/img3.jpg";
import Image from "next/image";

const TopBrands = () => {
  const brands = [
    {
      id: 1,
      image: laptop,
      subtitle: "10% Off On Hp series",
      color: "#F5D51D",
    },
    {
      id: 2,
      image: tv,
      subtitle: "10% Off On Apple Mackbook series",
      color: "#DA1919",
    },
    {
      id: 3,
      image: phone,
      subtitle: "10% Off On Iphone series",
      color: "#000000",
    },
  ];
  return (
    <div className="container mx-auto px-3 mt-20 border-y-2 py-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">Top Electronic Brands</p>
          <div className="border-t-9 border-primary mt-3" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted-foreground/10 p-3 rounded-full hover:bg-muted-foreground/20 cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="bg-muted-foreground/10 p-3 rounded-full hover:bg-muted-foreground/20 cursor-pointer">
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
        {brands.map((brand) => (
          <div
            className="relative group overflow-hidden rounded-lg"
            key={brand?.id}
          >
            <Image
              src={brand?.image}
              alt={brand?.subtitle}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 border"
            />
            <div
              className="absolute top-1/3 flex items-center justify-center p-4 text-center select-none pointer-events-none"
              style={{ color: brand?.color }}
            >
              <p className="text-2xl font-bold px-4 py-2 rounded-lg">
                {brand?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;

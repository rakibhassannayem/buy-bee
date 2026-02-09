import { ArrowLeft, ArrowRight } from "lucide-react";
import { productsData } from "@/data/productsData";

const TopCategory = () => {
  const colors = [
    "bg-[#BDECF9]",
    "bg-[#F5C90A]",
    "bg-[#CBFEB0]",
    "bg-[#91BEF8]",
    "bg-[#FF974C]",
    "bg-[#F5B2FF]",
  ];

  return (
    <div className="container mx-auto mt-20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-semibold">
            Shop From <span className="text-primary">Top Category</span>
          </p>
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-5">
        {productsData.map((product, index) => (
          <div
            key={product.id}
            className={`${
              colors[index % colors.length]
            } border-none rounded-sm w-full h-30 flex flex-col items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer`}
          >
            {product.icon && <product.icon size={30} className="text-gray-700" />}
            <span className="font-medium text-gray-800">{product?.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
import { Button } from "@/components/ui/button";
import { productsData } from "@/data/productsData";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const ExploreProducts = () => {
  // Get unique categories for filtering

  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-15">
        {productsData.map((product) => (
          <Link
            href={"/details"}
            key={product.id}
            className="group cursor-pointer"
          >
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
          </Link>
        ))}
      </div>

      <div className="flex justify-center my-15">
        <Button className="rounded p-6 cursor-pointer text-lg">View All</Button>
      </div>
    </div>
  );
};

export default ExploreProducts;

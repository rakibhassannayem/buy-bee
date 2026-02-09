import { Button } from "@/components/ui/button";
import Image from "next/image";
import bag from "@/assets/bestSellingImg/bag.png";
import cpuCooler from "@/assets/bestSellingImg/cpuCooler.png";
import gamepad from "@/assets/bestSellingImg/gamepad.png";
import jacket from "@/assets/bestSellingImg/jacket.png";

const BestSelling = () => {
  const bestSellingProducts = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      discount: 20,
      image: bag,
    },
    { id: 2, name: "RGB liquid CPU Cooler", price: 1960, image: cpuCooler },
    { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, image: gamepad },
    { id: 4, name: "Quilted Satin Jacket", price: 750, image: jacket },
  ];

  return (
    <div className="container mx-auto mt-20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-semibold">
            Best <span className="text-primary">Selling Products</span>
          </p>
          <div className="border-t-9 border-primary mt-3" />
        </div>
        <Button className="rounded p-5 cursor-pointer text-lg px-8">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {bestSellingProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="bg-muted h-50 rounded-xl flex items-center justify-center relative transition-all group-hover:shadow-xl border border-transparent group-hover:border-primary/20">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount}%
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium mt-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#DB4444] font-bold text-xl">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-muted-foreground line-through text-sm">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

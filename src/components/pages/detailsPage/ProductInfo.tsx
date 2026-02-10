import React from "react";
import { Star, Truck } from "lucide-react";

interface ProductInfoProps {
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  description: string;
  brand: string;
  keySpecifications: string[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  rating,
  reviewCount,
  price,
  description,
  brand,
  keySpecifications,
}) => {
  return (
    <div className="flex-1 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < rating ? "currentColor" : "none"}
                className={i < rating ? "text-orange-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({reviewCount} Reviews)</span>
          <span className="text-gray-300">|</span>
          <span className="text-green-400 font-medium">In Stock</span>
        </div>
      </div>

      <div className="text-3xl font-semibold text-gray-900">
        $ {price.toFixed(2)}
      </div>

      <div className="space-y-1 text-gray-700">
        <p>{description}</p>
        <p className="font-medium">Brand: {brand}.</p>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          Key Specifications
        </h3>
        <ul className="space-y-1">
          {keySpecifications.map((spec, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <Truck size={36} className="text-gray-800" />
        <div className="flex flex-col">
          <span className="font-bold text-gray-900">Free Delivery</span>
          <button className="text-xs text-gray-600 underline hover:text-black transition-colors text-left">
            Enter your postal code for Delivery Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

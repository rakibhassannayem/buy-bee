import React from "react";

interface ProductImageProps {
  image: string;
  title: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, title }) => {
  return (
    <div className="flex-1">
      <div className="p-8 flex items-center justify-center bg-red-50/25 min-h-120">
        <img src={image} alt={title} className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default ProductImage;

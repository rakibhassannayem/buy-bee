"use client";

import React, { useState } from "react";
import { Minus, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductActions = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("midnight");

  return (
    <div className="space-y-8">
      <div className="pt-8 flex flex-wrap items-center gap-12">
        {/* Quantity */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold">Quantity</span>
          <div className="flex items-center border border-gray-400 rounded overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-gray-100 border-r border-gray-400 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="px-6 font-semibold text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 bg-[#1A73E8] text-white hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Colours */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold">Colours:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedColor("light")}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === "light"
                  ? "border-blue-500"
                  : "border-gray-300"
              } bg-[#D0E1F4]`}
            />
            <button
              onClick={() => setSelectedColor("midnight")}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === "midnight"
                  ? "border-blue-500"
                  : "border-gray-900"
              } bg-black`}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <Button className="rounded px-10">Buy Now</Button>
        <Button className="rounded px-10">Add to Cart</Button>
        <div className="border rounded p-2 cursor-pointer hover:bg-gray-50 transition-colors">
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default ProductActions;

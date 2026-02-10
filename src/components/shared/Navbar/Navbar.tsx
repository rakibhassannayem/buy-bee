"use client"

import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-0">
      <div className="lg:col-span-2 mb-4 lg:mb-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-primary text-white py-3 flex justify-center items-center gap-4 lg:cursor-default"
        >
          All Categories
          <div className="lg:hidden">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
          <div className="hidden lg:block">
            <Menu size={16} />
          </div>
        </button>
        {isOpen && (
          <div className="lg:hidden bg-white border mt-1 rounded-sm shadow-lg overflow-hidden transition-all duration-300">
            {categories.map((category, index) => (
              <button
                key={index}
                className="block px-8 py-3 hover:bg-primary hover:text-white transition-colors text-gray-700 font-medium border-b last:border-b-0"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-12 lg:col-span-10 border-t">
        <div>
          <nav>
            <ul className="flex flex-wrap items-center justify-center lg:justify-between px-4 lg:px-40 py-3 text-primary font-semibold gap-4 lg:gap-0">
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#" className="text-pink-500">
                  Hot Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-pink-500">
                  Combo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-pink-500">
                  Clearence
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

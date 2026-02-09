"use client";

import { ChevronRight, Menu, ChevronDown, ChevronUp } from "lucide-react";
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

const LeftAside = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="border h-full bg-white">
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
      
      <div className={`${isOpen ? "block" : "hidden"} lg:block grid gap-1 my-3`}>
        <Link
          href={"#"}
          className="flex items-center justify-between hover:bg-primary hover:text-white py-2 pl-8 pr-4"
        >
          Women&apos;s Fashion
          <span>
            <ChevronRight size={18} />
          </span>
        </Link>

        <Link
          href={"#"}
          className="flex items-center justify-between hover:bg-primary hover:text-white py-2 pl-8 pr-4"
        >
          Men&apos;s Fashion
          <span>
            <ChevronRight size={18} />
          </span>
        </Link>

        {categories.map((category, index) => (
          <Link
            href={"#"}
            key={index}
            className={"hover:bg-primary hover:text-white py-2 px-8 flex items-center justify-between group"}
          >
            {category}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LeftAside;

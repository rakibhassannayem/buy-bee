"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
  return (
    <aside className="border h-full bg-white">
      <div className={`hidden lg:block grid gap-1 my-3`}>
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
            className={
              "hover:bg-primary hover:text-white py-2 px-8 flex items-center justify-between group"
            }
          >
            {category}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LeftAside;

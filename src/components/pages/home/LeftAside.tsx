import { ChevronRight, Menu } from "lucide-react";
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
    <aside className="col-span-2 border">
      <div className="bg-primary text-white py-3 flex justify-center items-center gap-4">
        All Categories
        <Menu size={16} />
      </div>
      <div className="grid gap-2 my-3">
        <Link
          href={"#"}
          className="flex items-center justify-between hover:bg-primary hover:text-white py-2 pl-8"
        >
          Women&apos;s Fashion{" "}
          <span>
            <ChevronRight />
          </span>
        </Link>

        <Link
          href={"#"}
          className="flex items-center justify-between hover:bg-primary hover:text-white py-2 pl-8"
        >
          Men&apos;s Fashion{" "}
          <span>
            <ChevronRight />
          </span>
        </Link>

        {categories.map((category, index) => (
          <Link
            href={"#"}
            key={index}
            className={"hover:bg-primary hover:text-white py-2 px-8"}
          >
            {category}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LeftAside;

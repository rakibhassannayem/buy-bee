import { Banner } from "@/components/pages/home/Banner";
import LeftAside from "@/components/pages/home/LeftAside";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-0">
      <div className="lg:col-span-2 mb-4 lg:mb-0">
        <LeftAside />
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
                <Link href="#" className="text-pink-500">Hot Offers</Link>
              </li>
              <li>
                <Link href="#" className="text-pink-500">Combo</Link>
              </li>
              <li>
                <Link href="#" className="text-pink-500">Clearence</Link>
              </li>
            </ul>
          </nav>
          <Banner />
        </div>
      </div>
    </div>
  );
}

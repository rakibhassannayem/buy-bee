import { Banner } from "@/components/pages/home/Banner";
import LeftAside from "@/components/pages/home/LeftAside";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <LeftAside />
      <div className="col-span-10 border boreder-primary">
        <div>
          <nav>
            <ul className="flex items-center justify-between px-40 py-3 text-primary font-semibold border">
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">Hot Offers</Link>
              </li>
              <li>
                <Link href="#">Combo</Link>
              </li>
              <li>
                <Link href="#">Clearence</Link>
              </li>
            </ul>
          </nav>
          <Banner />
        </div>
      </div>
    </div>
  );
}

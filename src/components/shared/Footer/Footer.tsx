import Image from "next/image";
import playStore from "@/assets/playstore.png";
import appStore from "@/assets/appstore.png";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-primary text-white p-10">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="pb-5">
            <Logo />
          </div>
          <p>
            BuyeBee is your one-stop destination for all electronics, fashion,
            and lifestyle products. We connect quality sellers with smart buyers
            — fast, secure, and reliable shopping.
          </p>
          <h2 className="text-2xl font-bold mt-4">Check Our App on</h2>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={playStore}
              alt="playStore"
              width={110}
              height={100}
              className="cursor-pointer hover:shadow-2xl shadow-black"
            />
            <Image
              src={appStore}
              alt="appStore"
              width={110}
              height={100}
              className="cursor-pointer hover:shadow-2xl shadow-black"
            />
          </div>
        </div>

        <div className="sm:ml-10">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="text-sm list-disc ml-6 mt-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Customer Support</h3>
          <ul className="text-sm list-disc ml-6 mt-4">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Retrun Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Contact & Follow Us</h3>
          <div className="text-sm ml-6 mt-4">
            <p>Email: support@buybee.com</p>
            <p>Phone: +8801XXXXXXXX</p>
            <p>Address: support@buybee.com</p>
          </div>
        </div>
      </div>
      <hr className="container mx-auto my-5" />
      <p className="text-center text-sm">© 2025 BuyBee. All rights reserved.</p>
    </div>
  );
};

export default Footer;

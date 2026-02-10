import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  ShoppingCart,
  Twitter,
  User,
  Search,
} from "lucide-react";
import Logo from "../Logo/Logo";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-primary text-white py-4.5">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <span>✉️ Email: support@buybee.com</span>
          <div className="flex items-center gap-3">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 py-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="text-primary">
          <Logo />
        </div>

        <div className="md:w-2xl lg:w-4xl">
          <Field>
            <InputGroup className="bg-primary/10">
              <InputGroupInput
                id="input-group-url"
                placeholder="Search Items here........"
              />
              <InputGroupAddon align="inline-end">
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center">
            <User size={20} />
            <Link
              href={"/register"}
              className="flex items-center gap-1 hover:border-b-2 border-primary"
            >
              Sign Up
            </Link>
            /
            <Link
              href={"/login"}
              className="flex items-center gap-1 hover:border-b-2 border-primary"
            >
              Sign In
            </Link>
          </div>

          <Link
            href={"/cart"}
            className="flex items-center gap-1 hover:border-b-2 border-primary"
          >
            <ShoppingCart size={20} />
            Cart
          </Link>
          <Heart size={20} />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="my-20 flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg h-120 space-y-6 bg-primary/10 p-10">
        {/* Header */}
        <div className="space-y-5">
          <h1 className="text-4xl text-gray-900">Login</h1>
          <p className="">Enter your information</p>
        </div>

        {/* Form */}
        <form className="max-w-xs">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="h-11 w-full outline-none m-0 border-b-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-11 w-full outline-none m-0 border-b-2 mt-5"
          />

          <div className="flex justify-between items-center mt-5">
            <Button className="rounded">
              Log In
            </Button>
            <Link href={"#"} className="text-red-500">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

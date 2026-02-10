import Link from "next/link";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
  return (
    <div className="my-20 flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xs space-y-6">
        {/* Header */}
        <div className="space-y-5">
          <h1 className="text-4xl text-gray-900">Create an account</h1>
          <p className="">Enter your information</p>
        </div>

        {/* Form */}
        <form className="">
          <input
            type="text"
            placeholder="Name"
            className="h-11 w-full outline-none m-0 border-b-2"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="h-11 w-full outline-none m-0 border-b-2 mt-5"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-11 w-full outline-none m-0 border-b-2 mt-5"
          />

          <Button className="w-full h-11 text-base mt-5">Create Account</Button>
        </form>

        {/* Google Sign Up */}
        <Button
          variant="outline"
          className="w-full h-11 flex items-center gap-2"
        >
          <GoogleIcon />
          Sign up with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Already have account?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 text-gray-900"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

/* Google Icon */
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.2 0 5.4 1.4 6.6 2.6l4.5-4.5C32.2 4.6 28.4 3 24 3 14.7 3 6.9 8.8 3.9 16.5l5.6 4.3C11 15.1 16.9 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.8c-.3 2-1.6 5-4.6 7l7.1 5.5c4.1-3.8 6.2-9.3 6.2-16.1z"
      />
      <path
        fill="#FBBC05"
        d="M9.5 28.8c-.4-1.2-.6-2.5-.6-3.8s.2-2.6.6-3.8l-5.6-4.3C2.6 19.3 2 21.6 2 25s.6 5.7 1.9 8.1l5.6-4.3z"
      />
      <path
        fill="#34A853"
        d="M24 47c6.5 0 12-2.1 16-5.7l-7.1-5.5c-2 1.4-4.6 2.3-8.9 2.3-7.1 0-13-4.6-15.1-11l-5.6 4.3C6.9 39.2 14.7 47 24 47z"
      />
    </svg>
  );
}

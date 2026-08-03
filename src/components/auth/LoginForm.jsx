import { Link } from "react-router-dom";
import PrimaryButton from "@/components/ui/PrimaryButton";

function LoginForm() {
  return (
    <form className="space-y-5">

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border p-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border p-3"
      />

      <div className="text-right">
        <Link
          to="/forgot-password"
          className="text-sm text-orange-500"
        >
          Forgot Password?
        </Link>
      </div>

      <PrimaryButton className="w-full">
        Login
      </PrimaryButton>

      <p className="text-center text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-orange-500"
        >
          Sign Up
        </Link>
      </p>

    </form>
  );
}

export default LoginForm;
import { Link } from "react-router-dom";
import PrimaryButton from "@/components/ui/PrimaryButton";

function SignupForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-xl border p-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border p-3"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-xl border p-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border p-3"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full rounded-xl border p-3"
      />

      <select className="w-full rounded-xl border p-3">
        <option>Student</option>
        <option>Landlord</option>
      </select>

      <PrimaryButton className="w-full">
        Create Account
      </PrimaryButton>

      <p className="text-center text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-orange-500">
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;
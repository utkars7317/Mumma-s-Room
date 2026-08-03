import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

function Signup() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Mumma's Room today"
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
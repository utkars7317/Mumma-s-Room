import { cn } from "@/lib/utils";

function PrimaryButton({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-50",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
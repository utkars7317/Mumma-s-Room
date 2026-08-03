import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "@/components/ui/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { NAV_LINKS } from "@/data/navigation";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="font-medium text-slate-700 transition hover:text-orange-500"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <PrimaryButton variant="outline">
            Login
          </PrimaryButton>

          <PrimaryButton>
            Sign Up
          </PrimaryButton>
        </div>

        {/* Mobile Icon */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;
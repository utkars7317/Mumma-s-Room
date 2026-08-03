import { Menu, X, Home, Building2, Info, Phone, User } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: Home },
    { name: "Find Rooms", icon: Building2 },
    { name: "About", icon: Info },
    { name: "Contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center text-white text-xl">
            🏠
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Mumma's Room
            </h1>

            <p className="text-xs text-gray-500">
              Home Away From Home
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition font-medium"
            >
              <item.icon size={18} />
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-5 py-2 rounded-xl border border-orange-500 text-orange-500 hover:bg-orange-50 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-6 py-5 flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center gap-3 text-gray-700"
              >
                <item.icon size={18} />
                {item.name}
              </a>
            ))}

            <button className="w-full py-3 rounded-xl border border-orange-500 text-orange-500">
              Login
            </button>

            <button className="w-full py-3 rounded-xl bg-orange-500 text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
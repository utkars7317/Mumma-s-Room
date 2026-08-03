function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-orange-600">
            Mumma's Room
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">Find Rooms</li>
          <li className="hover:text-orange-600 cursor-pointer">List Your Room</li>
          <li className="hover:text-orange-600 cursor-pointer">About</li>
          <li className="hover:text-orange-600 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-orange-500 text-orange-600 hover:bg-orange-50">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
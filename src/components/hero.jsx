function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            🏠 Trusted Student Accommodation
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Find Your
            <span className="text-orange-500"> Perfect Room </span>
            Without the Stress
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Discover verified rooms, PGs, hostels, and shared accommodations
            near your college or workplace.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold">
              Explore Rooms
            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
              List Your Room
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
            alt="Room"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
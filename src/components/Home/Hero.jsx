import { Search, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🏠 Trusted by 10,000+ Students
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
            Find Your Perfect
            <span className="block text-orange-500">
              Room Near Your College
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Search verified PGs, hostels and rental rooms with transparent
            pricing, modern amenities and trusted landlords.
          </p>

          <div className="mt-8 flex gap-4">
            <PrimaryButton>
              Explore Rooms
            </PrimaryButton>

            <PrimaryButton variant="outline">
              Become a Landlord
            </PrimaryButton>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <Search className="text-orange-500" />
            <input
              className="w-full border-none outline-none"
              placeholder="Search city or college..."
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-orange-500" />
                <span>Kanpur</span>
              </div>

              <span className="font-semibold">320 Rooms</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" />
                <span>Verified Listings</span>
              </div>

              <span className="font-semibold">100%</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
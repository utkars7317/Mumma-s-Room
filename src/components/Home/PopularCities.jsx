import { CITIES } from "@/data/cities";
import { MapPin } from "lucide-react";

function PopularCities() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Popular Cities
          </h2>

          <p className="mt-3 text-slate-600">
            Discover verified rooms in India's most popular student cities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => (
            <div
              key={city.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={city.image}
                alt={city.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {city.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  {city.rooms} Rooms Available
                </div>

                <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularCities;
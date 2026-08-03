import { Heart, MapPin, Star } from "lucide-react";
import { ROOMS } from "@/data/rooms";

function FeaturedRooms() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Rooms
          </h2>

          <p className="mt-3 text-slate-600">
            Handpicked verified rooms for students.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-60 w-full object-cover"
                />

                <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
                  <Heart size={20} />
                </button>
              </div>

              <div className="p-6">

                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">
                    {room.title}
                  </h3>

                  <span className="font-bold text-orange-500">
                    {room.price}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-500">

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {room.city}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {room.rating}
                  </div>

                </div>

                <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedRooms;
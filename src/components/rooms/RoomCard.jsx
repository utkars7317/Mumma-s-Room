import { Heart, MapPin, Star } from "lucide-react";

function RoomCard({ room }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <img
          src={room.image}
          alt={room.title}
          className="h-56 w-full object-cover"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            room.available
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {room.available ? "Available" : "Occupied"}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{room.title}</h3>

          <span className="font-bold text-orange-500">
            ₹{room.price}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {room.city}
          </div>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            {room.rating}
          </div>
        </div>

        <p className="mt-4 rounded-full bg-orange-100 px-3 py-1 text-center text-sm font-medium text-orange-600">
          {room.type}
        </p>

        <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
          View Details
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
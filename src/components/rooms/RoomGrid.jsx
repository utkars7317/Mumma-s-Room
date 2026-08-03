import RoomCard from "./RoomCard";
import { ROOMS } from "@/data/rooms";

function RoomGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {ROOMS.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

export default RoomGrid;
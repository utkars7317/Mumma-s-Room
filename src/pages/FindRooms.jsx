import Navbar from "@/components/home/Navbar";
import SearchFilters from "@/components/rooms/SearchFilters";
import FilterSidebar from "@/components/rooms/FilterSidebar";
import RoomGrid from "@/components/rooms/RoomGrid";

function FindRooms() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen py-10">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="mb-2 text-4xl font-bold">
            Find Your Perfect Room
          </h1>

          <p className="mb-8 text-slate-500">
            Browse verified rooms across India.
          </p>

          <SearchFilters />

          <div className="mt-8 grid gap-8 lg:grid-cols-4">

            <FilterSidebar />

            <div className="lg:col-span-3">
              <RoomGrid />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default FindRooms;
function SearchFilters() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <input
        type="text"
        placeholder="Search by city, college or locality..."
        className="w-full rounded-xl border p-3 outline-none focus:border-orange-500"
      />
    </div>
  );
}

export default SearchFilters;
import { Home } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-md">
        <Home size={22} />
      </div>

      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
          Mumma's Room
        </h1>

        <p className="text-xs text-slate-500">
          Home Away From Home
        </p>
      </div>
    </div>
  );
}

export default Logo;
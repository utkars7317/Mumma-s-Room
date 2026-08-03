import { TESTIMONIALS } from "@/data/testimonials";
import { Star } from "lucide-react";

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Students Say
          </h2>
          <p className="mt-3 text-slate-500">
            Trusted by students across India.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="mb-4 flex">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600">"{item.text}"</p>

              <div className="mt-6">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.college}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
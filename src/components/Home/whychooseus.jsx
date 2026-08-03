import { FEATURES } from "@/data/features";

function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Why Choose Mumma's Room?
          </h2>

          <p className="mt-3 text-slate-500">
            Everything you need to find a safe and comfortable room.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-orange-100 p-4">
                  <Icon className="text-orange-500" size={30} />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
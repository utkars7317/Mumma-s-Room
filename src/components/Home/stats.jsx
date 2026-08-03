import { Users, Building2, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users size={32} />,
    number: "10K+",
    label: "Happy Students",
  },
  {
    icon: <Building2 size={32} />,
    number: "5K+",
    label: "Verified Rooms",
  },
  {
    icon: <MapPin size={32} />,
    number: "100+",
    label: "Cities",
  },
  {
    icon: <Star size={32} />,
    number: "4.9",
    label: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:shadow-xl"
          >
            <div className="mb-4 flex justify-center text-orange-500">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold text-slate-900">
              {item.number}
            </h2>

            <p className="mt-2 text-slate-500">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
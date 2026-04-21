import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { label: "Bénéficiaires", value: "2,500+" },
    { label: "Bénévoles", value: "85" },
    { label: "Projets Réalisés", value: "14" },
    { label: "Donateurs", value: "150+" },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100/70 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Target, Users, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Améliorer les conditions de vie des populations les plus vulnérables par des actions ciblées en éducation, santé et nutrition."
    },
    {
      icon: Users,
      title: "Notre Communauté",
      description: "Un réseau de bénévoles passionnés et engagés, unis par une vision commune de solidarité et d'entraide."
    },
    {
      icon: Globe,
      title: "Rayonnement Sénégal",
      description: "Basés au cœur de Thiès, nous étendons notre solidarité pour construire un Sénégal plus fort, un projet à la fois."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">À Propos de Nous</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Une association ancrée au Sénégal
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              L'association TARAR est une organisation à but non lucratif fièrement établie à Thiès. Depuis notre siège de Thiès - Aiglon, nous œuvrons pour le rayonnement social et le bien-être des populations sénégalaises.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-warm-bg hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <value.icon size={30} />
              </div>
              <h4 className="font-serif text-2xl font-bold mb-4">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed italic">
                "{value.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

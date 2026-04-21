import { motion } from 'motion/react';
import { BookOpen, Stethoscope, Carrot, ArrowUpRight } from 'lucide-react';

export default function Actions() {
  const actions = [
    {
      title: "Éducation pour tous",
      category: "Éducation",
      image: "https://picsum.photos/seed/school/600/400",
      icon: BookOpen,
      count: "12 Écoles soutenues"
    },
    {
      title: "Santé Communautaire",
      category: "Santé",
      image: "https://picsum.photos/seed/health/600/400",
      icon: Stethoscope,
      count: "500+ Soins prodigués"
    },
    {
      title: "Surnombre Alimentaire",
      category: "Nutrition",
      image: "https://picsum.photos/seed/food/600/400",
      icon: Carrot,
      count: "200 Familles aidées"
    }
  ];

  return (
    <section id="actions" className="py-24 bg-warm-bg relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] select-none pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0,70 Q25,20 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Nos Projets Actuels</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">
              Chaque action <span className="text-primary italic">compte</span>
            </h3>
          </div>
          <button className="flex items-center gap-2 group text-primary font-bold">
            Voir tous les projets
            <div className="p-2 border-2 border-primary rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={action.image}
                  alt={action.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-bold uppercase">
                    {action.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 text-secondary mb-4">
                  <action.icon size={20} />
                  <span className="text-sm font-semibold">{action.count}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{action.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  Nous mobilisons des ressources pour soutenir les projets locaux qui transforment durablement la vie des bénéficiaires.
                </p>
                <button className="text-sm font-bold flex items-center gap-2 text-slate-400 group-hover:text-primary transition-colors">
                  En savoir plus <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

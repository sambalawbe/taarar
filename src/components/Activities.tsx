import { motion } from 'motion/react';
import { Play, Newspaper, ArrowRight, Calendar } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      id: 1,
      type: 'video',
      title: 'Reportage : L\'impact de TARAR à Thiès',
      description: 'Une immersion au cœur de nos actions quotidiennes et le témoignage des bénéficiaires de l\'association.',
      videoUrl: 'https://www.youtube.com/embed/FQwFlcOLkoo',
      date: 'Avril 2024',
      badge: 'Vidéo'
    },
    {
      id: 4,
      type: 'video',
      title: 'Solidarité en Actions',
      description: 'Découvrez nos interventions sur le terrain et comment votre soutien transforme des vies.',
      videoUrl: 'https://www.youtube.com/embed/JDO-T5HuJYo',
      date: 'Mai 2024',
      badge: 'Vidéo'
    },
    {
      id: 2,
      type: 'article',
      title: 'Distribution de kits alimentaires',
      description: 'Retour sur notre grande opération de solidarité qui a permis de soutenir plus de 100 familles ce mois-ci.',
      image: 'https://picsum.photos/seed/food-care/800/600',
      date: 'Mars 2024',
      badge: 'Article'
    },
    {
      id: 3,
      type: 'article',
      title: 'Nouveau partenariat éducatif',
      description: 'Signature d\'une convention pour la rénovation des salles de classe de l\'école primaire locale.',
      image: 'https://picsum.photos/seed/education-senegal/800/600',
      date: 'Février 2024',
      badge: 'Actualité'
    }
  ];

  return (
    <section id="activites" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Actualités & Médias</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nos dernières <span className="text-secondary italic">activités</span>
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {activities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                {item.type === 'video' ? (
                  <iframe
                    className="w-full h-full"
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${item.type === 'video' ? 'bg-red-500/90 text-white' : 'bg-secondary/90 text-white'}`}>
                    {item.type === 'video' ? <Play className="inline-block w-3 h-3 mr-1 fill-current" /> : <Newspaper className="inline-block w-3 h-3 mr-1" />}
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar size={14} />
                  <span>Le {item.date}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed italic">
                  "{item.description}"
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                    {item.type === 'video' ? 'Regarder le reportage' : 'Lire la suite'}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

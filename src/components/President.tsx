import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function President() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/president.jpg"
                alt="Président de TARAR"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://picsum.photos/seed/leader/800/1000';
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full z-0 opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-full z-0 opacity-10 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6 px-4 py-2 bg-secondary/10 rounded-full">
              Le Mot du Président
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              « Porter l'action du cœur au-delà des <span className="text-primary italic">frontières</span> »
            </h2>
            
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 -z-10" />
              <p className="text-lg text-slate-600 leading-relaxed italic pr-8">
                "Notre engagement à Thiès n'est pas seulement une mission humanitaire, c'est un devoir fraternel. Chaque sourire retrouvé sur le visage d'un enfant ou d'une famille est notre plus belle récompense. Ensemble, avec l'association TARAR, nous construisons un avenir de dignité et d'espoir pour Thiès - Aiglon."
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-slate-900 font-serif">Amadou Fall</span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Président - Fondateur de TARAR</span>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="h-1 w-20 bg-primary rounded-full" />
              <div className="h-1 w-8 bg-secondary rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

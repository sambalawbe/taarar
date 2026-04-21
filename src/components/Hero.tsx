import { motion } from 'motion/react';
import { ChevronRight, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/5">
              <HeartHandshake className="w-4 h-4" />
              <span>Thiés - Aiglon, Sénégal</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              L'action du <span className="text-primary italic">cœur</span> au service de <span className="text-secondary">Thiés</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Fièrement établie à Thiès, TARAR mobilise la solidarité sénégalaise pour apporter un soutien concret et durable aux communautés de Thiés - Aiglon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20"
              >
                Nous rejoindre
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <button className="border-2 border-slate-200 hover:border-primary hover:text-primary px-8 py-4 rounded-full font-bold transition-all">
                Découvrir nos projets
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-700">
              <img
                src="/Hero.jpg"
                alt="Action humanitaire TARAR"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/humanity/800/1000";
                }}
              />
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-3 rounded-3xl shadow-xl z-20 border border-slate-100 hidden sm:block"
            >
              <img 
                src="/Logo.png" 
                alt="Logo Floating" 
                className="w-20 h-auto"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

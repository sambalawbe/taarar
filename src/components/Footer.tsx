import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
                <img 
                  src="/logo.png" 
                  alt="TARAR Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                  onError={(e) => {
                    e.currentTarget.src = 'https://picsum.photos/seed/charity-logo/200/200';
                    e.currentTarget.classList.remove('brightness-0', 'invert');
                  }}
                />
                <div className="flex flex-col border-l border-white/20 pl-3">
                  <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">TARAR</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] font-medium text-secondary -mt-0.5">L'action du cœur</span>
                </div>
              </div>
            <p className="text-sm leading-relaxed mb-8 opacity-70">
              Association humanitaire engagée pour le développement de Thiés - Aiglon et le bien-être de ses populations.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#actions" className="hover:text-primary transition-colors">Nos Actions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Devenir Bénévole</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Thiés - Aiglon, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+221 77 608 09 08</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contact@tarar-asso.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8">Newsletter</h4>
            <p className="text-xs mb-6 opacity-70">Recevez les actualités de nos projets directement par email.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-slate-800 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary transition-all pr-12"
              />
              <button className="absolute right-2 top-1.5 h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest opacity-50">
          <p>© 2026 Association TARAR - Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#">Mentions Légales</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight({ size }: { size: number }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>;
}

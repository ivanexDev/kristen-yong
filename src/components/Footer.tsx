import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const links = [
    { app: "Instagram", img: "/icons/instagram.png", url: "https://www.instagram.com/yongkristen.author/" },
    { app: "TikTok", img: "/icons/tiktok.webp", url: "https://www.tiktok.com/@danmei.kristenyong" },
    { app: "Web Novels", img: "/icons/webnovel.webp", url: "https://www.webnovel.com/profile/4503309999" },
    { app: "Royal Road", img: "/icons/royalroad.webp", url: "https://www.royalroad.com/fiction/123560/the-frost-and-the-flame-bl" },
    { app: "ko-fi", img: "/icons/ko-fi.webp", url: "https://ko-fi.com/yongk_author/10" },
  ];

  return (
    <footer id="links" className="bg-black text-hanji-muted py-24 px-8 border-t border-gold/20 scroll-mt-48">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-asiatiyca text-4xl text-gold tracking-[0.2em]">Kristen Yong</h2>
            <p className="font-serif text-sm leading-relaxed max-w-xs opacity-80">
              Explorando las verdades más profundas a través del hielo, el fuego y el silencio de la fantasía danmei.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-cinnabar text-xs font-bold uppercase tracking-[0.3em]">Navegación</h3>
            <ul className="space-y-4 text-sm font-serif">
              <li><a href="#bio" className="hover:text-gold transition-colors">Biografía</a></li>
              <li><a href="#characters" className="hover:text-gold transition-colors">Personajes</a></li>
              <li><a href="/system" className="hover:text-gold transition-colors">System Cultivation</a></li>
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-6">
            <h3 className="text-cinnabar text-xs font-bold uppercase tracking-[0.3em]">Conexiones</h3>
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                <Link key={link.url} href={link.url} className="group" title={link.app}>
                  <img 
                    src={link.img} 
                    alt={link.app} 
                    className="h-6 w-auto grayscale brightness-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  />
                </Link>
              ))}
            </div>
            <a href="mailto:kristencarcamo@gmail.com" className="block text-sm font-serif hover:text-gold transition-colors">
              kristencarcamo@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold">
          <span className="text-gold/60">© 2025 Kristen Yong. Todos los derechos reservados.</span>
          <span className="text-gold/40">
            Diseño por <a href="https://ivanpereira.dev" className="text-gold/60 hover:text-gold transition-colors">IvanexDev</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  const links = [
    { app: "Instagram", img: "/Icons/instagram.png", url: "https://www.instagram.com/yongkristen.author/" },
    { app: "TikTok", img: "/Icons/tiktok.webp", url: "https://www.tiktok.com/@danmei.kristenyong" },
    { app: "Web Novels", img: "/Icons/webnovel.webp", url: "https://www.webnovel.com/profile/4503309999" },
    { app: "Royal Road", img: "/Icons/royalroad.webp", url: "https://www.royalroad.com/fiction/123560/the-frost-and-the-flame-bl" },
    { app: "ko-fi", img: "/Icons/ko-fi.webp", url: "https://ko-fi.com/yongk_author/10" },
  ];

  return (
    <footer id="links" className="bg-black text-hanji-muted py-24 px-8 border-t border-gold/20 scroll-mt-48">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-asiatiyca text-4xl text-gold tracking-[0.2em]">Kristen Yong</h2>
            <p className="font-serif text-sm leading-relaxed max-w-xs opacity-80">
              Exploring the deepest truths through ice, fire, and the silence of danmei fantasy.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-cinnabar text-xs font-bold uppercase tracking-[0.3em]">Navigation</h3>
            <ul className="space-y-4 text-sm font-serif">
              <li><Link href="/#bio" className="hover:text-gold transition-colors">Biography</Link></li>
              <li><Link href="/#characters" className="hover:text-gold transition-colors">Characters</Link></li>
              <li><Link href="/chronicles" className="hover:text-gold transition-colors">Chronicles</Link></li>
              <li><Link href="/system" className="hover:text-gold transition-colors">System Cultivation</Link></li>
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-6">
            <h3 className="text-cinnabar text-xs font-bold uppercase tracking-[0.3em]">Connections</h3>
            <div className="flex flex-wrap gap-6">
              {links.map((link) => (
                <Link key={link.url} href={link.url} className="group relative w-6 h-6" title={link.app}>
                  <Image 
                    src={link.img} 
                    alt={link.app} 
                    fill
                    className="object-contain grayscale brightness-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    sizes="24px"
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
          <span className="text-gold/60">© 2025 Kristen Yong. All rights reserved.</span>
          <span className="text-gold/40">
            Design by <a href="https://ivanpereira.dev" className="text-gold/60 hover:text-gold transition-colors">IvanexDev</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

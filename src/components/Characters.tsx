import React from "react";
import { CHARACTERS } from "@/data/characters.data";

export const Characters = () => {
  return (
    <section id="characters" className="bg-ink py-24 px-8 relative overflow-hidden scroll-mt-48">
      {/* Background decoration: Celestial/Mist effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-7xl font-asiatiyca text-gold tracking-widest mb-4">
            Dramatis Personae
          </h2>
          <div className="w-24 h-[1px] bg-cinnabar/60" />
          <p className="mt-6 text-gold/60 font-serif italic text-lg max-w-lg">
            Those who walk the frozen halls of Baekjoseon, where every shadow hides a secret and every breath is a vow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {CHARACTERS.map((char, index) => (
            <div 
              key={char.name} 
              className={`flex flex-col lg:flex-row gap-8 group items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Character Image with traditional frame */}
              <div className="relative flex-shrink-0 w-full lg:w-72">
                <div className="absolute inset-0 border border-gold/10 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative border-traditional aspect-[3/4] overflow-hidden bg-black/40">
                  <img 
                    src={char.img} 
                    alt={char.name} 
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Vertical label (Signature Element) */}
                <div className="absolute -right-4 top-10 flex flex-col items-center pointer-events-none">
                   <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-cinnabar font-bold bg-ink py-4 px-1 border border-cinnabar/20 shadow-lg">
                    {char.title}
                  </span>
                </div>
              </div>

              {/* Character Details on Hanji-like surface */}
              <div className="flex-1 hanji-surface p-10 relative border-traditional">
                <div className="mb-6">
                  <h3 className="text-4xl font-asiatiyca text-ink mb-1">{char.name}</h3>
                  <p className="text-cinnabar font-bold text-xs uppercase tracking-[0.2em]">{char.aliases}</p>
                </div>
                
                <div className="space-y-4 text-sm leading-relaxed font-serif text-ink/80">
                  <p className="line-clamp-6 group-hover:line-clamp-none transition-all duration-500 cursor-help">
                    {char.profile}
                  </p>
                  
                  <div className="pt-6 border-t border-ink/10 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-wider font-bold opacity-70">
                    <div><span className="text-cinnabar mr-2">Age:</span> {char.age}</div>
                    <div><span className="text-cinnabar mr-2">Origin:</span> {char.origin}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <blockquote className="border-l-2 border-gold pl-4 py-1 italic text-ink/60 text-sm">
                    &quot;{char.quote}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

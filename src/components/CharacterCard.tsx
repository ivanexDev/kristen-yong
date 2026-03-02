import React from "react";
import Image from "next/image";
import Link from "next/link";
import { normalizeName } from "@/utils/normalizeName";

interface CharacterCardProps {
  char: {
    name: string;
    img: string;
    title: string;
    aliases: string;
    age: number;
    appearance: string;
    origin: string;
    affiliations: string;
    profile: string;
    quote: string;
  };
  index: number;
}

export const CharacterCard = ({ char, index }: CharacterCardProps) => {
  return (
    <Link 
      href={`/character/${normalizeName(char.name)}`}
      className={`flex flex-col lg:flex-row gap-8 group items-start relative cursor-pointer ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Character Image with traditional frame */}
      <div className="relative flex-shrink-0 w-full lg:w-72 z-20">
        <div className="absolute inset-0 border border-gold/10 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
        <div className="relative border-traditional aspect-[3/4] overflow-hidden bg-black/40 shadow-xl">
          <Image 
            src={char.img} 
            alt={char.name} 
            fill
            sizes="(max-width: 1024px) 100vw, 288px"
            className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </div>
        {/* Vertical label (Signature Element) */}
        <div className="absolute -right-4 top-10 flex flex-col items-center pointer-events-none z-30">
            <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-cinnabar font-bold bg-ink py-4 px-1 border border-cinnabar/20 shadow-lg">
            {char.title}
          </span>
        </div>
      </div>

      {/* Character Details Wrapper (Fixed height spacer) */}
      <div className="flex-1 relative w-full lg:min-h-[420px]"> 
        {/* Floating Card Content */}
        <div className="hanji-surface p-10 border-traditional lg:absolute lg:top-0 lg:left-0 lg:right-0 h-fit z-10 group-hover:z-50 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="mb-6">
            <h3 className="text-4xl font-asiatiyca text-ink mb-1 group-hover:text-cinnabar transition-colors">{char.name}</h3>
            <p className="text-cinnabar font-bold text-xs uppercase tracking-[0.2em]">{char.aliases}</p>
          </div>
          
          <div className="space-y-4 text-sm leading-relaxed font-serif text-ink/80">
            <p className="line-clamp-6 group-hover:line-clamp-none transition-all duration-500">
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
          <div className="mt-6 flex justify-end">
             <span className="text-[10px] text-cinnabar uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">Read Full Dossier <span>→</span></span>
          </div>
        </div>
      </div>
    </Link>
  );
};
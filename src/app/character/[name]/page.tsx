import { CHARACTERS } from "@/data/characters.data";
import { normalizeName } from "@/utils/normalizeName";
import React from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ name: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { name } = await params;

  const characterData = CHARACTERS.find((char) => {
    return normalizeName(char.name) === name;
  });

  if (!characterData) return null;

  return (
    <main className="min-h-screen bg-ink py-24 px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/bg2.png')] bg-cover bg-center" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Link 
          href="/#characters" 
          className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors text-xs uppercase tracking-widest mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Records
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Character Image */}
          <div className="flex-1 w-full lg:sticky lg:top-32">
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/10 translate-x-4 translate-y-4" />
              <div className="relative border-traditional overflow-hidden bg-black shadow-2xl aspect-[3/4]">
                <img 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000" 
                  src={characterData.img} 
                  alt={characterData.name} 
                />
              </div>
            </div>
          </div>

          {/* Character Dossier */}
          <div className="flex-[1.5] space-y-12">
            <div className="hanji-surface p-12 border-traditional relative">
              {/* Signature element: Imperial Stamp style label */}
              <div className="absolute -right-2 -top-2 bg-cinnabar text-hanji py-4 px-1 [writing-mode:vertical-rl] text-[10px] font-bold tracking-widest uppercase border border-white/20">
                Official Dossier
              </div>

              <header className="mb-10">
                <h1 className="text-6xl font-asiatiyca text-ink mb-2">{characterData.name}</h1>
                <p className="text-cinnabar font-bold uppercase tracking-[0.3em] text-sm">{characterData.title}</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-serif text-sm">
                <div className="space-y-6">
                  <div className="border-b border-ink/10 pb-2">
                    <span className="text-[10px] uppercase tracking-wider text-ink/40 block mb-1">Aliases</span>
                    <p className="text-ink font-bold italic">{characterData.aliases}</p>
                  </div>
                  <div className="border-b border-ink/10 pb-2">
                    <span className="text-[10px] uppercase tracking-wider text-ink/40 block mb-1">Age</span>
                    <p className="text-ink">{characterData.age} Winters</p>
                  </div>
                  <div className="border-b border-ink/10 pb-2">
                    <span className="text-[10px] uppercase tracking-wider text-ink/40 block mb-1">Origin</span>
                    <p className="text-ink">{characterData.origin}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-ink/10 pb-2">
                    <span className="text-[10px] uppercase tracking-wider text-ink/40 block mb-1">Affiliations</span>
                    <p className="text-ink">{characterData.affiliations}</p>
                  </div>
                  <div className="border-b border-ink/10 pb-2">
                    <span className="text-[10px] uppercase tracking-wider text-ink/40 block mb-1">Appearance</span>
                    <p className="text-ink italic">{characterData.appearance}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <span className="text-[10px] uppercase tracking-wider text-ink/40 block">History & Profile</span>
                <p className="font-serif leading-relaxed text-ink/80 text-lg first-letter:text-4xl first-letter:font-asiatiyca first-letter:float-left first-letter:mr-3 first-letter:text-cinnabar">
                  {characterData.profile}
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-ink/20 text-center">
                <blockquote className="text-2xl font-asiatiyca text-ink italic leading-tight">
                  &quot;{characterData.quote}&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

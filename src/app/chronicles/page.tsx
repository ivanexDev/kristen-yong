import { CHRONICLES } from "@/data/chronicles.data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Chronicles & Decrees | Kristen Yong",
  description: "Official announcements, behind-the-scenes writing process, and archives for The Frost and The Flame.",
};

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-ink py-24 px-8 relative scroll-mt-48 overflow-visible">
      {/* Background decoration: Celestial/Mist effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <h1 className="text-7xl font-asiatiyca text-gold tracking-widest mb-6">
            Chronicles & Decrees
          </h1>
          <div className="w-24 h-[1px] bg-cinnabar/60" />
          <p className="mt-8 text-gold/60 font-serif italic text-lg max-w-lg">
            Dispatches from the White Palace. Announcements, reflections, and the embers of stories yet to be told.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {CHRONICLES.map((chronicle) => (
            <Link 
              key={chronicle.slug}
              href={`/chronicles/${chronicle.slug}`}
              className="group relative flex flex-col md:flex-row gap-8 items-start cursor-pointer"
            >
              {/* The "Seal" and Date - Left Column */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:w-48 flex-shrink-0 md:pt-4">
                <div className="flex flex-col items-center">
                  <span className="[writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-hanji font-bold bg-cinnabar py-2 px-4 md:py-6 md:px-2 shadow-lg border border-white/10">
                    {chronicle.category}
                  </span>
                </div>
                <div className="text-gold/40 font-serif italic text-sm border-l border-gold/20 pl-4 md:border-l-0 md:pl-0 md:border-t md:pt-4 md:mt-2">
                  {chronicle.date}
                </div>
              </div>

              {/* The "Scroll" Content - Right Column */}
              <div className="flex-1 relative w-full">
                <div className="absolute inset-0 border border-gold/10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none" />
                
                <article className="relative border-traditional hanji-surface p-8 md:p-12 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500 flex flex-col md:flex-row gap-8">
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-asiatiyca text-ink mb-6 group-hover:text-cinnabar transition-colors duration-300 leading-tight">
                        {chronicle.title}
                      </h2>
                      <p className="font-serif text-ink/80 text-lg leading-relaxed italic border-l-2 border-gold/40 pl-6 mb-8">
                        {chronicle.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-cinnabar font-bold group-hover:tracking-[0.4em] transition-all duration-500">
                        Unfurl the Scroll
                      </span>
                      <span className="text-cinnabar transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>

                  {chronicle.image && (
                    <div className="hidden lg:block relative w-40 h-40 flex-shrink-0 border border-ink/10 rounded-sm overflow-hidden">
                      <Image 
                        src={chronicle.image} 
                        alt="" 
                        fill
                        className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        sizes="160px"
                      />
                    </div>
                  )}
                </article>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
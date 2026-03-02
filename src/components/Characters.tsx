import React from "react";
import { CHARACTERS } from "@/data/characters.data";
import { CharacterCard } from "./CharacterCard";

export const Characters = () => {
  return (
    <section id="characters" className="bg-ink py-24 px-8 relative scroll-mt-48 overflow-visible">
      {/* Background decoration: Celestial/Mist effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto w-full">
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
            <CharacterCard key={char.name} char={char} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

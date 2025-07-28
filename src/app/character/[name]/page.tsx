import { CHARACTERS } from "@/data/characters.data";
import { normalizeName } from "@/utils/normalizeName";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: Promise<{ name: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { name } = await params;

  const characterData = CHARACTERS.find((char) => {
    return normalizeName(char.name) === name;
  });

  return (
    <>
      <section
        id="characters"
        className="w-full p-8 bg-black text-[#D2C69Cff] h-full"
      >
        <div className="text-black max-w-[1440px] mx-auto w-full flex flex-row justify-center items-center flex-wrap">
          <div className="text-2xl flex flex-col w-[500px] text-white-glow">
            <h1>Name: {characterData?.name}</h1>
            <span>Title: {characterData?.title}</span>
            <span>Aliases: {characterData?.aliases}</span>
            <span>Age: {characterData?.age}</span>
            <p>Appearance: {characterData?.appearance}</p>
            <p>Origin: {characterData?.origin}</p>
            <p>Affiliations: {characterData?.affiliations}</p>
            <p>Profile: {characterData?.profile}</p>
            <p>Quote: &quot;{characterData?.quote}&quot;</p>
          </div>
          <div className="flex relative w-[433px] h-[650px]">
            <Image
              className="object-contain"
              src={characterData!.img}
              alt={characterData?.name || "character image"}
              fill
              sizes="(max-width: 768px) 100vw, 433px"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

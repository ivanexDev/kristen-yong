import React from "react";
import Image from "next/image";

export const Book = () => {
  return (
    <section className="w-screen bg-blue-500 p-8 book-section">
      <div className="w-full flex justify-center items-center flex-wrap">
        <p className="slide-right text-5xl w-[400px] text-white font-asiatiyca">
          Even in the silence of snow, your eyes speak the words i&apos;ve
          waited lifetimes to hear.
        </p>

        <div className="slide-left">
          <div className="flex relative w-[450px] h-[650px] mx-12 max-[965px]:ml-0">
            <Image
              className="object-contain"
              src={"/book.webp"}
              alt={"book cover image"}
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

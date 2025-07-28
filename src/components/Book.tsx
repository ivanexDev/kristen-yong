import React from "react";
import Image from "next/image";

export const Book = () => {
  return (
    <section className="w-full bg-blue-500 book-section">
      <div className="w-full flex justify-center items-center flex-wrap p-8">
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


    // <footer className="w-full bg-black text-white">
    //   <div className="max-w-[1440px] mx-auto px-4 py-8 text-center text-sm"></div>
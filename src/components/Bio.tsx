import React from "react";
import Image from "next/image";

export const Bio = () => {
  return (
    <section id="bio" className="w-screen p-8 bg-[#0C2C3Dff]">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-center flex-wrap">
        <div className="text-[#D2C69Cff]">
          <h2 className="text-6xl mb-6 border-b font-asiatiyca">Bio</h2>
          <p className="max-w-[500px] text-xl mb-3.5">
            <span className="text-3xl">Kristen Yong</span> is a Latin American
            writer passionate about storytelling, mythology, and emotional
            worldbuilding. She is the author of The Frost and The Flame, a
            dramatic danmei fantasy set in an eternal winter kingdom inspired by
            Joseon Korea. With lyrical prose and intense character-driven plots,
            her work blends romance, political intrigue, and spiritual folklore.
            Her stories explore themes of identity, power, and longing — often
            through flawed heroes facing impossible choices. Kristen believes
            that fantasy is a mirror to our deepest truths, and she writes to
            connect with readers who seek beauty in darkness and meaning in
            silence. Currently, she is expanding her reach to international
            platforms such as Tapas and Webnovel, where she shares her stories
            in English for a global audience.
          </p>
        </div>

        <div className="flex relative w-[450px] h-[450px] lg:mx-12">
          <Image
            className="object-contain"
            src={"/author.webp"}
            alt={"author image"}
            fill
            // priority
          />
        </div>
      </div>
    </section>
  );
};

import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Links = () => {
  const links = [
    {
      app: "Instagram",
      img: "/instagram.png",
      url: "https://www.instagram.com/yongkristen.author/",
    },
    {
      app: "TikTok",
      img: "/tiktok.webp",
      url: "https://www.tiktok.com/@danmei.kristenyong",
    },
    {
      app: "Web Novels",
      img: "/webnovel.webp",
      url: "https://www.webnovel.com/profile/4503309999",
    },
    {
      app: "Royal Road",
      img: "/royalroad.webp",
      url: "https://www.royalroad.com/fiction/123560/the-frost-and-the-flame-bl",
    },
    {
      app: "ko-fi",
      img: "/ko-fi.png",
      url: "https://ko-fi.com/yongk_author/10",
    },
  ];

  return (
    <section id="links" className="w-full p-8 bg-black">
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="flex flex-wrap justify-between">
          {links.map((app) => {
            return (
              <Link
                href={app.url}
                key={app.url}
                className="h-[50px] w-[50px] flex relative icon-animation"
              >
                <Image
                  className="object-contain"
                  src={app.img}
                  alt={app.app}
                  fill
                  sizes="(max-width: 768px) 100vw, 433px"
                  priority
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

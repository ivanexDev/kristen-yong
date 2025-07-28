import Link from "next/link";
import React from "react";

export const Header = () => {
  const items = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Bio",
      route: "#bio",
    },
    {
      title: "Links",
      route: "#links",
    },
    {
      title: "System Cultivation",
      route: "/system",
    },
    {
      title: "Contact",
      route: "mailto:kristencarcamo@gmail.com",
    },
  ];

  return (
    <nav className="bg-[#0C2C3Dff] text-[#D2C69Cff] flex flex-col p-8 items-center border-b border-b-white gap-7 font-asiatiyca">
      <div>
        <Link href="/">
          <h1 className="text-7xl">Kristen Yong</h1>
        </Link>
      </div>
      <ul className="flex justify-between w-full max-w-[1088px] font-semibold">
        {items.map((item) => {
          return (
            <li key={item.route}>
              <a href={item.route}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

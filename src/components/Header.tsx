import Link from "next/link";
import React from "react";

export const Header = () => {
  const items = [
    { title: "Home", route: "/" },
    { title: "Bio", route: "/#bio" },
    { title: "Chronicles", route: "/chronicles" },
    { title: "System Cultivation", route: "/system" },
    { title: "Contact", route: "mailto:kristencarcamo@gmail.com" },
  ];

  return (
    <nav className="bg-ink text-gold border-b border-gold/20 flex flex-col items-center py-10 px-8 gap-8 font-asiatiyca sticky top-0 z-50 backdrop-blur-sm bg-ink/90">
      <div className="relative">
        <Link href="/">
          <h1 className="text-6xl tracking-widest hover:text-hanji transition-colors duration-500">
            Kristen Yong
          </h1>
        </Link>
        {/* Signature element: Underline that looks like a brush stroke (simplified with CSS) */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      </div>
      
      <ul className="flex justify-center gap-12 w-full max-w-4xl text-sm tracking-[0.2em] uppercase transition-all font-serif font-medium">
        {items.map((item) => (
          <li key={item.route} className="group relative">
            <Link 
              href={item.route} 
              className="hover:text-hanji transition-colors duration-300 block py-1"
            >
              {item.title}
            </Link>
            {/* Subtle indicator for active/hover */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cinnabar transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

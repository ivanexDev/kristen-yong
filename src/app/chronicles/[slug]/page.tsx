import { CHRONICLES } from "@/data/chronicles.data";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CHRONICLES.map((chronicle) => ({
    slug: chronicle.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  const chronicle = CHRONICLES.find((c) => c.slug === slug);

  if (!chronicle) return {};

  return {
    title: `${chronicle.title} | Kristen Yong`,
    description: chronicle.excerpt,
  };
}

export default async function ChroniclePage({ params }: PageProps) {
  const { slug } = await params;

  const chronicle = CHRONICLES.find((c) => c.slug === slug);

  if (!chronicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink py-24 px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/bg2.png')] bg-cover bg-center" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link 
          href="/chronicles" 
          className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors text-xs uppercase tracking-widest mb-16 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Archives
        </Link>

        <article className="hanji-surface p-10 md:p-16 border-traditional relative shadow-2xl">
          {/* Signature element: Imperial Stamp style label */}
          <div className="absolute -right-2 -top-2 bg-cinnabar text-hanji py-6 px-2 [writing-mode:vertical-rl] text-[10px] font-bold tracking-[0.4em] uppercase shadow-lg border border-white/20">
            {chronicle.category}
          </div>

          <header className="mb-16 border-b border-ink/10 pb-12">
            <time className="text-cinnabar font-bold uppercase tracking-[0.3em] text-xs block mb-6">
              {chronicle.date}
            </time>
            <h1 className="text-5xl md:text-7xl font-asiatiyca text-ink leading-[1.1]">
              {chronicle.title}
            </h1>
          </header>

          {chronicle.image && (
            <div className="relative w-full aspect-video mb-16 border border-ink/20 shadow-md group">
              <Image 
                src={chronicle.image} 
                alt={chronicle.title} 
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-ink/85 font-serif leading-relaxed space-y-8">
            {chronicle.content.map((paragraph, index) => (
              <p 
                key={index} 
                className={
                  index === 0 
                    ? "first-letter:text-7xl first-letter:font-asiatiyca first-letter:float-left first-letter:mr-4 first-letter:text-cinnabar first-letter:mt-1"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-ink/20 flex flex-col items-center">
            <span className="text-4xl font-asiatiyca text-cinnabar/40 mb-4">
              結
            </span>
            <p className="text-[10px] uppercase tracking-[0.4em] text-ink/40 font-bold">
              End of Dispatch
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
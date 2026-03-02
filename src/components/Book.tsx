import React from 'react'

export const Book = () => {
  return (
    <section className="min-h-screen bg-ink flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
      {/* Decorative background element: Subtle texture or gradient */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('/bg1.png')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8 max-w-3xl">
          <div className="inline-block border-l-4 border-cinnabar pl-6">
            <p className="text-3xl md:text-4xl lg:text-5xl text-hanji font-asiatiyca leading-tight tracking-wide">
              &quot;Even in the silence of snow, your eyes speak the words I&apos;ve waited lifetimes to hear.&quot;
            </p>
          </div>
          <p className="text-gold/80 italic text-lg font-serif">
            A tale of ice, flame, and the frozen threads of destiny.
          </p>
          
          <button className="mt-8 px-10 py-4 bg-transparent border border-gold/40 text-gold uppercase tracking-[0.3em] text-sm hover:bg-gold hover:text-ink transition-all duration-500 relative group overflow-hidden">
            <span className="relative z-10">Discover the Saga</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative group flex justify-center items-center">
            {/* Ambient Glow: Suaviza los bordes de la imagen con el fondo */}
            <div className="absolute w-[120%] h-[120%] bg-gold/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-1000 group-hover:opacity-20" />
            
            <img 
              className="max-h-[700px] w-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
              src="/book.webp" 
              alt="Book Cover" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}


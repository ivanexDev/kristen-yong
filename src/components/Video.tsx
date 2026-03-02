import React from 'react'

export const Video = () => {
  return (
    <section className="bg-ink py-24 px-8 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 w-[1px] h-full bg-gold/5" />
      <div className="absolute right-10 top-0 w-[1px] h-full bg-gold/5" />
      
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <div className="mb-12 text-center">
          <h3 className="text-gold font-asiatiyca text-3xl tracking-[0.3em] uppercase">Visual Chronicle</h3>
          <div className="mt-2 w-12 h-[1px] bg-cinnabar mx-auto" />
        </div>

        <div className="relative w-full aspect-video border-traditional shadow-2xl overflow-hidden bg-black">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/-d92fYysZ7o?si=3VKMN1gwr-7XyIOl" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        
        <p className="mt-8 text-gold/40 font-serif italic text-sm text-center max-w-lg">
          Witness the trailer for &quot;The Frost and The Flame&quot; — a journey through the silent snows of the White Palace.
        </p>
      </div>
    </section>
  )
}

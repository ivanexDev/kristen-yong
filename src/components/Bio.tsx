import React from 'react'
import Image from 'next/image'

export const Bio = () => {
  return (
    <section id="bio" className="bg-ink py-24 px-8 relative scroll-mt-48">
       
       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-gold order-2 lg:order-1">
          <div className="mb-8">
            <h2 className="text-6xl font-asiatiyca tracking-widest mb-4">The Author</h2>
            <div className="w-16 h-[1px] bg-cinnabar" />
          </div>
          
          <div className="space-y-6 text-lg font-serif leading-relaxed opacity-90">
            <p>
              <span className="text-3xl text-hanji font-asiatiyca mr-2">Kristen Yong</span> is a Latin American writer passionate about storytelling,
              mythology, and emotional worldbuilding. She is the author of <span className="text-hanji italic">The Frost and The Flame</span>, a dramatic danmei fantasy set in an eternal winter
              kingdom inspired by Joseon Korea.
            </p>
            <p>
              With lyrical prose and intense character-driven plots, her work blends romance, political intrigue, and
              spiritual folklore. Her stories explore themes of identity, power, and
              longing — often through flawed heroes facing impossible choices.
            </p>
            <p className="text-hanji/80 italic">
              Kristen believes that fantasy is a mirror to our deepest truths, and she writes
              to connect with readers who seek beauty in darkness and meaning in
              silence.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute inset-0 border border-gold/20 translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            <div className="relative border-traditional overflow-hidden shadow-2xl p-4 hanji-surface">
              <Image 
                className="max-h-[500px] w-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                src="/author.JPG" 
                alt="Kristen Yong"
                width={350}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

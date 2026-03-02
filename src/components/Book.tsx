// import Image from 'next/image'
import React from 'react'

export const Book = () => {
  return (
<section className="w-screen bg-blue-500 p-8 book-section">
  <div className="w-full flex justify-center items-center flex-wrap">
    <p className="slide-right text-5xl w-[400px] text-white font-asiatiyca">
      Even in the silence of snow, your eyes speak the words i&apos;ve waited
      lifetimes to hear.
    </p>

    <div className="slide-left">
      <img className="max-h-[650px] ml-12 max-[965px]:ml-0 my-12" src="/book.webp" alt="" />
    </div>
  </div>
</section>
  )
}

import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 py-8 text-center text-sm">
        <span>
          © 2025 Kristen Young. All Rights Reserved | Website Design by{' '}
          <a 
            href="https://ivanpereira.dev"
            className="hover:text-[#D2C69Cff] transition-colors"
          >
            IvanexDev
          </a>
        </span>
      </div>
    </footer>
  )
}

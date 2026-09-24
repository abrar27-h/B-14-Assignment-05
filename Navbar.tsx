import { useState } from 'react';
import logoImg from '../../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo using local asset image */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src={logoImg} 
              alt="DevStack Logo" 
              className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity" 
            />
          </a>
        </div>

        {/* Middle: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center justify-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-[#D81B7E] font-semibold transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Technologies</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Right: Sign In & Sign Up (Desktop) */}
        <div className="hidden md:flex items-center space-x-5 flex-shrink-0">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            Sign In
          </a>
          <button className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#D81B7E] hover:bg-[#c2156f] transition-all shadow-sm cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Mobile Actions (Sign Up button & Hamburger) */}
        <div className="flex md:hidden items-center gap-3">
          <button className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#D81B7E] hover:bg-[#c2156f] transition-all shadow-sm cursor-pointer">
            Sign Up
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-5 px-6 flex flex-col gap-4 animate-fadeIn">
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#D81B7E] transition-colors py-2 border-b border-gray-50">Home</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#D81B7E] transition-colors py-2 border-b border-gray-50">Technologies</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#D81B7E] transition-colors py-2 border-b border-gray-50">Projects</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#D81B7E] transition-colors py-2 border-b border-gray-50">About</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#D81B7E] transition-colors py-2 border-b border-gray-50">Contact</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-gray-700 hover:text-[#D81B7E] transition-colors py-2">Sign In</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
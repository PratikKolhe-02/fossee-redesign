import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl text-blue-700 tracking-tight">FOSSEE</span>
            <span className="ml-2 text-sm text-gray-500 hidden sm:block">Workshop Portal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-150 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-150 font-medium">Workshops</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-150 font-medium">Statistics</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-medium shadow-sm">
              Login
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Home</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Workshops</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Statistics</a>
            <button className="w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 font-medium shadow-sm">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-neutral-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-xl font-bold">ZeroFX1</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#calculator" className="text-gray-300 hover:text-white transition-colors duration-200">Calculator</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors duration-200">Benefits</a>
            <a href="#howitworks" className="text-gray-300 hover:text-white transition-colors duration-200">How It Works</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors duration-200">Security</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</a>
            <a href="#waitlist" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 animate__animated animate__pulse animate__infinite">Join Waitlist</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#calculator" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">Calculator</a>
            <a href="#benefits" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">Benefits</a>
            <a href="#howitworks" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">How It Works</a>
            <a href="#security" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">Security</a>
            <a href="#faq" onClick={closeMobileMenu} className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">FAQ</a>
            <a href="#waitlist" onClick={closeMobileMenu} className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 mt-4">Join Waitlist</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { MenuIcon, X as CloseIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">
            Pharma<span className="text-green-500">Care</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
            Products
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            About Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600">
            <UserIcon size={20} />
          </button>
          <button className="text-gray-700 hover:text-blue-600 relative">
            <ShoppingCartIcon size={20} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
              Products
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
              Contact
            </a>
            <div className="flex items-center space-x-4 py-2">
              <button className="text-gray-700 hover:text-blue-600">
                <UserIcon size={20} />
              </button>
              <button className="text-gray-700 hover:text-blue-600 relative">
                <ShoppingCartIcon size={20} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Sign In
              </button>
            </div>
          </div>
        </div>}
    </header>;
};
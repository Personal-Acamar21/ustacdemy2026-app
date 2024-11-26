import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import SearchBar from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';

const menuItems = [
  {
    name: 'Academy',
    dropdownItems: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Our Teams', path: '/our-teams' },
      { name: 'Tryouts', path: '/tryouts' },
      { name: 'Cozy Feet', path: '/cozy-feet' },
      { name: 'UST Cares', path: '/ust-cares' },
      { name: 'Our Staff', path: '/our-staff' }
    ]
  },
  {
    name: 'Camps & Clinics',
    path: '/camps-clinics'
  },
  {
    name: 'Facilities',
    dropdownItems: [
      { name: 'Indoor', path: '/indoor-facilities' },
      { name: 'Outdoor', path: '/outdoor-facilities' }
    ]
  },
  {
    name: 'Shop Diaza',
    path: '/shop'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Sponsors',
    path: '/sponsors'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      {/* Welcome Message */}
      <div className="bg-[#00FF00] text-black py-3">
        <p className="text-center text-2xl md:text-3xl font-extrabold animate-pulse tracking-wide">
          Welcome To Ultimate Soccer Training/UST FC Academy
        </p>
      </div>

      {/* Main Navigation */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67395a73732b002e9d319baf.png"
                alt="UST Soccer Academy"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdownItems ? (
                    <div className="text-white hover:text-[#00FF00] cursor-pointer text-lg font-bold">
                      {item.name}
                      <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-white hover:text-[#00FF00] hover:bg-gray-900"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-white hover:text-[#00FF00] text-lg font-bold"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Login/Register */}
              <Button
                onClick={() => setShowLoginModal(true)}
                className="text-white hover:text-[#00FF00] text-lg font-bold"
              >
                Login/Register
              </Button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Search */}
              <SearchBar />

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF00]">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF00]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF00]">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#00FF00]"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdownItems ? (
                  <div className="px-4 py-2">
                    <div className="text-white font-bold mb-2">{item.name}</div>
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-white hover:text-[#00FF00]"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-white hover:text-[#00FF00] font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile Social Links */}
            <div className="px-4 py-4 border-t border-gray-800">
              <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF00]">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF00]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FF00]">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-6">Login / Register</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="submit"
                    className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => setShowLoginModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => {/* Add registration logic */}}
                    className="text-[#00FF00] hover:underline"
                  >
                    Register here
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* UST ACADEMY Column */}
          <div>
            <h3 className="font-semibold text-[#00FF00] mb-4">UST ACADEMY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-[#00FF00]">ABOUT US</Link></li>
              <li><Link to="/our-staff" className="hover:text-[#00FF00]">OUR STAFF</Link></li>
              <li><Link to="/indoor-facilities" className="hover:text-[#00FF00]">OUR FACILITIES</Link></li>
              <li><Link to="/sponsors" className="hover:text-[#00FF00]">OUR SPONSORS</Link></li>
              <li><Link to="/gallery" className="hover:text-[#00FF00]">PHOTO GALLERY</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#00FF00]">WHAT PARENTS & PLAYERS SAY</Link></li>
            </ul>
          </div>

          {/* Members Support Column */}
          <div>
            <h3 className="font-semibold text-[#00FF00] mb-4">MEMBERS SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-[#00FF00]">HELP CENTER</Link></li>
              <li><Link to="/uniform-policy" className="hover:text-[#00FF00]">UNIFORM RETURN POLICY</Link></li>
              <li><Link to="/track-order" className="hover:text-[#00FF00]">TRACK YOUR ORDER</Link></li>
              <li><Link to="/uniform-guide" className="hover:text-[#00FF00]">HANDLING UNIFORM</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-semibold text-[#00FF00] mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li>ULTIMATE SOCCER TRAINING LLC</li>
              <li>D/ba UST KINGS PARK</li>
              <li>P.O. BOX: 312</li>
              <li>KINGS PARK NY 11754</li>
              <li>TEL: 631-506-6567</li>
              <li>INFO@USTSOCCER.COM</li>
            </ul>
          </div>

          {/* News Column */}
          <div>
            <h3 className="font-semibold text-[#00FF00] mb-4">NEWS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-[#00FF00]">LATEST NEWS</Link></li>
              <li><Link to="/news/academy" className="hover:text-[#00FF00]">ACADEMY UPDATES</Link></li>
              <li><Link to="/news/industry" className="hover:text-[#00FF00]">SOCCER INDUSTRY NEWS</Link></li>
              <li><Link to="/events" className="hover:text-[#00FF00]">UST EVENTS</Link></li>
              <li><Link to="/newsletters" className="hover:text-[#00FF00]">NEWSLETTERS</Link></li>
            </ul>
          </div>

          {/* Disclaimers/Policies Column */}
          <div>
            <h3 className="font-semibold text-[#00FF00] mb-4">DISCLAIMERS/POLICIES</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-[#00FF00]">TERMS OF USE</Link></li>
              <li><Link to="/privacy" className="hover:text-[#00FF00]">PRIVACY POLICY</Link></li>
              <li><Link to="/warranty" className="hover:text-[#00FF00]">WARRANTY</Link></li>
              <li><Link to="/refund" className="hover:text-[#00FF00]">REFUND POLICY</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#00FF00]">DISCLAIMER</Link></li>
              <li><Link to="/code-of-conduct" className="hover:text-[#00FF00]">CODE OF CONDUCT</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00]">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF00]">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img 
                  src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/67395a73732b002e9d319baf.png" 
                  alt="UST Soccer Academy" 
                  className="h-10 w-auto"
                />
              </Link>
              <span className="text-sm text-gray-400">© Copyright {new Date().getFullYear()}. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
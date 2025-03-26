import React from 'react';
import {MapPinIcon, EnvelopeIcon, PhoneIcon, MapIcon} from '@heroicons/react/24/outline';

export default function Footer() {
  // Function to open Google Maps with office location
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/9Au8E9b9Qe8wsjqE6`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gray-900 text-white lg:px-32">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MapPinIcon className="w-6 h-6 mr-3 text-pink-500" />
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-3 text-pink-400" />
                <p>Khurshaid Khan Plaza, Charbagh Swat</p>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-pink-400" />
                <a href="mailto:technext96@gmail.com" className="hover:text-pink-300 transition-colors">
                  technext96@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-pink-400" />
                <a href="tel:+923491089456" className="hover:text-pink-300 transition-colors">
                  +92 (349) 1089456
                </a>
              </div>
              <button onClick={openGoogleMaps} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <MapIcon className="w-5 h-5 mr-2" />
                View on Google Maps
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                {name: 'Home', href: '/'},
                {name: 'Services', href: '/services'},
                {name: 'Projects', href: '/projects'},
                {name: 'About Us', href: '/about'}
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-pink-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Email for newsletter subscription"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-pink-500 
                  transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 
                  text-white px-6 py-2 rounded-lg 
                  transition-colors duration-300 
                  flex items-center justify-center"
              >
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} TechNext Solutions. All rights reserved.</p>
          <div className="flex space-x-4">
            {[
              {name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v7H2z'},
              {name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'},
              {name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'}
            ].map(social => (
              <a key={social.name} href="#" aria-label={`${social.name} Profile`} className="text-gray-400 hover:text-pink-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

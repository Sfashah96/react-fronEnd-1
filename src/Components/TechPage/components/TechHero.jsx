import React from 'react';

export default function HeroSection() {
  return (
    <section className="h-screen bg-gradient-to-br from-[#0e0525] to-[#1a1035] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Parallax Blobs */}
        <div className="absolute w-40 h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30 animate-blob animation-delay-2000 top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-30 animate-blob animation-delay-4000 top-2/3 right-1/3 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-32 h-32 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full opacity-30 animate-blob animation-delay-6000 bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center px-4 relative z-10">
        {/* Tags */}
        <div className="flex justify-center space-x-2 mb-6">
          <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">ENGINEERING</span>
          <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition-colors cursor-pointer">MULTIPLE LOCATIONS</span>
          <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition-colors cursor-pointer">FULLY REMOTE</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          The tech behind our <span className="text-pink-600 hover:text-pink-500 transition-colors cursor-pointer">cutting-edge</span> solutions
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-500">Where Lean frameworks & Product innovation meets technical expertise</p>

        {/* Call-to-Action Button */}
        <a href="#TechStack" className="flex items-center justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-all transform hover:scale-105 hover:shadow-lg animate-fade-in animation-delay-1000">
            Explore Our Tech Stack{' '}
            <svg className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" alt="Arrow">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </a>
        {/* Tech Stack Button */}
      </div>
    </section>
  );
}

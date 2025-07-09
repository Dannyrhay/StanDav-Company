import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider1 from '../assets/images/Slider1.jpg';
import Slider2 from '../assets/images/Slider2.jpg';

// --- SLIDE DATA ---
const slides = [
  {
    type: 'image',
    src: Slider1, // Use the variable here
    title: 'Luxury Houses',
    subtitle: 'Elegant and Bespoke Design',
  },
  {
    type: 'image',
    src: Slider2, // Use the variable here
    title: 'Modern Living',
    subtitle: 'Unmatched Quality and Style',
  },
  {
    type: 'image',
    src: Slider1, // Using the first image again for the third slide
    title: 'Your Dream Home',
    subtitle: 'Find it With StanDav Group',
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {slides[index].type === 'video' ? (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={slides[index].src}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={slides[index].src}
              alt={slides[index].title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <motion.h1
            key={`title-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider"
          >
            {slides[index].title}
          </motion.h1>
          <motion.h2
            key={`subtitle-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-light mt-4"
          >
            {slides[index].subtitle}
          </motion.h2>
          <motion.p
            key={`tagline-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-md md:text-lg uppercase tracking-widest mt-8"
          >
            Every and Anything Real Estate
          </motion.p>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-colors z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-colors z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSlider;

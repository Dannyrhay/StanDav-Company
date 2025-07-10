import { useState, useEffect } from "react";

// The component now accepts a 'slides' prop to make it reusable.
const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // The sliding animation effect will only run if there is more than one slide.
  useEffect(() => {
    if (slides && slides.length > 1) {
      const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slides]);

  // If no slides are provided, render nothing to avoid errors.
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          // The logic now correctly handles showing the first (and only) slide if it's static.
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/1600x900/cccccc/ffffff?text=Image+Not+Found`;
            }}
          />
          {/* Using a consistent overlay style */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl animate-fade-in-up">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      {/* The navigation dots will only appear if there is more than one slide. */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
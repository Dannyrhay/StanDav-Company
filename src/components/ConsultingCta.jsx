import React from 'react';
import { Link } from 'react-router-dom';

const ConsultingCta = () => {
  // Using a relevant background image for the consulting services section
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop';

  return (
    <section
      className="relative bg-cover bg-center py-24 sm:py-32"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 tracking-wider uppercase">
          Comprehensive Real Estate Consulting Services
        </h2>

        {/* Underline Decorator */}
        <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>

        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          For expert guidance and tailored solutions, contact us now for comprehensive real estate consulting services.
        </p>

        <Link
          to="/contact"
          className="inline-block font-semibold text-white bg-amber-500 py-3 px-8 rounded-md hover:bg-amber-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Contact Now
        </Link>
      </div>
    </section>
  );
};

export default ConsultingCta;
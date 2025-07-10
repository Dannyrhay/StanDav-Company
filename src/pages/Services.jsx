import React from 'react';
import HeroSlider from '../components/HeroSlider';

// --- SVG Icons for the services section ---
const BuyingIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg> );
const SellingIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> );
const ConsultingIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> );

const Services = () => {
  const servicesSlide = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      title: "Our Services",
      subtitle: "Tailored solutions for every real estate need.",
    },
  ];

  return (
    <div className="bg-white">
      <HeroSlider slides={servicesSlide} />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">What We Offer</h2>
                <p className="text-gray-600 mt-2">From brokerage to construction, we provide a comprehensive suite of services.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-8 shadow-lg rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <BuyingIcon />
                    <h3 className="text-2xl font-bold mb-2">Property Buying</h3>
                    <p className="text-gray-600">We help you find and purchase the property that fits your needs and budget, guiding you through every step of the process.</p>
                </div>
                <div className="p-8 shadow-lg rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <SellingIcon />
                    <h3 className="text-2xl font-bold mb-2">Property Selling</h3>
                    <p className="text-gray-600">Our experts assist you in selling your property at the best market price with strategic marketing and negotiation.</p>
                </div>
                <div className="p-8 shadow-lg rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <ConsultingIcon />
                    <h3 className="text-2xl font-bold mb-2">Consultation</h3>
                    <p className="text-gray-600">Get professional advice on real estate investments, market trends, and portfolio management from our seasoned consultants.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
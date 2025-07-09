import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    // The main-content class is in RootLayout, so we don't need extra divs here
    <>
      <HeroSlider />
      {/* You can add other sections for the home page below the slider */}
      {/* <div className="py-16">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
      </div>
      */}
    </>
  );
};

export default Home;

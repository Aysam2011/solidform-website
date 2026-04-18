import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import HowWeWork from '../components/HowWeWork';
import WHS from '../components/WHS';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <HowWeWork />
      <WHS />
      <Footer />
    </div>
  );
};

export default Home;

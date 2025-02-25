import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <About />
      {/*<Tours />*/}
      <Gallery />
      <Reviews />
      <FAQ />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
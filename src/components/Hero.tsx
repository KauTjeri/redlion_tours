import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      image: 'Images/1300x820.webp',
      title: 'Experience Namibia',
      subtitle: 'Discover the untamed beauty of Africa',
    },
    {
      image: 'Images/11-november-in-namibia-damaraland59-2.jpg',
      title: 'Unforgettable Safaris',
      subtitle: 'Create memories that last a lifetime',
    },
    {
      image: 'Images/Etosha/Etosha_elefant.jpg',
      title: 'Wildlife Adventures',
      subtitle: 'Get up close with African wildlife',
    },
  ];

  return (
    <section id="home" className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                  <a
                    href="#book"
                    className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    Book Your Adventure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
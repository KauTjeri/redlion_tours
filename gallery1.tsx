import React, { useState } from 'react';
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  location: string;
}

const images: GalleryImage[] = [
  {
    id: '1',
    src: 'Images/Damaraland/70471885-View-towards-Damaraland-typical-landscape-Damaraland-Namibia-Africa.jpg',
    title: 'Desert Elephant',
    location: 'Damaraland'
  },
  {
    id: '2',
    src: 'Images/safari/Sossus-Intro.jpg',
    title: 'Sossusvlei Dunes',
    location: 'Namib Desert'
  },
  {
    id: '3',
    src: 'Images/Etosha/118-etosha-wildlife.jpg',
    title: 'Etosha Wildlife',
    location: 'Etosha National Park'
  },
  {
    id: '4',
    src: 'Images/Kaokoland/dwelling-people-Himba-Namibia-Kaokoland.webp',
    title: 'Himba People',
    location: 'Kaokoland'
  },
  {
    id: '5',
    src: 'Images/Skeleton/otavi_shipwreck.jpg',
    title: 'Shipwreck',
    location: 'Skeleton Coast'
  },
  {
    id: '6',
    src: 'Images/Fishriver/Fish-River-Canyon-7.jpg',
    title: 'Fish River Canyon',
    location: 'Southern Namibia'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Gallery</h2>
          <p className="text-lg text-gray-600">
            Explore the breathtaking landscapes and wildlife of Namibia through our lens
          </p>
        </motion.div>

        <div className="mb-12">
          <Slider {...settings} className="gallery-slider">
            {images.map((image, index) => (
              <div key={image.id} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Zoom>
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </Zoom>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm">{image.location}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Zoom>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </Zoom>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm">{image.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="max-w-4xl w-full">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                >
                  ×
                </button>
                <Zoom>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-lg"
                  />
                </Zoom>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200">{selectedImage.location}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
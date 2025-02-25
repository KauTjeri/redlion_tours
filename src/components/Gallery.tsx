import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  location: string;
}

interface SliderImage {
  id: string;
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    id: '1',
    src: 'Images/Damaraland/Damaraland-Elephants.webp',
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
    src: 'Images/Kaokoland/himba-people-kaokoland-namibia-africa-RHPLF01080.jpg',
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

const sliders: { [key: string]: SliderImage[] } = {
  '1': [
    { id: '1-1', src: 'Images/Damaraland/Ökenelefanter-i-Damaraland-1-1.jpg', alt: 'Damaraland 1' },
    { id: '1-2', src: 'Images/Damaraland/damaraland-namibia-paisagem.jpg', alt: 'Damaraland 2' },
    { id: '1-3', src: 'Images/Damaraland/DSC07527.jpg', alt: 'Damaraland 3' }
  ],
  '2': [
    { id: '2-1', src: 'Images/Namib/1280px-Sossusvlei_Dune_Namib_Desert_Namibia_Luca_Galuzzi_2004.jpg', alt: 'Sossusvlei 1' },
    { id: '2-2', src: 'Images/safari/Sossusvlei-Dune-Adventures_900X600.jpg', alt: 'Sossusvlei 2' },
    { id: '2-3', src: 'Images/Namib/Dead_Vlei_4.jpg', alt: 'Sossusvlei 3' }
  ],
  '3': [
    { id: '3-1', src: 'Images/Etosha/Dry_Etosha_Pan.jpg', alt: 'Etosha 1' },
    { id: '3-2', src: 'Images/Etosha/etosha_safari_camp_plain.jpg', alt: 'Etosha 2' },
    { id: '3-3', src: 'Images/Etosha/16-wildebeests-etosha-thesanetravel.com-P1453842.jpg', alt: 'Etosha 3' }
  ],
  '4': [
    { id: '4-1', src: 'Images/Kaokoland/Kaokoland Experience (1).jpg', alt: 'Kaokoland 1' },
    { id: '4-2', src: 'Images/Kaokoland/31536000.jpg', alt: 'Kaokoland 2' },
    { id: '4-3', src: 'Images/Kaokoland/cropSerraCafema002_1280x1024.jpg', alt: 'Kaokoland 3' }
  ],
  '5': [
    { id: '5-1', src: 'Images/Skeleton/pt-namibia_0.jpg', alt: 'Skeleton Coast 1' },
    { id: '5-2', src: 'Images/Skeleton/d2rkhhucqlc51.jpg', alt: 'Skeleton Coast 2' },
    { id: '5-3', src: 'Images/Skeleton/Ccecn07zeHl-mFjZx1LuWmQeyiKr5ur4Lb2SFFV7e8o.webp', alt: 'Skeleton Coast 3' }
  ],
  '6': [
    { id: '6-1', src: 'Images/Fishriver/caption (9).jpg', alt: 'Fish River Canyon 1' },
    { id: '6-2', src: 'Images/Fishriver/Fish-River-Canyon-7.jpg', alt: 'Fish River Canyon 2' },
    { id: '6-3', src: 'Images/Fishriver/fish_river_canyon_tourist.jpeg', alt: 'Fish River Canyon 3' }
  ]
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [sliderImages, setSliderImages] = useState<SliderImage[] | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setSliderImages(sliders[image.id]);
  };

  const handleCloseSlider = () => {
    setSelectedImage(null);
    setSliderImages(null);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
      handleCloseSlider();
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative cursor-pointer"
                  onClick={() => handleImageClick(image)}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(image)}
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

        {selectedImage && sliderImages && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
          >
            <div className="max-w-5xl w-full" ref={sliderRef}>
              <div className="relative">
                <button
                  onClick={handleCloseSlider}
                  className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                >
                  ×
                </button>
                <Slider {...settings} className="popup-slider">
                  {sliderImages.map((slide) => (
                    <div key={slide.id} className="px-2">
                      <Zoom>
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                      </Zoom>
                    </div>
                  ))}
                </Slider>
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
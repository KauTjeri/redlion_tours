import React, { useState } from 'react';
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  activities: string[];
}

const destinations: Destination[] = [
  {
    id: 'etosha',
    name: 'Etosha National Park',
    description: 'One of Africa\'s great wildlife parks, Etosha National Park is dominated by the vast Etosha salt pan. The park is home to hundreds of species of mammals, birds and reptiles, including several threatened and endangered species such as the black rhinoceros.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    highlights: [
      'Vast salt pan visible from space',
      'Abundant wildlife at waterholes',
      'Excellent game viewing opportunities',
      'Unique desert-adapted species'
    ],
    activities: [
      'Game drives',
      'Photography',
      'Bird watching',
      'Night drives'
    ]
  },
  {
    id: 'skeleton-coast',
    name: 'Skeleton Coast',
    description: 'The Skeleton Coast is one of the most inhospitable but beautiful places on Earth. The cold Benguela Current brings in dense ocean fogs, while the desert winds create the highest dunes in the world.',
    image: 'Images/Skeleton/skeleton.jpg',
    highlights: [
      'Shipwreck remains',
      'Desert-adapted wildlife',
      'Dramatic landscapes',
      'Remote wilderness'
    ],
    activities: [
      'Scenic flights',
      'Beach walks',
      'Wildlife tracking',
      'Photography'
    ]
  },
  {
    id: 'damaraland',
    name: 'Damaraland',
    description: 'A dramatic landscape of petrified forests, ancient valleys, and unique wildlife including desert-adapted elephants and black rhinos.',
    image: 'Images/Damaraland/NAM_-_Damaraland1_-_wilderness.jpg',
    highlights: [
      'Desert-adapted elephants',
      'Ancient rock art',
      'Dramatic red rock formations',
      'Traditional Damara communities'
    ],
    activities: [
      'Wildlife tracking',
      'Cultural visits',
      'Rock art tours',
      'Nature walks'
    ]
  },
  {
    id: 'sossusvlei',
    name: 'Sossusvlei',
    description: 'Home to the world\'s highest sand dunes and the haunting Dead Vlei, Sossusvlei is a photographer\'s paradise and a must-visit destination in Namibia.',
    image: 'Images/safari/Sossusvlei-Dune-Adventures_900X600.jpg',
    highlights: [
      'Big Daddy and Dune 45',
      'Dead Vlei',
      'Stunning sunrise views',
      'Star photography'
    ],
    activities: [
      'Dune climbing',
      'Photography tours',
      'Hot air ballooning',
      'Nature walks'
    ]
  },
  {
    "id": "popa_game_park",
    "name": "Popa Game Park",
    "description": "A nature lover's paradise with diverse wildlife, scenic landscapes, and opportunities for adventure.",
    "image": "Images/Popa/4278646-Custom-1.jpg",
    "highlights": [
      "Diverse wildlife viewing",
      "Scenic drives and landscapes",
      "Sunrise and sunset safaris",
      "Clear night skies for star gazing"
    ],
    "activities": [
      "Game drives",
      "Nature walks",
      "Photography tours",
      "Birdwatching"
    ]
}
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
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
    autoplaySpeed: 5000,
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
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Discover Namibia's Wonders</h2>
          <p className="text-lg text-gray-600 mb-12">
            Explore the diverse landscapes and unique experiences that await you
          </p>
        </motion.div>

        <Slider {...settings} className="destinations-slider mb-12">
          {destinations.map((destination, index) => (
            <div key={destination.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedDestination(destination)}
              >
                <Zoom>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                  />
                </Zoom>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 line-clamp-3">{destination.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>

        {selectedDestination && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold">{selectedDestination.name}</h3>
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                
                <Zoom>
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    className="w-full h-96 object-cover rounded-lg mb-6"
                  />
                </Zoom>

                <p className="text-gray-600 mb-6">{selectedDestination.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Highlights</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedDestination.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Activities</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedDestination.activities.map((activity, index) => (
                        <li key={index} className="text-gray-600">{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
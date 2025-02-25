import React from 'react';
import { Star } from 'lucide-react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  tour: string;
  date: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    rating: 5,
    text: 'An absolutely incredible experience! The wildlife sightings in Etosha were beyond our expectations, and our guide was extremely knowledgeable. The accommodations were perfect, and the entire trip was well-organized.',
    tour: 'Classic Namibia Safari',
    date: 'March 2024',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'The Skeleton Coast tour was a unique adventure. Seeing the desert-adapted wildlife and ancient shipwrecks was fascinating. Our guide made the experience even more special with his extensive knowledge.',
    tour: 'Skeleton Coast Adventure',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  },
  {
    id: '3',
    name: 'Emma Weber',
    location: 'Germany',
    rating: 5,
    text: 'The desert elephant tracking in Damaraland was the highlight of our trip. The landscapes were breathtaking, and the cultural experiences with the Himba people were authentic and respectful.',
    tour: 'Damaraland Explorer',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];

const Reviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Guest Reviews</h2>
          <p className="text-lg text-gray-600">
            Read what our guests have to say about their safari experiences
          </p>
        </motion.div>

        <Slider {...settings} className="reviews-slider">
          {reviews.map((review, index) => (
            <div key={review.id} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{review.tour}</span>
                  <span>{review.date}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Tony Johnson',
    role: 'Safari Guide',
    image: 'Images/tony.jpg',
    bio: 'With over 15 years of experience in Namibian wildlife, Tony brings unparalleled expertise to every safari.',
  },
  {
    name: 'David Muller',
    role: 'Wildlife Photographer',
    image: 'Images/portrait-of-a-confident-game-ranger-looking-at-a-g-2023-11-27-05-19-20-utc.jpg',
    bio: 'Award-winning photographer specializing in African wildlife and landscapes.',
  },
  {
    name: 'Paulus Thompson',
    role: 'Conservation Expert',
    image: 'Images/Tarangire_119A.jpg',
    bio: 'Dedicated to preserving Namibia\'s natural heritage through sustainable tourism.',
  },
  {
    name: 'Michael Nambinga',
    role: 'Local Guide',
    image: 'Images/solomon-ndlovu-winner.jpg',
    bio: 'Born and raised in Namibia, Michael shares deep cultural insights with our guests.',
  },
];

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Redlion Premium Tours offers luxurious, 
          bespoke safari experiences in Namibia. 
          We combine adventure, comfort, and 
          cultural immersion while prioritizing sustainability and 
          community support. Join us for unforgettable journeys through 
          Namibia's stunning landscapes and diverse wildlife, with expert 
          guides and top-tier accommodations.
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Meet Our Team</h3>
          <Slider {...settings} className="team-slider">
            {teamMembers.map((member, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                    <p className="text-red-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-4">
            At Redlion Premium Tours, our mission is to provide unparalleled luxury safari experiences, connecting guests with nature and culture in Namibia through exceptional service and sustainable practices. We are committed to sustainable practices and community empowerment, preserving Namibia's natural beauty and heritage for future generations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Sustainable and responsible tourism
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Support for local communities
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Wildlife conservation efforts
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
            <p className="text-gray-600 mb-4">
            Redlion Premium Tours aims to be the leading provider of luxury safari adventures in Namibia. We aspire to inspire a lifelong passion for Africa's wonders while making a positive impact on the environment and communities we engage with. Through exceptional service, authentic experiences, and a steadfast commitment to conservation, we aim to set the gold standard in sustainable tourism.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Sustainable and responsible tourism
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Support for local communities
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Wildlife conservation efforts
              </li>
            </ul>
          </div>
          <div className="relative h-96">
            <img
              src="Images/63cfb129116900dd50503846_2.webp"
              alt="Safari landscape"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative h-96">
            <img
              src="Images/Namibia-Sossusvlei-by-hot-air-balloon1-SH.webp"
              alt="Safari landscape"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
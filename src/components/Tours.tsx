import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  image: string;
  description: string;
  locations: string[];
  highlights: string[];
  itinerary: { day: number; description: string }[];
}

const tours: Tour[] = [
  {
    id: 'classic-namibia',
    name: 'Classic Namibia Safari',
    duration: '10 Days',
    price: 3500,
    difficulty: 'Easy',
    image: 'Images/safari/Namibia-Private-Guided-Safari-Tours-Convoy-03.jpg',
    description: 'Experience the best of Namibia\'s diverse landscapes and wildlife in this comprehensive tour.',
    locations: ['Etosha', 'Damaraland', 'Sossusvlei'],
    highlights: [
      'Game drives in Etosha National Park',
      'Desert-adapted elephants in Damaraland',
      'Climbing the dunes of Sossusvlei',
      'Stargazing in the Namib Desert'
    ],
    itinerary: [
      { day: 1, description: 'Arrival in Windhoek and welcome briefing' },
      { day: 2, description: 'Drive to Etosha National Park, afternoon game drive' },
      { day: 3, description: 'Full day game viewing in Etosha' },
      { day: 4, description: 'Travel to Damaraland, visit ancient rock art sites' },
      { day: 5, description: 'Track desert-adapted elephants' }
    ]
  },
  {
    id: 'skeleton-adventure',
    name: 'Skeleton Coast Adventure',
    duration: '7 Days',
    price: 4200,
    difficulty: 'Moderate',
    image: 'Images/safari/SkeletonCoast-banner.jpg',
    description: 'Explore the mysterious Skeleton Coast and its unique wildlife.',
    locations: ['Skeleton Coast', 'Kaokoland', 'Kunene River'],
    highlights: [
      'Shipwreck viewing',
      'Desert lion tracking',
      'Himba cultural visits',
      'Scenic flights over the coast'
    ],
    itinerary: [
      { day: 1, description: 'Scenic flight to Skeleton Coast' },
      { day: 2, description: 'Explore shipwrecks and seal colonies' },
      { day: 3, description: 'Visit Himba settlements' },
      { day: 4, description: 'Desert wildlife tracking' },
      { day: 5, description: 'Kunene River activities' }
    ]
  },
  {
    id: 'desert-explorer',
    name: 'Desert Explorer',
    duration: '8 Days',
    price: 3800,
    difficulty: 'Moderate',
    image: 'Images/safari/Sossus-Intro.jpg',
    description: 'Journey through the Namib Desert and discover its hidden treasures.',
    locations: ['Sossusvlei', 'Namib Desert', 'Swakopmund'],
    highlights: [
      'Sunrise at Dune 45',
      'Dead Vlei photography',
      'Desert wildlife safari',
      'Adventure activities in Swakopmund'
    ],
    itinerary: [
      { day: 1, description: 'Departure from Windhoek to the Namib Desert' },
      { day: 2, description: 'Early morning dune climb and Dead Vlei visit' },
      { day: 3, description: 'Desert wildlife tracking and nature walks' },
      { day: 4, description: 'Travel to Swakopmund' },
      { day: 5, description: 'Adventure activities and coastal exploration' }
    ]
  }
];

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = !selectedDifficulty || tour.difficulty === selectedDifficulty;
    const matchesDuration = !selectedDuration || tour.duration === selectedDuration;
    const matchesLocation = !selectedLocation || tour.locations.includes(selectedLocation);
    return matchesSearch && matchesDifficulty && matchesDuration && matchesLocation;
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Safari Tours</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Toggle for Mobile */}
          <button
            className="lg:hidden bg-red-600 text-white px-4 py-2 rounded-md mb-4"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sidebar */}
          <div className={`lg:w-1/4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Challenging">Challenging</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All</option>
                    <option value="7 Days">7 Days</option>
                    <option value="8 Days">8 Days</option>
                    <option value="10 Days">10 Days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All</option>
                    <option value="Etosha">Etosha</option>
                    <option value="Skeleton Coast">Skeleton Coast</option>
                    <option value="Damaraland">Damaraland</option>
                    <option value="Sossusvlei">Sossusvlei</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Tours Content */}
          <div className="lg:w-3/4">
            <Slider {...settings} className="tours-slider mb-8">
              {filteredTours.map((tour) => (
                <div key={tour.id} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedTour(tour)}
                  >
                    <Zoom>
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-48 object-cover"
                      />
                    </Zoom>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">{tour.duration}</span>
                        <span className="text-red-600 font-semibold">
                          ${tour.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          tour.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          tour.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tour.difficulty}
                        </span>
                        <button
                          className="text-red-600 hover:text-amber-700 font-medium"
                          onClick={() => setSelectedTour(tour)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Tour Detail Modal */}
        {selectedTour && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold">{selectedTour.name}</h3>
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                <Zoom>
                  <img
                    src={selectedTour.image}
                    alt={selectedTour.name}
                    className="w-full h-96 object-cover rounded-lg mb-6"
                  />
                </Zoom>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Tour Details</h4>
                    <ul className="space-y-2">
                      <li><span className="font-medium">Duration:</span> {selectedTour.duration}</li>
                      <li><span className="font-medium">Price:</span> ${selectedTour.price.toLocaleString()}</li>
                      <li><span className="font-medium">Difficulty:</span> {selectedTour.difficulty}</li>
                      <li>
                        <span className="font-medium">Locations:</span>{' '}
                        {selectedTour.locations.join(', ')}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Highlights</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedTour.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Itinerary</h4>
                  <div className="space-y-4">
                    {selectedTour.itinerary.map((day) => (
                      <div key={day.day} className="flex">
                        <div className="w-20 font-medium">Day {day.day}</div>
                        <div className="flex-1">{day.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedTour(null)}
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tours;
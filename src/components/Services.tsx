import React from 'react';
import { Compass, Hotel, Camera, Leaf, Heart, Calendar, CloudMoon as HotAirBalloon, Footprints, Users, Building2, Tent, Mountain } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
      <Icon className="w-6 h-6 text-red-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: "Custom-Tailored Safari Tours",
      description: "Each safari tour is designed to meet the unique preferences and interests of our guests, ensuring a personalized and memorable experience."
    },
    {
      icon: Users,
      title: "Private Guided Safaris",
      description: "Exclusive tours led by experienced guides who provide in-depth insights into Namibia's diverse wildlife and ecosystems."
    },
    {
      icon: Building2,
      title: "Top-Tier Lodges and Camps",
      description: "We partner with the finest lodges offering exceptional comfort, exquisite dining, and world-class amenities."
    },
    {
      icon: Tent,
      title: "Exclusive Wilderness Camps",
      description: "Stay in our exclusive wilderness camps, where you can enjoy the serenity of nature without sacrificing comfort."
    },
    {
      icon: HotAirBalloon,
      title: "Hot Air Balloon Rides",
      description: "Experience the breathtaking landscapes of Namibia from above with our hot air balloon rides."
    },
    {
      icon: Footprints,
      title: "Guided Bush Walks",
      description: "Explore the African bush on foot with our expert trackers and guides, learning about flora and fauna up close."
    },
    {
      icon: Camera,
      title: "Wildlife Photography",
      description: "Specialized expeditions led by professional wildlife photographers, providing tips to capture the perfect shot."
    },
    {
      icon: Leaf,
      title: "Conservation-Focused Tours",
      description: "Tours designed to promote wildlife conservation and support local communities while protecting Namibia's natural heritage."
    },
    {
      icon: Heart,
      title: "Honeymoon Safaris",
      description: "Celebrate your love with a romantic honeymoon safari, complete with luxurious accommodations and exclusive experiences."
    },
    {
      icon: Calendar,
      title: "Corporate Retreats",
      description: "Plan your next corporate retreat combining business with pleasure in a stunning natural setting."
    },
    {
      icon: Hotel,
      title: "Family Adventure Packages",
      description: "Create lasting memories with our family adventure packages, offering fun and educational activities for all ages."
    },
    {
      icon: Mountain,
      title: "Cultural Excursions",
      description: "Immerse yourself in Namibia's rich cultural heritage with guided visits to local communities and historical sites."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Range of Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the wonders of Namibia through our comprehensive range of safari services, 
            each designed to provide unforgettable moments and authentic connections with nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
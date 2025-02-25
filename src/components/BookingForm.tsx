import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;

  // Trip Preferences
  destination: string;
  duration: string;
  travelers: number;
  travelDate: string;
  flightClass: 'economy' | 'business' | 'private';
  budget: string;
  motives: string[];

  // Special Requirements
  specialRequirements: string;
}

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    destination: '',
    duration: '',
    travelers: 1,
    travelDate: '',
    flightClass: 'economy',
    budget: '',
    motives: [],
    specialRequirements: ''
  });

  const destinations = [
    'Etosha National Park',
    'Skeleton Coast',
    'Damaraland',
    'Sossusvlei',
    'Swakopmund',
    'Caprivi Strip'
  ];

  const motiveOptions = [
    'Land & People',
    'Wellness & Relaxation',
    'Beach & Sea',
    'Culture',
    'Nature & Animals',
    'Sport & Adventure',
    'Culinary Arts',
    'Honeymoon',
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleMotiveToggle = (motive: string) => {
    setFormData(prev => ({
      ...prev,
      motives: prev.motives.includes(motive)
        ? prev.motives.filter(m => m !== motive)
        : [...prev.motives, motive],
    }));
  };

  return (
    <section id="book" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Book Your Safari Adventure</h2>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-red-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country of Residence*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Trip Preferences</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where would you like to go?*
                  </label>
                  <select
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How long would you like to travel?
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select duration</option>
                    <option value="7">1 week</option>
                    <option value="14">2 weeks</option>
                    <option value="21">3 weeks</option>
                    <option value="28">4 weeks</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Travel Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When would you like to travel?
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Which flight class do you prefer?
                  </label>
                  <select
                    value={formData.flightClass}
                    onChange={(e) => setFormData({ ...formData, flightClass: e.target.value as 'economy' | 'business' | 'private' })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your budget per person?
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-7000">$5,000 - $7,000</option>
                    <option value="7000+">$7,000+</option>
                  </select>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    What are the main motives of your trip? (Select multiple)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {motiveOptions.map((motive) => (
                      <button
                        key={motive}
                        type="button"
                        onClick={() => handleMotiveToggle(motive)}
                        className={`p-4 text-left rounded-lg border ${
                          formData.motives.includes(motive)
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-600'
                        }`}
                      >
                        {motive}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements or Requests
                  </label>
                  <textarea
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Any dietary requirements, accessibility needs, or special requests?"
                  />
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 ml-auto"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 ml-auto"
                >
                  Submit Booking
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
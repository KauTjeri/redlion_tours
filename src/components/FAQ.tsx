import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is the best time to visit Namibia?',
    answer: 'The best time to visit Namibia is during the dry season (May to October) when wildlife viewing is at its best. The weather is mild and animals gather around water sources, making them easier to spot.'
  },
  {
    question: 'What vaccinations do I need for Namibia?',
    answer: 'While no vaccinations are legally required to enter Namibia, it is recommended to be up-to-date with routine vaccinations. Consult your healthcare provider for personalized advice based on your medical history.'
  },
  {
    question: 'What should I pack for a safari?',
    answer: 'Essential items include lightweight, neutral-colored clothing, sturdy walking shoes, sun protection (hat, sunscreen, sunglasses), insect repellent, camera gear, and any personal medications. We will provide a detailed packing list upon booking.'
  },
  {
    question: 'Are your safaris suitable for children?',
    answer: 'Many of our safaris are family-friendly, but age restrictions may apply for certain activities. We can customize itineraries to accommodate families with children, ensuring a safe and enjoyable experience for all.'
  },
  {
    question: 'What is included in the tour price?',
    answer: 'Our tour prices typically include accommodation, meals as specified, professional guides, park fees, activities mentioned in the itinerary, and transportation. International flights, visa fees, travel insurance, and personal expenses are usually not included.'
  },
  {
    question: 'How fit do I need to be for a safari?',
    answer: 'Most of our safaris do not require exceptional fitness levels, as game viewing is primarily done from vehicles. However, some activities like dune climbing or nature walks require moderate fitness. We will clearly indicate any physical requirements for specific tours.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our safari experiences
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
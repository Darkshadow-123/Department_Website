import React from 'react';
import { motion } from 'framer-motion';

const clubs = [
  {
    name: 'Bandish',
    image: 'https://i.pinimg.com/736x/4f/1b/8a/4f1b8aac8ecddd8b339a1b6cd78cc070.jpg',
    description: 'A platform for Music enthusiasts to collaborate and innovate.'
  },
  {
    name: 'Dance Club',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=300',
    description: 'Organizing Dance events and fostering artistic talents.'
  },
  {
    name: 'Sports Club',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300',
    description: 'Promoting sports and physical fitness among students.'
  }
];

const testimonials = [
  {
    name: 'Rahul Kumar',
    batch: '2023',
    image: '#',
    quote: 'MITS provided me with the perfect platform to grow both academically and personally.'
  },
  {
    name: 'Priya Singh',
    batch: '2022',
    image: '#',
    quote: 'The exposure and opportunities at MITS helped me secure my dream job.'
  }
];

const events = [
  {
    name: ' WORKSHOP on Research Paper Writing',
    date: 'November 22, 2024',
    image: 'https://i.pinimg.com/474x/61/d5/43/61d543768333dd8b92fa427c544a68e0.jpg?w=500&h=300'
  },
  {
    name: 'Cultural Night',
    date: 'April 5, 2024',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=300'
  }
];

export default function StudentLife() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Student Life at MITS</h1>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Student Clubs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <motion.div
                key={club.name}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                  <p className="text-gray-600">{club.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.name}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-gray-600">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Student Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">Batch of {testimonial.batch}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
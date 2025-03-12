import React from 'react';
import { motion } from 'framer-motion';
import { Gallery as PhotoGallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const galleryItems = {
  'Campus Life': [
    {
      src: 'https://media.getmyuni.com/azure/college-images-test/madhav-institute-of-technology-and-science-mits-gwalior/61be5de49a31447f9aa7f183c0f0564f.jpeg',
      width: 1600,
      height: 900,
      title: 'Campus Main Building'
    },
    {
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=900',
      width: 1600,
      height: 900,
      title: 'Library'
    },
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900',
      width: 1600,
      height: 900,
      title: 'Auditorium'
    }
  ],
  'Events': [
    {
      src: 'https://i.pinimg.com/736x/07/aa/ef/07aaef97cd3d073e671c7d6cd4f778af.jpg',
      width: 1600,
      height: 900,
      title: 'Notes & Harmony'
    },
    {
      src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&h=900',
      width: 1600,
      height: 900,
      title: 'Cultural Night'
    }
  ],
  'Sports': [
    {
      src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=900',
      width: 1600,
      height: 900,
      title: 'Annual Sports Meet'
    },
    {
      src: 'https://images.unsplash.com/photo-1519925610903-381054cc2a1c?w=1600&h=900',
      width: 1600,
      height: 900,
      title: 'Basketball Tournament'
    }
  ]
};

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>

        <PhotoGallery>
          {Object.entries(galleryItems).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </PhotoGallery>
      </motion.div>
    </div>
  );
}
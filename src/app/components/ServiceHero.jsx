import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden" aria-labelledby="service-hero-title">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg2.jpg')` }}
        role="img" 
        aria-label="Beautiful floral decoration for weddings and events"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 id="service-hero-title" className="text-5xl font-bold mb-4">
            Our Floral Services in Indore, Ujjain, Dewas & Nearby Cities
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transforming moments into memories with exquisite floral designs for weddings, car decorations, mandir décor, garlands, and bouquets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

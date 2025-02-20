import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Head>
        <title>{service.name} - Premium Flower Decoration Services</title>
        <meta
          name="description"
          content={`Discover the best ${service.name} services for weddings, home decor, car floral arrangements, and events. Beautiful and fresh flower decorations at great prices!`}
        />
        <meta
          name="keywords"
          content="flower decoration, wedding flowers, home decor, car floral arrangement, event flowers, luxury floral services"
        />
      </Head>

      <motion.div
        className="bg-white shadow-lg overflow-hidden cursor-pointer rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-72 overflow-hidden">
          <img
            src={service.images[0]}
            alt={`Premium ${service.name} decoration service`}
            layout="fill"
            className="rounded-t-lg  object-cover h-full w-full"
            priority={index === 0} // Prioritize first image for performance
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/services/${service._id}`} passHref>
              <motion.button
                className="bg-pink-500 text-white px-6 py-2 text-lg font-semibold focus:outline-none rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Learn more about ${service.name} services`}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </motion.div>
    </>
  );
}

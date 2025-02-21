'use client'
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useAppContext } from './../components/AppContext';
import Link from 'next/link';
import { GiFlowerPot, GiRose, GiButterflyFlower } from 'react-icons/gi'; // Icons for decoration

export default function AboutPage() {
  const { user } = useAppContext();

  return (
    <div className="min-h-screen bg-white">
       <Head>
      {/* Page Title & Meta Description */}
      <title>About Us | Phoolwala - Floral Decoration & Wedding Services</title>
      <meta
        name="description"
        content="Learn about Phoolwala, your trusted floral decoration expert for weddings, events, car décor, bouquets, garlands, and mandir decoration in Indore, Ujjain, Dewas, Sanwer, and Mhow."
      />

      {/* SEO Keywords (Expanded) */}
      <meta
        name="keywords"
        content="about Phoolwala, flower decoration, wedding décor, event decoration, car floral decoration, premium bouquets, garlands, mandir decoration, floral event styling, luxury wedding flowers, Indore event planners, Ujjain floral decor, Dewas wedding decor, Sanwer floral services, Mhow car decoration, floral centerpieces, stage decoration, reception flowers, Indian wedding flowers"
      />

      {/* Author & Robots Meta Tags */}
      <meta name="author" content="Phoolwala" />
      <meta name="robots" content="index, follow" />

      {/* Viewport for Mobile Responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph (OG) Meta Tags for Social Media */}
      <meta property="og:title" content="About Phoolwala - Floral Decoration & Wedding Services" />
      <meta
        property="og:description"
        content="Discover how Phoolwala transforms weddings, events, and special occasions with premium floral decorations in Indore, Ujjain, Dewas, Sanwer, and Mhow."
      />
      <meta property="og:image" content="/about.jpg" />
      <meta property="og:url" content="https://flowers-three-gamma.vercel.app/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Phoolwala" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags for Social Media Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Phoolwala - Your Floral Decoration Partner" />
      <meta name="twitter:description" content="Explore how Phoolwala provides elegant floral decoration for weddings, events, and special occasions in Indore, Ujjain, Dewas, Sanwer, and Mhow." />
      <meta name="twitter:image" content="/p16.jpg" />
      <meta name="twitter:site" content="@phoolwala" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://flowers-three-gamma.vercel.app/about" />
    </Head>
      <div className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Floral <Link href={'/admin'} className="text-blue-500 underline">Elegance</Link>
        </motion.h1>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0 px-5  "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed mb-6">{user.description}</p>
            {/* Decorative Icons */}
            <div className="flex space-x-4 mt-6 md:mb-16 mb-1">
              <GiFlowerPot className="text-pink-500 text-4xl" />
              <GiRose className="text-pink-500 text-4xl" />
              <GiButterflyFlower className="text-pink-500 text-4xl" />
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 h-[600px] relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Main Image with Curved Clip Path */}
            <div className="relative w-full h-full max-h-[500px]">
              <img
                src={user.profile}
                alt="Beautiful floral wedding car decoration in Indore, Ujjain, Dewas"
                className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-lg"
              />
              {/* Overlay Image */}
              <img
                src="/p3.jpg" // Ensure correct Next.js static path
                alt="Floral decoration for weddings and events"
                className="absolute -bottom-10 sm:-left-10 -left-5 w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Additional Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            className="relative h-64"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              src="/m1.jpg" // Ensure correct Next.js static path
              alt="Floral mandir decoration in Indore"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Mandir Decoration</h3>
            </div>
          </motion.div>
          <motion.div
            className="relative h-64"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src="/p12.jpg" // Ensure correct Next.js static path
              alt="Floral car decoration in Ujjain"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Car Decoration</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

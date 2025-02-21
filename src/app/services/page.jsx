'use client'
import React, { useEffect } from "react";

import Head from "next/head";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import ServiceHero from "../components/ServiceHero";
import { useAppContext } from "../components/AppContext";

export default function ServicePage() {
  const { services, serviceIndex } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | Premium Wedding & Floral Decorations</title>
        <meta name="description" content="Discover our exclusive wedding and floral decoration services. We offer premium quality designs to make your event special." />
        <meta name="keywords" content="wedding decorations, floral services, event decor, premium flowers, luxury wedding services" />
        <meta name="author" content="Flower Elegance" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://flowers-three-gamma.vercel.app/" />
         {/* Open Graph Tags */}
        <meta property="og:title" content="Our Services | Premium Wedding & Floral Decorations" />
        <meta property="og:description" content="Discover our exclusive wedding and floral decoration services. We offer premium quality designs to make your event special." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flowers-three-gamma.vercel.app/services" />
        <meta property="og:image" content="https://flowers-three-gamma.vercel.app/p3.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Premium Wedding & Floral Decorations" />
        <meta name="twitter:description" content="Discover our exclusive wedding and floral decoration services. We offer premium quality designs to make your event special." />
        <meta name="twitter:image" content="https://flowers-three-gamma.vercel.app/p3.jpg" />
      </Head>

      <div className="min-h-screen bg-white">
        <ServiceHero />
        <div className="container mx-auto px-4 py-16">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service._id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

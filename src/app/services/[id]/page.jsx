"use client"
import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useAppContext } from "../../components/AppContext";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const { services, setServiceDetails } = useAppContext();
console.log(id);

  const [mainImage, setMainImage] = useState("/placeholder.svg");

  const service = useMemo(() => services.find((s) => s._id === id), [id, services]);

  useEffect(() => {
    if (service) {
      setMainImage(service.images?.[0] || "/placeholder.svg");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [service]);

  const handleOrderNow = (offer) => {
    if (service) {
      setServiceDetails({ ...service, selectedOffer: offer });
      router.push("/cart");
    }
  };

  if (!service) return <div className="text-center py-20 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-white py-12">
      <Head>
      {/* Dynamic Page Title for Better SEO */}
      <title>{service.name} - Premium Flower Decoration Services | Phoolwala</title>

      {/* Meta Description (Optimized for Click-Through Rate) */}
      <meta
        name="description"
        content={`Book the best ${service.name} services for weddings, home decor, car floral arrangements, and events. Experience elegant, fresh flower decorations at unbeatable prices! Serving Indore, Ujjain, Dewas, Sanwer, and Mhow.`}
      />

      {/* Expanded Keywords for Higher SEO Ranking */}
      <meta
        name="keywords"
        content="flower decoration, wedding flowers, luxury floral arrangements, home floral decor, car floral arrangement, event flower services, fresh flowers, bridal bouquet, floral centerpiece, mandap decoration, stage decor, premium flower garlands, wedding entrance decor, Indian wedding flowers, engagement floral decor, Indore flower decoration, Ujjain wedding decor, Dewas event flowers, Sanwer floral services, Mhow car flower decorations"
      />

      {/* Author & Indexing Instructions */}
      <meta name="author" content="Phoolwala" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph (OG) Meta Tags for Facebook, WhatsApp, and LinkedIn */}
      <meta property="og:title" content={`${service.name} - Premium Floral Decoration Services | Phoolwala`} />
      <meta
        property="og:description"
        content={`Get stunning ${service.name} flower decorations for weddings, events, car floral arrangements, and home decor. Serving Indore, Ujjain, Dewas, Sanwer, and Mhow.`}
      />
      <meta property="og:image" content={service.images[0]} />
      <meta property="og:url" content={`https://flowers-three-gamma.vercel.app/services/${id}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Phoolwala" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags for Social Media Sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${service.name} - Floral Decoration | Phoolwala`} />
      <meta name="twitter:description" content={`Looking for the best ${service.name} decoration services? Phoolwala offers stunning floral arrangements for weddings, events, and more.`} />
      <meta name="twitter:image" content={service.images[0]} />

      {/* Canonical URL to Prevent Duplicate Content Issues */}
      <link rel="canonical" href={`https://flowers-three-gamma.vercel.app/services/${id}`} />
    </Head>
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {service.name} - Best {service.name} Services | Phoolwala
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={mainImage}
              alt={`${service.name} - ${service.description}`}
              width={800}
              height={500}
              className="w-full h-96 object-cover rounded-lg shadow-md mb-4"
              priority
            />
            <div className="flex gap-4 overflow-x-auto pb-4">
              {service.images?.map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`${service.name} image ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover rounded cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold">About {service.name}</h2>
            <p className="text-gray-700">{service.description}</p>

            <h2 className="text-2xl font-semibold">Affordable Pricing</h2>
            <p className="text-3xl text-pink-500 font-bold">{service.price}</p>

            <motion.button
              className="bg-pink-500 text-white px-6 py-3 w-full rounded-md shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOrderNow(null)}
            >
              Book {service.name} Now
            </motion.button>

            <motion.button
              className="border border-pink-500 text-pink-500 px-6 py-3 w-full rounded-md shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
            >
              Go Back
            </motion.button>
          </motion.div>
        </div>

        {service.offers?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Exclusive Offers on {service.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.offers.map((offer, index) => (
                <motion.div
                  key={index}
                  className="border p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                  <p className="text-2xl text-pink-500 font-bold mb-2">{offer.price}</p>
                  <p className="text-gray-700 mb-4 min-h-14">{offer.description}</p>
                  <motion.button
                    className="bg-pink-500 text-white px-4 py-2 w-full rounded-md shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOrderNow(offer)}
                  >
                    Select Offer
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

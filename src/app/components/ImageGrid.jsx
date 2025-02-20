import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../components/AppContext";

export default function ImageGrid({ images }) {
  const router = useRouter();
  const { setProductDetails } = useAppContext();

  const handleBuyNow = (image) => {
    setProductDetails(image); // Set product details in context
    router.push("/cart"); // Navigate to CartPage
  };

  return (
    <div>
      <Head>
        <title>Flower Decoration & Wedding Car Décor | Buy Online</title>
        <meta
          name="description"
          content="Find premium flower decoration services for weddings, events, and car décor. Learn how to book floral decor, where to buy, and how much it costs."
        />
        <meta
          name="keywords"
          content="how to book flower decoration, where to buy wedding flowers, how much flower decoration costs, event floral decor, wedding car decoration, mandap decor, bouquet delivery, garland purchase, venue floral setup, Indore, Ujjain, Dewas, Sanwer, Mhow"
        />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={image._id}
            className="bg-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.005, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.description || "Flower Decoration"}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.button
                  className="bg-pink-500 text-white px-4 py-2 mr-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleBuyNow(image)}
                >
                  Order Now
                </motion.button>
                <motion.button
                  className="text-white hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={24} />
                </motion.button>
              </div>
            </motion.div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{image.name}</h3>
              <p className="text-pink-500 font-bold">{image.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

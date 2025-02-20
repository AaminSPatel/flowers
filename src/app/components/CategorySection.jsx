import React from "react";
import { motion } from "framer-motion";

export default function CategorySection({ categories, onCategoryClick }) {
  return (
    <section aria-label="Category Section">
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6 my-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* "All Category" Button */}
        <CategoryButton
          name="All Category"
          image={`/p16.jpg`}
          onClick={() => onCategoryClick(null)}
        />

        {/* Dynamic Category Buttons */}
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            name={category.name}
            image={category.image}
            onClick={() => onCategoryClick(category.id)}
          />
        ))}
      </motion.div>
    </section>
  );
}

// Reusable Category Button Component
const CategoryButton = ({ name, image, onClick }) => (
  <motion.button
    className="cursor-pointer w-36 h-10 bg-white backdrop-blur-md rounded-3xl flex justify-start items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    aria-label={`Select ${name} category`}
  >
    <div className="text-pink-500 text-4xl h-10 w-10 rounded-full overflow-hidden">
      <img
        src={image}
        alt={`${name} category image`} // Add descriptive alt text
        width={40} // Set width and height for the image
        height={40}
        className="object-cover"
        loading="lazy" // Lazy load the image
      />
    </div>
    <p className="text-sm font-semibold text-gray-700">{name}</p>
  </motion.button>
);
"use client"; // Mark this as a Client Component
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head"; // Replace react-helmet-async with next/head
import CategorySection from "../components/CategorySection";
import ImageGrid from "../components/ImageGrid";
import { useAppContext } from "../components/AppContext";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const gridRef = useRef(null);
  const { products, categories,  productIndex } = useAppContext();
  const [galleryImages, setGalleryImages] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    //setGalleryImages([]);
    console.log(productIndex,'index');
    if(productIndex !== null){
 if (productIndex.length > 0 ) {
      setGalleryImages(productIndex);
      console.log('one');
    } 
    }
    else  {
      setGalleryImages(products);
      console.log('two');
    }
    window.scrollTo(0, 0);
  }, [products, productIndex]);

  const filteredImages = selectedCategory
    ? galleryImages.filter((img) => img.category === selectedCategory)
    : galleryImages;

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <Head>
        <title>Best Flower Decorations for Weddings, Home & Car | Buy Now</title>
        <meta
          name="description"
          content="Find the best floral decorations for weddings, home decor, and car decoration. Learn where to buy flowers, how much they cost, and how to choose the best floral arrangements."
        />
        <meta
          name="keywords"
          content="flower decorations, wedding flowers, home decor, car decorations, floral arrangements, where to buy flowers, how to decorate with flowers, best flower decorations, flower decoration cost"
        />
        <meta name="author" content="Phoolwala" />
        <meta property="og:title" content="Best Flower Decorations for Weddings, Home & Car | Buy Now" />
        <meta
          property="og:description"
          content="Find the best floral decorations for weddings, home decor, and car decoration. Learn where to buy flowers, how much they cost, and how to choose the best floral arrangements."
        />
        <meta property="og:image" content="/gallery-image.jpg" /> {/* Add a relevant image */}
        <meta property="og:url" content="https://www.phoolwala.com/gallery" />
        <link rel="canonical" href="https://www.phoolwala.com/gallery" />
        <script type="application/ld+json">
  {`
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Flower Decorations for Weddings, Home & Car | Buy Now",
    "description": "Find the best floral decorations for weddings, home decor, and car decoration. Learn where to buy flowers, how much they cost, and how to choose the best floral arrangements.",
    "url": "https://www.phoolwala.com/gallery",
    "image": "https://www.phoolwala.com/gallery-image.jpg"
  }
  `}
</script>
      </Head>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center my-6 popin">
          Where to Buy the Best Flower Decorations for Weddings, Home, and Cars
        </h1>
        <p className="text-center text-gray-600 mb-4 px-6">
          Looking for exquisite floral decorations? Discover how to choose the best flower setups for weddings, home décor, car decorations, and special events. Explore premium floral arrangements and find out how much different flower decorations cost.
        </p>

        {/* Category Section */}
        <CategorySection
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />

        {/* Image Grid */}
        <div ref={gridRef} className="mb-16">
          <ImageGrid images={filteredImages} />
        </div>
      </div>
    </div>
  );
}
"use client"; // Mark this as a Client Component
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../components/AppContext";
import Head from "next/head"; // For SEO

export default function CartPage() {
  const { productDetails, serviceDetails, path, render, setRender } = useAppContext();

  // Initialize form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    deliveryDate: "",
    specialInstructions: "",
    totalAmount: (productDetails ? productDetails.price : serviceDetails?.price) || 0, // Handle undefined serviceDetails
    orderStatus: "Pending",
    orderDate: new Date().toISOString(),
    orderType: productDetails ? "Product" : "Service",
  });

  // Scroll to top and set page title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Order Flowers & Wedding Decor | Secure Checkout";
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${path}orders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productId: productDetails ? productDetails.id : null,
          serviceId: serviceDetails ? serviceDetails.id : null,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setRender(render + 1);
        alert("Order placed successfully!");
      } else {
        throw new Error("Failed to place order");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Add SEO Metadata */}
      <Head>
        <title>Order Flowers & Wedding Decor | Secure Checkout</title>
        <meta
          name="description"
          content="Place your order for flowers and wedding decor with secure checkout. Fast delivery and excellent customer service."
        />
        <meta name="keywords" content="flowers, wedding decor, order, secure checkout" />
        <meta property="og:title" content="Order Flowers & Wedding Decor | Secure Checkout" />
        <meta
          property="og:description"
          content="Place your order for flowers and wedding decor with secure checkout. Fast delivery and excellent customer service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/cart" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
            Secure Checkout - {productDetails ? productDetails.name : serviceDetails?.name}
          </motion.h1>

          <div className="lg:flex lg:space-x-8">
            {/* Product/Service Details */}
            <motion.div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="bg-white px-6 py-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {productDetails ? productDetails.name : serviceDetails?.name}
                </h3>
                <img
                  src={productDetails ? productDetails.image : serviceDetails?.images?.[0] || "/placeholder.svg"}
                  alt={`Order ${productDetails ? productDetails.name : serviceDetails?.name}`}
                  className="w-full h-64 object-cover rounded-md shadow-md lazyload"
                  loading="lazy"
                />
                <p className="text-gray-600 text-lg mb-4">
                  {productDetails ? productDetails.description : serviceDetails?.description}
                </p>
                <span className="text-2xl font-bold text-gray-800">
                  ${formData.totalAmount}
                </span>
              </div>
            </motion.div>

            {/* Billing Information Form */}
            <motion.div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white px-8 py-5 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800">Billing Information</h2>
                <div className="space-y-6">
                  {["name", "email", "phone", "address", "zipcode", "deliveryDate", "specialInstructions"].map((field) => (
                    <div key={field} className="relative">
                      <input
                        type={field === "deliveryDate" ? "date" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        required={field !== "specialInstructions"}
                        className="w-full border-b-2 border-gray-600 bg-transparent py-2 px-1 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                      <label
                        htmlFor={field}
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm"
                      >
                        {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      </label>
                    </div>
                  ))}
                </div>
                <motion.button
                  type="submit"
                  className="mt-8 w-full bg-pink-500 text-white py-2 px-4 hover:bg-pink-600 transition-colors text-lg font-semibold"
                >
                  Place Order
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

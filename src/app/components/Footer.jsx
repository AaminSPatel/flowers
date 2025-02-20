"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { useAppContext } from './AppContext';

export default function Footer() {
  const { user,render , path } = useAppContext();
  const [services,setServices] = useState([])
  useEffect(()=>{
    // Fetch services
    const fetchServices = async () => {
      try{

        const servicesResponse = await fetch(`${path}services`);
        if (!servicesResponse.ok) throw new Error("Failed to fetch services");
        const servicesData = await servicesResponse.json();
        setServices(servicesData)
        }
        catch(err){
          console.error("Error in Service fetching at footer",err);
        }
      }

      fetchServices();
  },[render])
  return (
    <footer className="bg-gray-800 text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 px-2">
            <h1 className="text-2xl font-bold mb-4">{user.brand} - Premium Flower & Wedding Car Decoration</h1>
            <p className="text-gray-400">Bringing beauty to your special moments with exquisite floral arrangements and elegant car decor.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-pink-500 transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-pink-500 transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-pink-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-pink-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={service._id}><Link href={`/services/${service._id}`} className="text-gray-400 hover:text-pink-500 transition-colors">{service.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Follow Us on Social Media</h2>
            <nav aria-label="Social Media Links">
              <div className="flex space-x-4">
                <a href={user.fbLink} className="text-white hover:text-pink-500 transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href={user.twLink} className="text-white hover:text-pink-500 transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href={user.instaLink} className="text-white hover:text-pink-500 transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href={user.pintLink} className="text-white hover:text-pink-500 transition-colors" aria-label="Pinterest" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
              </div>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {user.brand} - Expert Floral & Car Decoration Services. All rights reserved.</p>
          <nav className="mt-2" aria-label="Legal Links">
            <Link href="/privacy" className="text-gray-400 hover:text-pink-500 transition-colors mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-pink-500 transition-colors">Terms & Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

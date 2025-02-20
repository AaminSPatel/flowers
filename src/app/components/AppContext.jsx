'use client'
import React, { createContext, useState, useContext, useEffect } from "react";
const AppContext = createContext();

const initialCartItems = []; // Set to empty as we only want to show the selected product

const categories = [
  {
    id: "Mandir Design",
    name: "Mandir",
    image: "/img/mandir.png",
  },
  {
    id: "Marriage & Event Management",
    name: "Wedding",
    image: "/img/marriage.png",
  },
  { id: "Car Decoration", name: "Car", image: "/img/cardecor.png" },
  { id: "Garlands", name: "Garlands", image: "/img/garlands.png" },
  { id: "Bouquets", name: "Bouquets", image: "/img/bouquet.png",},
  { id: "Sehra", name: "Sehra", image: "/img/sehra.png" },
];

// Create the provider component
export const AppProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [productDetails, setProductDetails] = useState();
  const [serviceDetails, setServiceDetails] = useState();
 // const navigate = useNavigate();
  let strin = 'http://localhost:5000' 
  let local = 0
  if(local){
    strin = 'http://localhost:5000'
  }
  else{
    strin = 'https://phool-back.vercel.app'
  }
  let path = `${strin}/api/`
  let paths =`${strin}` 
  let pathp = `${strin}/`
  const [user, setUser] = useState({
    name: "Aamin Patel",
    email: "amin@gmail.com",
    id: "",
    mobile: 9030209080,
    address: "23, Ujjain, India",
    profile: "./p16.jpg",
    instaLink: "",
    fbLink: "",
    twLink: "",
    googleLink: "",
    pintLink: "",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117377.0721605961!2d75.71481884978753!3d23.168977217034044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2z4KSJ4KSc4KWN4KSc4KWI4KSoLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1740054733085!5m2!1shi!2sin",
    description: `At Floral Elegance, we bring your floral dreams to life. With over 20 years of experience, our team of expert florists specializes in creating stunning arrangements for weddings, events, and unique car decorations. We pride ourselves on using only the freshest, highest-quality flowers to ensure that your special day is nothing short of perfection. Our innovative designs and attention to detail set us apart, making Floral Elegance the go-to choice for those seeking extraordinary floral experiences.`,
    brand: "Floral Elegance",
    brandLogo: "./logo.png",
    time1: "Monday - Friday: 9:00 AM - 6:00 PM",
    time2: "Saturday: 10:00 AM - 4:00 PM",
    time3: "Sunday: Closed",
  });
const [render,setRender] = useState(0);
  // Fetch data from backend
  // Fetch data from backend
useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch services
      const servicesResponse = await fetch(`${path}services`);
      if (!servicesResponse.ok) throw new Error("Failed to fetch services");
      const servicesData = await servicesResponse.json();

      // Fetch products
      const productsResponse = await fetch(`${path}products`);
      if (!productsResponse.ok) throw new Error("Failed to fetch products");
      const productsData = await productsResponse.json();

      // Fetch orders
      const ordersResponse = await fetch(`${path}orders`);
      if (!ordersResponse.ok) throw new Error("Failed to fetch orders");
      const ordersData = await ordersResponse.json();

      // Fetch customers
      const customersResponse = await fetch(`${path}customers`);
      if (!customersResponse.ok) throw new Error("Failed to fetch customers");
      const customersData = await customersResponse.json();

      // Update state with fetched data
      setServices(servicesData);
      setProducts(productsData);
      setOrders(ordersData);
      setCustomers(customersData);

      console.log(servicesData, productsData, "customersData = ", ordersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [render]);


  const [serviceIndex, setServiceIndex] = useState(null)
  const [productIndex, setProductIndex] = useState(null)

  // Search functionality
  useEffect(() => {
    // Search in products first
    const productInde = products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (productInde.length > 0) {
      setProductIndex(productInde)
      //navigate(`/products/${products[productInde]._id}`);
      return;
    }
    
  
    // If not found in products, search in services
    const serviceInde = services.findIndex(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (serviceInde !== -1) {
      setServiceIndex(serviceInde)
      //navigate(`/services/${services[serviceInde]._id}`);
    }
  //  setSearchResults(results);
  }, [searchTerm, services, products]);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  
  };
  
  // Value object to be provided to consumers
  const value = {
    services,
    products,
    searchTerm,
    searchResults,
    updateSearchTerm,
    initialCartItems,
    serviceDetails,
    setServiceDetails,
    user,render,setRender,
    categories,
    productDetails,
    setProductDetails,path,paths,pathp,serviceIndex,
    productIndex,
    orders,customers
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

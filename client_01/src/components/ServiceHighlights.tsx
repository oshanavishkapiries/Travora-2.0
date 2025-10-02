import { Card, CardContent } from "./ui/card";
import { MapPin, Calendar, Car, Plane } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Image URLs (replace with your actual assets)
const images = [
  "https://blog.surabilankatravel.com/wp-content/uploads/2023/04/Untitled-design-4.jpg",
  "https://t4.ftcdn.net/jpg/05/25/99/07/360_F_525990766_OKktXosEFG9McFRUNxHgpEYaundbL4N8.jpg",
  "https://bokeradventure.com/wp-content/uploads/2021/10/Safari-4.webp",
  "https://res.cloudinary.com/dtljonz0f/image/upload/c_limit,w_1920/f_auto/q_auto/singapore_changi_airport_transfer_zggt3m?_a=BAVARSDW0",
];

const services = [
  {
    id: 1,
    title: "Attractions Explore",
    description:
      "Discover Sri Lanka's most breathtaking destinations including ancient temples, pristine beaches, lush tea plantations, and UNESCO World Heritage sites. Our expert guides will take you to hidden gems and cultural landmarks that showcase the island's rich history and natural beauty.",
    icon: MapPin,
    image:
      "https://blog.surabilankatravel.com/wp-content/uploads/2023/04/Untitled-design-4.jpg",
    color: "from-blue-500 to-cyan-500",
    route: "/attractions",
  },
  {
    id: 2,
    title: "Tour Plans",
    description:
      "Experience meticulously crafted tour packages designed for every type of traveler. From cultural heritage tours and wildlife safaris to adventure expeditions and romantic getaways, we create personalized itineraries that ensure unforgettable memories and authentic Sri Lankan experiences.",
    icon: Calendar,
    image:
      "https://nzcareerexplorer.com/wp-content/uploads/2024/02/Health-Safety-for-NZ-Tour-Guides-.jpeg",
    color: "from-green-500 to-emerald-500",
    route: "/tours",
  },
  {
    id: 3,
    title: "Vehicle Rent",
    description:
      "Choose from our extensive fleet of modern, well-maintained vehicles including luxury sedans, spacious SUVs, comfortable vans, and adventure-ready 4WDs. All vehicles come with professional drivers, comprehensive insurance, and 24/7 support for safe and comfortable journeys across Sri Lanka.",
    icon: Car,
    image:
      "https://bokeradventure.com/wp-content/uploads/2021/10/Safari-4.webp",
    color: "from-orange-500 to-red-500",
    route: "/vehicles",
  },
  {
    id: 4,
    title: "Airport Transfers",
    description:
      "Enjoy seamless airport transfers with our premium service featuring meet-and-greet assistance, comfortable vehicles, and professional drivers. We provide real-time flight tracking, flexible scheduling, and door-to-door service ensuring a stress-free start and end to your Sri Lankan adventure.",
    icon: Plane,
    image:
      "https://res.cloudinary.com/dtljonz0f/image/upload/c_limit,w_1920/f_auto/q_auto/singapore_changi_airport_transfer_zggt3m?_a=BAVARSDW0",
    color: "from-purple-500 to-pink-500",
    route: "/contact",
  },
];

const ServiceHighlights = () => {
  const navigate = useNavigate();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <div className="max-w-8xl px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images Grid with Size Variations */}
          <motion.div
            className="relative grid grid-cols-2 gap-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="row-span-2 flex flex-col gap-2 mt-16">
              {/* Top Left - Large Square Image (spans 2 rows) */}{" "}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={images[0]}
                  alt="Sri Lankan cultural heritage and ancient sites"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              {/* Top Right - Landscape Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src={images[1]}
                  alt="Tour guide services and travel planning"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>

            <div className="row-span-2 flex flex-col gap-2">
              {" "}
              {/* Bottom Left - Large Square Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src={images[2]}
                  alt="Wildlife safari and adventure tours"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              {/* Bottom Right - Landscape Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={images[3]}
                  alt="Sri Lankan cultural heritage and ancient sites"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-coral-orange font-semibold text-sm uppercase tracking-wider">
                Tourism in Sri Lanka
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Professional Travel Services
            </motion.h2>

            {/* Services Text Slider */}
            <motion.div
              className="relative max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[220px] md:h-[160px] overflow-hidden">
                {services.map((service, index) => {
                  return (
                    <motion.div
                      key={service.id}
                      className={`absolute inset-0 flex flex-col justify-center ${
                        index === currentServiceIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: index === currentServiceIndex ? 1 : 0,
                        y: index === currentServiceIndex ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Slider Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex
                        ? "bg-coral-orange w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary text-white hover:opacity-80 font-semibold px-8 py-3 text-lg rounded-full"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;

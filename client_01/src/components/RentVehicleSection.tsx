import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Fuel,
  Users,
  Settings,
  Star,
  ArrowLeft,
  ArrowRight,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RentVehicleSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const vehicles = [
    {
      id: 1,
      model: "Toyota Prius",
      type: "Sedan",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      specs: {
        fuel: "80L",
        transmission: "Manual",
        capacity: "5 People",
      },
      price: "Rs 12,000",
      priceUnit: "day",
      rating: 4.7,
      categoryLabel: "COMPACT CARS",
    },
    {
      id: 2,
      model: "Honda Civic",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      specs: {
        fuel: "60L",
        transmission: "Manual",
        capacity: "5 People",
      },
      price: "Rs 10,000",
      priceUnit: "day",
      rating: 4.5,
      categoryLabel: "ECONOMY CARS",
    },
    {
      id: 3,
      model: "Toyota Hiace",
      type: "Van",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      specs: {
        fuel: "100L",
        transmission: "Manual",
        capacity: "9 People",
      },
      price: "Rs 18,000",
      priceUnit: "day",
      rating: 4.8,
      categoryLabel: "FAMILY VANS",
    },
    {
      id: 4,
      model: "BMW X5",
      type: "SUV",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      specs: {
        fuel: "90L",
        transmission: "Automatic",
        capacity: "7 People",
      },
      price: "Rs 25,000",
      priceUnit: "day",
      rating: 4.9,
      categoryLabel: "LUXURY SUVS",
    },
    {
      id: 5,
      model: "Mitsubishi Pajero",
      type: "4WD",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      specs: {
        fuel: "95L",
        transmission: "Manual",
        capacity: "8 People",
      },
      price: "Rs 22,000",
      priceUnit: "day",
      rating: 4.6,
      categoryLabel: "OFF-ROAD VEHICLES",
    },
    {
      id: 6,
      model: "Mercedes-Benz S-Class",
      type: "Luxury",
      image:
        "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&h=300&fit=crop",
      specs: {
        fuel: "85L",
        transmission: "Automatic",
        capacity: "5 People",
      },
      price: "Rs 35,000",
      priceUnit: "day",
      rating: 5.0,
      categoryLabel: "LUXURY SEDANS",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="vehicles" className="py-4 px-8 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4">
        {/* White Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl py-8 md:py-12 px-8 md:px-12 shadow-lg"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-coral-orange text-sm font-semibold uppercase tracking-wide mb-3"
            >
              drive by yourself
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 font-serif"
            >
              Vehicle Rentals
            </motion.h2>
          </div>

          {/* Horizontal Scrollable Cards Container */}
          <div className="relative">
            <motion.div
              ref={scrollContainerRef}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4 pe-4 rounded-s-2xl md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {vehicles.slice(0, 6).map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  variants={itemVariants}
                  // ✅ Show exactly 5 cards by using 1/5 width
                  className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 snap-start"
                  whileHover={{ y: -3 }}
                >
                  <Link to={`/vehicle/${vehicle.id}`} className="block group">
                    <div>
                      {/* Image */}
                      <div className="relative mb-3">
                        <motion.img
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          src={vehicle.image}
                          alt={vehicle.model}
                          className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
                        />
                        {/* Rating Badge */}
                        <div className="absolute top-3 left-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1"
                          >
                            <Star
                              className="text-yellow-400"
                              size={12}
                              fill="currentColor"
                            />
                            {vehicle.rating}
                          </motion.div>
                        </div>
                        {/* Type Badge */}
                        <div className="hidden sm:block absolute top-3 right-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.1 }}
                            className="bg-coral-orange text-white px-2 py-1 rounded-lg text-xs font-medium"
                          >
                            {vehicle.type}
                          </motion.div>
                        </div>
                      </div>

                      {/* Category Label */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="text-coral-orange text-[10px] font-semibold uppercase tracking-wider mb-1"
                      >
                        {vehicle.categoryLabel}
                      </motion.p>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-coral-orange transition-colors duration-200 line-clamp-2 mb-2"
                      >
                        {vehicle.model}
                      </motion.h3>

                      {/* Specs */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="text-[11px] text-gray-500 mb-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Users size={11} />
                            <span>{vehicle.specs.capacity}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Settings size={11} />
                            <span>{vehicle.specs.transmission}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Price + Button */}
                      <div className="flex justify-between items-center mt-auto">
                        <div>
                          <span className="text-base font-bold text-slate-900">
                            Rs. {vehicle.price}
                          </span>
                          <span className="text-xs text-slate-500">
                            /{vehicle.priceUnit}
                          </span>
                        </div>
                        <Button className="hidden sm:block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-0.5">
                          View
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex flex-col me-[14%] sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
              {/* See All Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link to="/vehicles">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="rounded-full border-coral-orange text-coral-orange hover:bg-coral-orange hover:text-coral-orange-foreground transition-colors duration-200 px-6 py-2"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      See all vehicles
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Arrow Navigation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollLeft}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-coral-orange hover:bg-coral-orange hover:text-white transition-all duration-200 group"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </motion.button>

                <div className="w-8 h-px bg-gray-300"></div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollRight}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-coral-orange hover:bg-coral-orange hover:text-white transition-all duration-200 group"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentVehicleSection;

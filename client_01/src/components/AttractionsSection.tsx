import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowLeft, ArrowRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AttractionsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filters = [
    "All",
    "Beaches",
    "Culture",
    "Cities",
    "Mountains",
    "Leisure",
  ];

  const attractions = [
    {
      id: 1,
      title: "Nine Arch Bridge",
      description:
        "A stunning architectural marvel surrounded by lush tea plantations and tropical forests.",
      location: "Ella, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/106/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL SITES",
    },
    {
      id: 2,
      title: "Mirissa Beach",
      description:
        "Golden sandy beaches perfect for whale watching and pristine sunset views.",
      location: "Mirissa, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/111/1200/700",
      category: "Beaches",
      categoryLabel: "COASTAL DESTINATIONS",
    },
    {
      id: 3,
      title: "Sigiriya Rock",
      description:
        "Ancient rock fortress offering breathtaking panoramic views and historical significance.",
      location: "Sigiriya, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/120/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL SITES",
    },
    {
      id: 4,
      title: "Kandy City",
      description:
        "Cultural capital featuring the sacred Temple of the Tooth and colonial architecture.",
      location: "Kandy, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/128/1200/700",
      category: "Cities",
      categoryLabel: "HERITAGE CITIES",
    },
    {
      id: 5,
      title: "Adam's Peak",
      description:
        "Sacred mountain offering spectacular sunrise views and spiritual significance.",
      location: "Central Province, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/130/1200/700",
      category: "Mountains",
      categoryLabel: "MOUNTAIN PEAKS",
    },
    {
      id: 6,
      title: "Galle Fort",
      description:
        "Historic Dutch colonial fortress with charming cobblestone streets and ocean views.",
      location: "Galle, Sri Lanka",
      rating: 4.6,
      image: "https://picsum.photos/id/135/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL SITES",
    },
  ];

  const filteredAttractions =
    activeFilter === "All"
      ? attractions
      : attractions.filter(
          (attraction) => attraction.category === activeFilter
        );

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const filterVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section id="attractions" className="py-4 px-8 bg-gray-50">
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
              Must-See Attractions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 font-serif"
            >
              Sri Lankan Destinations
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
              {attractions.slice(0, 6).map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  variants={itemVariants}
                  className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 snap-start"
                  whileHover={{ y: -3 }}
                >
                  <Link
                    to={`/attraction/${attraction.id}`}
                    className="block group"
                  >
                    <div className="">
                      {/* Image */}
                      <div className="relative mb-3">
                        <motion.img
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          src={attraction.image}
                          alt={attraction.title}
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
                            {attraction.rating}
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
                        {attraction.categoryLabel}
                      </motion.p>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-coral-orange transition-colors duration-200 line-clamp-2 mb-2"
                      >
                        {attraction.title}
                      </motion.h3>

                      {/* View Button */}
                      <div className="hidden sm:flex justify-end mt-auto">
                        <Button className="rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-0.5">
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
                <Link to="/attractions">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="rounded-full border-coral-orange text-coral-orange hover:bg-coral-orange hover:text-coral-orange-foreground transition-colors duration-200 px-6 py-2"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      See all destinations
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

export default AttractionsSection;

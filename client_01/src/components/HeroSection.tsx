import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    "https://images.pexels.com/photos/1998436/pexels-photo-1998436.jpeg",
    "https://images.pexels.com/photos/320003/pexels-photo-320003.jpeg",
    "https://images.pexels.com/photos/11981621/pexels-photo-11981621.jpeg",
    "https://wallpapercat.com/w/full/7/8/8/639817-3072x2051-desktop-hd-sri-lanka-background.jpg",
    "https://images.pexels.com/photos/30379319/pexels-photo-30379319.jpeg",
  ];

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-[60vh] md:h-hero flex items-center justify-center overflow-hidden">
      {/* Background Image Switcher */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 hero-overlay"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-background px-4 max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
          }}
          className="text-5xl text-white md:text-7xl font-bold max-md:mt-16 mb-8 drop-shadow-lg"
        >
          The next travel is your best travel.
        </motion.h1>

        {/* Primary CTA */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
          }}
          className="mb-12"
        >
          <Link to="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="lg" className="text-lg">
                <Phone size={20} /> Call Us Now
              </Button>
            </motion.div>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;

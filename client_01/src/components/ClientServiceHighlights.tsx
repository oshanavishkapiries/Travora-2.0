import { useState, useEffect } from "react";
import { Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ClientServiceHighlights = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image array for auto-switching gallery
  const galleryImages = [
    {
      src: "https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/df807a3b-c26f-4e57-bad3-b4192c3d1b8c.png",
      alt: "Parasailing over tropical waters with city skyline",
      location: "Tropical Adventure",
    },
    {
      src: "https://travelprofessionalnews.com/wp-content/uploads/2019/09/Oasis-Travel-Network-Feature-for-Travel-Agents.jpg",
      alt: "Beautiful beach with crystal clear water",
      location: "Beach Paradise",
    },
    {
      src: "https://heymondo.com/blog/wp-content/uploads/2021/03/shutterstock_757552030_compressed.jpg",
      alt: "Traditional boat on serene river",
      location: "Cultural Journey",
    },
    {
      src: "https://blog.vincentvacations.com/wp-content/uploads/2023/11/get-more-clients-768x576.jpg",
      alt: "Ancient temple architecture",
      location: "Heritage Sites",
    },
  ];

  // Auto-cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // Switch image every 4 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-primary/10">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content - Award/Achievement Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            {/* Award Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <Trophy size={16} className="text-slate-900" />
              </div>
              <span className="font-semibold text-sm text-slate-700">2025</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Travellers'
              <br />
              <span className="text-blue-500">Choice</span>
              <br />
              Best Client Support
              <br />
              in Sri Lanka
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are proud to have a strong relationship with our clients and we
              are committed to providing the best service to our clients.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 font-semibold px-8 py-3 text-lg rounded-full"
              >
                See Our Clients
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Services Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Hero Image - Auto-Switching Gallery */}
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {/* Auto-switching Images - No Animation */}
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />

              {/* Image Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold drop-shadow-lg">
                  {galleryImages[currentImageIndex].location}
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md">
                  {galleryImages[currentImageIndex].alt}
                </p>
              </div>

              {/* Gallery Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-white/80 w-full"></div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-4 right-4 bg-gradient-to-r from-yellow-100 via-white to-yellow-50 
             rounded-3xl p-5 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Stars Row */}
                <div className="flex gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Rating Value */}
                <div className="text-2xl font-extrabold text-slate-900 mb-1">
                  4.9
                </div>

                {/* Reviews */}
                <div className="text-sm font-medium text-slate-600">
                  50k+ Reviews
                </div>

                {/* Badge */}
                {/* <div
                  className="mt-2 inline-block px-3 py-1 text-xs font-semibold 
                    bg-yellow-400 text-white rounded-full shadow-sm"
                >
                  ⭐ Top Rated
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientServiceHighlights;

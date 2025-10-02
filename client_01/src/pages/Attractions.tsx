import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Attractions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayedItems, setDisplayedItems] = useState(6);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset displayed items when filter changes
  useEffect(() => {
    setDisplayedItems(6);
  }, [activeFilter]);

  const filters = [
    "All",
    "Beaches",
    "Culture",
    "Cities",
    "Mountains",
    "Leisure",
    "Wildlife",
    "Adventure",
  ];

  // Extended attractions data - in a real app, this would come from an API
  const allAttractions = [
    {
      id: 1,
      title: "Nine Arch Bridge",
      description:
        "A stunning architectural marvel surrounded by lush tea plantations and tropical forests. This iconic railway bridge offers breathtaking views and is one of the most photographed spots in Sri Lanka.",
      location: "Ella, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/106/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL HERITAGE",
      size: "large",
    },
    {
      id: 2,
      title: "Mirissa Beach",
      description:
        "Golden sandy beaches perfect for whale watching and pristine sunset views. Experience the ultimate coastal paradise.",
      location: "Mirissa, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/111/1200/700",
      category: "Beaches",
      categoryLabel: "BEACHES & SURF",
      size: "medium",
    },
    {
      id: 3,
      title: "Sigiriya Rock",
      description:
        "Ancient rock fortress offering breathtaking panoramic views and historical significance. A UNESCO World Heritage site that stands as a testament to ancient Lankan engineering.",
      location: "Sigiriya, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/120/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL HERITAGE",
      size: "large",
    },
    {
      id: 4,
      title: "Yala National Park",
      description:
        "Premier wildlife destination famous for leopards, elephants, and diverse bird species. Experience nature at its finest.",
      location: "Yala, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/121/1200/700",
      category: "Wildlife",
      categoryLabel: "WILDLIFE ENCOUNTERS",
      size: "medium",
    },
    {
      id: 5,
      title: "Galle Fort",
      description:
        "UNESCO World Heritage site showcasing Dutch colonial architecture and maritime history.",
      location: "Galle, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/122/1200/700",
      category: "Culture",
      categoryLabel: "CULTURAL HERITAGE",
      size: "small",
    },
    {
      id: 6,
      title: "Unawatuna Beach",
      description:
        "Crescent-shaped bay with calm waters, perfect for swimming and snorkeling.",
      location: "Unawatuna, Sri Lanka",
      rating: 4.6,
      image: "https://picsum.photos/id/123/1200/700",
      category: "Beaches",
      categoryLabel: "BEACHES & SURF",
      size: "medium",
    },
    {
      id: 7,
      title: "Adam's Peak",
      description:
        "Sacred mountain pilgrimage site offering spectacular sunrise views from the summit. A spiritual journey that connects you with centuries of tradition and breathtaking natural beauty.",
      location: "Nallathanniya, Sri Lanka",
      rating: 4.9,
      image: "https://picsum.photos/id/124/1200/700",
      category: "Mountains",
      categoryLabel: "MOUNTAIN ADVENTURES",
      size: "large",
    },
    {
      id: 8,
      title: "Colombo City Center",
      description:
        "Vibrant capital city with modern shopping, dining, and cultural attractions.",
      location: "Colombo, Sri Lanka",
      rating: 4.5,
      image: "https://picsum.photos/id/125/1200/700",
      category: "Cities",
      categoryLabel: "URBAN EXPLORATION",
      size: "small",
    },
    {
      id: 9,
      title: "Kandy Lake",
      description:
        "Serene artificial lake in the heart of the cultural capital, surrounded by hills.",
      location: "Kandy, Sri Lanka",
      rating: 4.6,
      image: "https://picsum.photos/id/126/1200/700",
      category: "Leisure",
      categoryLabel: "PEACEFUL RETREATS",
      size: "medium",
    },
    {
      id: 10,
      title: "Hikkaduwa Beach",
      description:
        "Popular surf destination with vibrant coral reefs and lively beach culture.",
      location: "Hikkaduwa, Sri Lanka",
      rating: 4.7,
      image: "https://picsum.photos/id/127/1200/700",
      category: "Beaches",
      categoryLabel: "BEACHES & SURF",
      size: "small",
    },
    {
      id: 11,
      title: "Horton Plains",
      description:
        "Unique ecosystem with cloud forests, waterfalls, and the famous World's End cliff. An otherworldly landscape that showcases Sri Lanka's incredible biodiversity and natural wonders.",
      location: "Nuwara Eliya, Sri Lanka",
      rating: 4.8,
      image: "https://picsum.photos/id/128/1200/700",
      category: "Mountains",
      categoryLabel: "MOUNTAIN ADVENTURES",
      size: "large",
    },
    {
      id: 12,
      title: "Bentota Adventure Sports",
      description:
        "Thrilling water sports including jet skiing, windsurfing, and river safaris.",
      location: "Bentota, Sri Lanka",
      rating: 4.5,
      image: "https://picsum.photos/id/129/1200/700",
      category: "Adventure",
      categoryLabel: "ADVENTURE SPORTS",
      size: "medium",
    },
  ];

  // Filter attractions based on active filter
  const filteredAttractions =
    activeFilter === "All"
      ? allAttractions
      : allAttractions.filter(
          (attraction) => attraction.category === activeFilter
        );

  // Get currently displayed attractions
  const currentAttractions = filteredAttractions.slice(0, displayedItems);
  const hasMoreItems = displayedItems < filteredAttractions.length;

  // Infinite scroll functionality
  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreItems) {
          setLoading(true);
          setTimeout(() => {
            setDisplayedItems((prev) =>
              Math.min(prev + 6, filteredAttractions.length)
            );
            setLoading(false);
          }, 500);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMoreItems, filteredAttractions.length]
  );

  // Helper function to get card size classes
  const getCardSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "row-span-2";
      case "small":
        return "row-span-1";
      default:
        return "row-span-1";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-nav bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/#attractions"
              className="inline-flex items-center text-muted-foreground hover:text-coral-orange mb-8 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-gray-900">
                Discover Sri Lanka
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore the most beautiful and exciting destinations across the
                island paradise
              </p>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-full px-6 py-3 font-medium border-2 hover:border-coral-orange transition-all duration-300"
                >
                  {filter}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {currentAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                ref={
                  index === currentAttractions.length - 1 ? lastItemRef : null
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <Link
                  to={`/attraction/${attraction.id}`}
                  className="block group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title + Rating */}
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
                          {attraction.title}
                        </h2>
                        <div className="flex items-center bg-blue-100 text-gray-900 px-2 py-0.5 rounded-full text-xs font-semibold">
                          <Star
                            className="text-yellow-400 mr-1"
                            size={14}
                            fill="currentColor"
                          />
                          {attraction.rating}
                        </div>
                      </div>

                      {/* Category */}
                      <div className="mb-2">
                        <span className="text-blue-600 text-xs font-semibold uppercase tracking-wide">
                          {attraction.categoryLabel}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                        {attraction.description}
                      </p>

                      {/* Location */}
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin size={16} className="mr-2 text-blue-600" />
                        <span>{attraction.location}</span>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-gray-200 mb-4"></div>

                      {/* Button */}
                      <div className="flex justify-end">
                        <Button className="w-full max-w-[120px] rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                          View
                        </Button>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="text-gray-600 font-medium">
                  Loading more attractions...
                </span>
              </div>
            </div>
          )}

          {/* Empty State */}
          {currentAttractions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No attractions found
                </h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find any attractions for "{activeFilter}"
                  category. Try exploring other categories.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveFilter("All")}
                  className="rounded-full px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View All Attractions
                </Button>
              </div>
            </motion.div>
          )}

          {/* End of Results */}
          {!hasMoreItems && currentAttractions.length > 0 && (
            <div className="text-center py-12">
              <div className="w-px h-12 bg-gray-300 mx-auto mb-4"></div>
              <p className="text-gray-500 font-medium">
                You've reached the end of our attractions
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Attractions;

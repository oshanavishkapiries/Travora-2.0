import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Tours = () => {
  const [displayedItems, setDisplayedItems] = useState(6);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extended tour data - in a real app, this would come from an API with pagination
  const allTours = [
    {
      id: 1,
      title: "Down-South Tour",
      duration: "3 days",
      price: "Rs 35,000",
      priceUnit: "Person",
      location: "Southern Province, Sri Lanka",
      image: "https://picsum.photos/id/99/1200/700",
      highlights: ["Beaches", "Wildlife", "Cultural Sites"],
      description:
        "Experience the best of Sri Lanka's southern coast with pristine beaches, wildlife encounters, and rich cultural heritage.",
    },
    {
      id: 2,
      title: "Cultural Triangle",
      duration: "4 days",
      price: "Rs 45,000",
      priceUnit: "Person",
      location: "Central Province, Sri Lanka",
      image: "https://picsum.photos/id/101/1200/700",
      highlights: ["Ancient Cities", "Temples", "Heritage Sites"],
      description:
        "Explore ancient kingdoms, magnificent temples, and UNESCO World Heritage sites in Sri Lanka's cultural heartland.",
    },
    {
      id: 3,
      title: "Hill Country Explorer",
      duration: "5 days",
      price: "Rs 55,000",
      priceUnit: "Person",
      location: "Central Highlands, Sri Lanka",
      image: "https://picsum.photos/id/110/1200/700",
      highlights: ["Tea Plantations", "Mountains", "Scenic Railways"],
      description:
        "Journey through misty mountains, emerald tea estates, and scenic railway routes in Sri Lanka's hill country.",
    },
    {
      id: 4,
      title: "Western Coast Adventure",
      duration: "2 days",
      price: "Rs 25,000",
      priceUnit: "Person",
      location: "Western Province, Sri Lanka",
      image: "https://picsum.photos/id/111/1200/700",
      highlights: ["Beaches", "Water Sports", "Nightlife"],
      description:
        "Discover vibrant beach culture, exciting water sports, and bustling nightlife along the western coast.",
    },
    {
      id: 5,
      title: "Northern Heritage Trail",
      duration: "6 days",
      price: "Rs 65,000",
      priceUnit: "Person",
      location: "Northern Province, Sri Lanka",
      image: "https://picsum.photos/id/120/1200/700",
      highlights: ["Ancient Ruins", "Tamil Culture", "Island Life"],
      description:
        "Explore the rich Tamil heritage, ancient ruins, and unique island culture of Sri Lanka's northern region.",
    },
    {
      id: 6,
      title: "Eastern Coastal Journey",
      duration: "4 days",
      price: "Rs 40,000",
      priceUnit: "Person",
      location: "Eastern Province, Sri Lanka",
      image: "https://picsum.photos/id/121/1200/700",
      highlights: ["Pristine Beaches", "Surfing", "Local Culture"],
      description:
        "Experience unspoiled beaches, world-class surfing spots, and authentic local culture on the eastern coast.",
    },
    {
      id: 7,
      title: "Wildlife Safari Special",
      duration: "3 days",
      price: "Rs 50,000",
      priceUnit: "Person",
      location: "Multiple National Parks",
      image: "https://picsum.photos/id/122/1200/700",
      highlights: ["Leopards", "Elephants", "Bird Watching"],
      description:
        "Embark on thrilling safari adventures to spot leopards, elephants, and diverse bird species in their natural habitat.",
    },
    {
      id: 8,
      title: "Adventure Seeker's Paradise",
      duration: "7 days",
      price: "Rs 75,000",
      priceUnit: "Person",
      location: "Multiple Provinces",
      image: "https://picsum.photos/id/123/1200/700",
      highlights: ["Hiking", "White Water Rafting", "Rock Climbing"],
      description:
        "Challenge yourself with hiking, white water rafting, rock climbing, and other adrenaline-pumping activities.",
    },
    {
      id: 9,
      title: "Spiritual Journey",
      duration: "5 days",
      price: "Rs 42,000",
      priceUnit: "Person",
      location: "Sacred Sites across Sri Lanka",
      image: "https://picsum.photos/id/124/1200/700",
      highlights: ["Buddhist Temples", "Meditation", "Pilgrimage Sites"],
      description:
        "Find inner peace through visits to sacred Buddhist temples, meditation retreats, and important pilgrimage sites.",
    },
  ];

  // Get currently displayed tours
  const currentTours = allTours.slice(0, displayedItems);
  const hasMoreItems = displayedItems < allTours.length;

  // Infinite scroll functionality
  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreItems) {
          setLoading(true);
          setTimeout(() => {
            setDisplayedItems((prev) => Math.min(prev + 6, allTours.length));
            setLoading(false);
          }, 500);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMoreItems, allTours.length]
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-nav">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/#tours"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">All Tours</h1>
                <p className="text-muted-foreground">
                  Discover amazing destinations and experiences across Sri Lanka
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">
                  Showing {Math.min(displayedItems, allTours.length)} of{" "}
                  {allTours.length} tours
                </span>
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentTours.map((tour) => (
              <Link key={tour.id} to={`/tour/${tour.id}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition h-full flex flex-col">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock size={14} />
                        {tour.duration}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-base md:text-xl font-bold mb-2 line-clamp-1">
                      {tour.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2 hidden md:block">
                      {tour.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin size={14} className="mr-2" />
                      <span className="line-clamp-1">{tour.location}</span>
                    </div>

                    {/* Highlights */}
                    <div className="hidden md:flex flex-wrap gap-2 mb-3">
                      {tour.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-white text-blue-600 px-2 py-1 rounded-md text-xs font-medium border border-blue-600"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <hr className="border-t border-gray-300 my-3" />

                    {/* Price + Button */}
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <span className="text-lg md:text-2xl font-bold text-gray-900">
                          {tour.price}
                        </span>
                        <span className="text-sm md:text-base text-gray-500">
                          /{tour.priceUnit}
                        </span>
                      </div>
                      <Button className="hidden md:block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-1">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="text-gray-600 font-medium">
                  Loading more tours...
                </span>
              </div>
            </div>
          )}

          {/* End of Results */}
          {!hasMoreItems && currentTours.length > 0 && (
            <div className="text-center py-12">
              <div className="w-px h-12 bg-gray-300 mx-auto mb-4"></div>
              <p className="text-gray-500 font-medium">
                You've reached the end of our tours
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tours;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Fuel,
  Users,
  Settings,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Vehicles = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filters = ["All", "Sedan", "Hatchback", "SUV", "Van", "Luxury"];

  // Extended vehicles data - in a real app, this would come from an API
  const allVehicles = [
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
      description:
        "Eco-friendly hybrid sedan perfect for city driving and long-distance comfort.",
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
      description:
        "Compact and efficient hatchback ideal for urban exploration and easy parking.",
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
      description:
        "Spacious van perfect for group travel and family adventures with ample luggage space.",
    },
    {
      id: 4,
      model: "Toyota RAV4",
      type: "SUV",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      specs: {
        fuel: "90L",
        transmission: "Automatic",
        capacity: "7 People",
      },
      price: "Rs 22,000",
      priceUnit: "day",
      description:
        "Versatile SUV with 4WD capability, perfect for off-road adventures and mountain drives.",
    },
    {
      id: 5,
      model: "Honda Fit",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      specs: {
        fuel: "50L",
        transmission: "Automatic",
        capacity: "4 People",
      },
      price: "Rs 8,000",
      priceUnit: "day",
      description:
        "Budget-friendly compact car with excellent fuel economy for solo travelers and couples.",
    },
    {
      id: 6,
      model: "Toyota Camry",
      type: "Sedan",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
      specs: {
        fuel: "85L",
        transmission: "Automatic",
        capacity: "5 People",
      },
      price: "Rs 15,000",
      priceUnit: "day",
      description:
        "Premium sedan offering luxury comfort and smooth performance for business travel.",
    },
    {
      id: 7,
      model: "Mercedes-Benz E-Class",
      type: "Luxury",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      specs: {
        fuel: "95L",
        transmission: "Automatic",
        capacity: "5 People",
      },
      price: "Rs 35,000",
      priceUnit: "day",
      description:
        "Ultimate luxury experience with premium amenities and sophisticated design.",
    },
    {
      id: 8,
      model: "Mitsubishi Montero",
      type: "SUV",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      specs: {
        fuel: "120L",
        transmission: "Manual",
        capacity: "8 People",
      },
      price: "Rs 25,000",
      priceUnit: "day",
      description:
        "Rugged SUV built for adventure tourism and challenging terrain exploration.",
    },
    {
      id: 9,
      model: "Nissan March",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      specs: {
        fuel: "45L",
        transmission: "Manual",
        capacity: "4 People",
      },
      price: "Rs 7,000",
      priceUnit: "day",
      description:
        "Economy compact car perfect for budget-conscious travelers exploring the city.",
    },
    {
      id: 10,
      model: "Toyota Coaster",
      type: "Van",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      specs: {
        fuel: "150L",
        transmission: "Manual",
        capacity: "15 People",
      },
      price: "Rs 30,000",
      priceUnit: "day",
      description:
        "Large capacity van ideal for group tours and corporate transportation needs.",
    },
    {
      id: 11,
      model: "BMW 3 Series",
      type: "Luxury",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      specs: {
        fuel: "90L",
        transmission: "Automatic",
        capacity: "5 People",
      },
      price: "Rs 40,000",
      priceUnit: "day",
      description:
        "Premium luxury sedan combining performance, comfort, and cutting-edge technology.",
    },
    {
      id: 12,
      model: "Suzuki Alto",
      type: "Hatchback",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      specs: {
        fuel: "35L",
        transmission: "Manual",
        capacity: "4 People",
      },
      price: "Rs 6,000",
      priceUnit: "day",
      description:
        "Ultra-compact and fuel-efficient car perfect for short city trips and daily commuting.",
    },
  ];

  // Filter vehicles based on active filter
  const filteredVehicles =
    activeFilter === "All"
      ? allVehicles
      : allVehicles.filter((vehicle) => vehicle.type === activeFilter);

  // Calculate pagination
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVehicles = filteredVehicles.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-nav">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/#vehicles"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">All Vehicles</h1>
                <p className="text-muted-foreground">
                  Find the perfect vehicle for your Sri Lankan adventure
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-sm text-muted-foreground">
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, filteredVehicles.length)} of{" "}
                  {filteredVehicles.length} vehicles
                </span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Filter by type:
              </span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
            {currentVehicles.map((vehicle) => (
              <Link
                key={vehicle.id}
                to={`/vehicle/${vehicle.id}`}
                className="block"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-card card-hover cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-32 md:h-48 aspect-square md:aspect-auto object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                        {vehicle.type}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-6 flex flex-col h-[calc(100%-8rem)] md:h-[calc(100%-12rem)]">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-left line-clamp-1">
                      {vehicle.model}
                    </h3>

                    {/* Description - hidden on mobile */}
                    <p className="hidden md:block text-muted-foreground text-sm mb-4 flex-grow text-left">
                      {vehicle.description}
                    </p>

                    {/* Specs simplified into one row */}
                    <div className="hidden md:flex items-center gap-4 mb-3 text-left">
                      {/* Fuel */}
                      <div className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-md border border-blue-600">
                        <Fuel size={16} />
                        <span className="text-xs font-medium">
                          {vehicle.specs.fuel}
                        </span>
                      </div>

                      {/* Transmission */}
                      <div className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-md border border-blue-600">
                        <Settings size={16} />
                        <span className="text-xs font-medium">
                          {vehicle.specs.transmission}
                        </span>
                      </div>

                      {/* Capacity */}
                      <div className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-md border border-blue-600">
                        <Users size={16} />
                        <span className="text-xs font-medium">
                          {vehicle.specs.capacity}
                        </span>
                      </div>
                    </div>
                    <hr className="border-t border-gray-300 my-3" />

                    {/* Price + Button on same row */}
                    <div className="flex items-center justify-between mb-2 md:mb-6">
                      <div>
                        <span className="text-lg md:text-2xl font-bold text-black">
                          {vehicle.price}
                        </span>
                        <span className="text-xs md:text-base text-muted-foreground">
                          /{vehicle.priceUnit}
                        </span>
                      </div>

                      <Button className="hidden md:block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm px-7 py-0.5">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vehicles;

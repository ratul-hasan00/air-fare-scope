import { useNavigate } from "react-router";
import AdventureDestinations from "../Extra Component/AdventureDestinations";
import BeautifulDestinations from "../Extra Component/BeautifulDestinations";
import FoodDestinations from "../Extra Component/FoodDestinations";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Explore Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-5 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Explore the World with AirfareScope
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Discover breathtaking destinations, iconic food cultures, and thrilling adventures across the globe.
        </p>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          From scenic cities to unforgettable tastes and adrenaline-filled experiences,
        </p>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          AirfareScope helps you find inspiration before booking your next journey.
        </p>

        {/* Book Flight Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="
              px-8 py-3 rounded-2xl font-medium text-white text-base
              bg-black
              shadow-md
              transition-all duration-300 ease-out
              hover:bg-gray-900 hover:shadow-xl hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-gray-400
            "
          >
            Book a Flight
          </button>
        </div>
      </section>

      {/* Explore Sections */}
      <BeautifulDestinations />
      <FoodDestinations />
      <AdventureDestinations />
    </main>
  );
};

export default Explore;

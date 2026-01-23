import logo from "../assets/ASF_PHOTO.png";
import { Search, Tag, Plane, CreditCard } from "lucide-react";

const About = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* About Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <title>About Us</title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
              About AirFareScope
            </h1>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              AirFareScope is a modern flight search and travel discovery platform
              built to simplify how people plan and book flights. We focus on
              delivering fast, accurate flight results while keeping the experience
              clean, intuitive, and stress-free for travelers around the world.
            </p>

            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Alongside powerful flight search, AirfareScope helps users explore
              destinations, food cultures, and adventure hotspots before making
              booking decisions. Whether you are planning a quick escape or a long
              international journey, AirfareScope gives you clarity, inspiration,
              and confidence from search to takeoff.
            </p>
          </div>

          {/* Right Logo / Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={logo}
                alt="AirfareScope Logo"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
              How AirFareScope Works
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Finding the perfect flight is simple. AirFareScope guides you through
              every step — from searching flights to securing the best deals.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Search className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Search Flights
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Use our smart search bar to find flights by destination, date,
                airline, and travel preferences in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Tag className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Find Best Deals
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                AirfareScope highlights discounts, price drops, and the best-value
                options so you never overpay.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Plane className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Compare & Choose
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Compare airlines, flight durations, layovers, and pricing to choose
                the option that fits your journey best.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <CreditCard className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Book with Confidence
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Secure your booking confidently with clear pricing, trusted data,
                and a smooth booking flow.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

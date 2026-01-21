import { useState } from "react";
import { MapPin, X } from "lucide-react";

// Import your images from assets
import paris from "../assets/paris.jpg";
import rome from "../assets/rome.jpg";
import newyork from "../assets/newyork.jpg";
import tokyo from "../assets/tokyo.jpg";
import istanbul from "../assets/istanbul.jpg";
import sydney from "../assets/sydny.jpg";

const destinations = [
  {
    id: 1,
    place: "Paris, France",
    image: paris,
    description: `Paris, the capital of France, is widely known as the "City of Lights" and is famous for its romantic ambiance, stunning architecture, and rich history. Visitors can explore iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, home to countless masterpieces including the Mona Lisa. The city offers charming streets lined with cafes, boutiques, and patisseries where one can enjoy traditional French cuisine and freshly baked pastries. Beyond its tourist attractions, Paris is a hub for art, fashion, and culture, offering an unforgettable experience to travelers from around the world who come to soak in its elegance and charm.`,
  },
  {
    id: 2,
    place: "Rome, Italy",
    image: rome,
    description: `Rome, the Eternal City, is a mesmerizing destination filled with ancient history, incredible architecture, and vibrant Italian culture. Famous for its historic landmarks such as the Colosseum, Roman Forum, Pantheon, and Vatican City, Rome offers travelers a journey through time. Visitors can savor authentic Italian dishes in traditional trattorias, stroll through cobblestone streets, and marvel at fountains and piazzas that tell stories of centuries past. With its art, history, and lively atmosphere, Rome captivates the hearts of those who wander its streets, offering experiences that blend history, romance, and modern life seamlessly in one unforgettable adventure.`,
  },
  {
    id: 3,
    place: "New York, USA",
    image: newyork,
    description: `New York City, often called "The Big Apple," is an iconic destination that never sleeps. Famous for landmarks such as Times Square, Central Park, the Statue of Liberty, and the Empire State Building, the city offers endless opportunities for sightseeing and entertainment. With its diverse neighborhoods, world-class museums, Broadway theaters, and vibrant culinary scene, NYC caters to every type of traveler. Visitors can enjoy everything from high-end shopping to street food adventures while experiencing the unique energy that defines the city. New York is a melting pot of cultures and ideas, making it a dynamic and unforgettable destination for anyone who visits.`,
  },
  {
    id: 4,
    place: "Tokyo, Japan",
    image: tokyo,
    description: `Tokyo, the bustling capital of Japan, is a city where modern innovation meets centuries-old tradition. Visitors can experience futuristic skyscrapers, neon-lit streets, and state-of-the-art technology alongside serene temples, shrines, and traditional tea houses. The city offers incredible culinary experiences ranging from sushi and ramen to Michelin-starred restaurants. Cultural attractions such as the historic Asakusa district, Meiji Shrine, and the vibrant shopping districts of Shibuya and Harajuku provide a fascinating contrast between old and new. Tokyo is also renowned for its efficient transportation system, seasonal festivals, and meticulous attention to detail, ensuring that every visit is immersive, exciting, and memorable.`,
  },
  {
    id: 5,
    place: "Istanbul, Turkey",
    image: istanbul,
    description: `Istanbul, where East meets West, is a city steeped in history, culture, and vibrant life. Situated on the Bosphorus Strait, it offers breathtaking views and a unique blend of European and Asian influences. Visitors can explore majestic landmarks such as Hagia Sophia, Blue Mosque, Topkapi Palace, and the Grand Bazaar. The city’s streets are alive with the aroma of traditional Turkish cuisine, bustling markets, and the call to prayer from historic mosques. Istanbul’s rich history, stunning architecture, and lively atmosphere create an unforgettable travel experience that connects the past with the present, making it a must-visit destination for culture enthusiasts and adventurers alike.`,
  },
  {
    id: 6,
    place: "Sydney, Australia",
    image: sydney,
    description: `Sydney, the vibrant coastal city of Australia, is known for its iconic Opera House, Harbour Bridge, and stunning beaches such as Bondi and Manly. Visitors can enjoy a mix of outdoor adventures, cultural experiences, and cosmopolitan lifestyle. The city offers a thriving culinary scene, lively markets, and dynamic arts and entertainment options. From exploring the Royal Botanic Gardens to taking a ferry ride across Sydney Harbour, the city provides endless opportunities for sightseeing and relaxation. Sydney’s warm climate, welcoming locals, and breathtaking natural landscapes make it an ideal destination for travelers seeking a balance of urban excitement and scenic beauty in one unforgettable journey.`,
  },
];

const Destination = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDestination(null);
  };

  const truncate = (text, length = 30) => {
    if (text.split(" ").length <= length) return text;
    return text.split(" ").slice(0, length).join(" ") + "...";
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Top Destinations</h2>
        <p className="text-gray-500">
          Explore the most popular destinations worldwide and plan your next trip.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <div
            key={d.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="h-48 w-full relative overflow-hidden rounded-t-2xl">
              {d.image ? (
                <img
                  src={d.image}
                  alt={d.place}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <MapPin className="text-gray-400 w-12 h-12" />
                </div>
              )}
            </div>

            {/* Destination Name + Description */}
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg">{d.place}</h3>
              <p className="text-gray-500 text-sm">
                {truncate(d.description, 30)}
              </p>
              {d.description.split(" ").length > 30 && (
                <button
                  onClick={() => openModal(d)}
                  className="text-black font-medium mt-2 hover:underline"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedDestination && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedDestination.place}</h3>
            <p className="text-gray-700">{selectedDestination.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destination;

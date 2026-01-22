import { useState } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Correct import for autoplay
import "swiper/css";

import paris1 from "../assets/Beautiful Destinations/paris1.jpg";
import paris2 from "../assets/Beautiful Destinations/paris2.jpg";
import paris3 from "../assets/Beautiful Destinations/paris3.jpg";

import italy1 from "../assets/Beautiful Destinations/italy1.webp";
import italy2 from "../assets/Beautiful Destinations/italy2.jpg";
import italy3 from "../assets/Beautiful Destinations/italy3.jpeg";

import japan1 from "../assets/Beautiful Destinations/japan1.webp";
import japan2 from "../assets/Beautiful Destinations/japan2.jpg";
import japan3 from "../assets/Beautiful Destinations/japan3.webp";

import istanbul1 from "../assets/Beautiful Destinations/istanbul1.webp";
import istanbul2 from "../assets/Beautiful Destinations/istanbul2.jpg";
import istanbul3 from "../assets/Beautiful Destinations/istanbul3.jpg";

import sydney1 from "../assets/Beautiful Destinations/sydney1.webp";
import sydney2 from "../assets/Beautiful Destinations/sydney2.jpg";
import sydney3 from "../assets/Beautiful Destinations/sydney3.jpg";

import greece1 from "../assets/Beautiful Destinations/greece1.jpg";
import greece2 from "../assets/Beautiful Destinations/greece2.jpg";
import greece3 from "../assets/Beautiful Destinations/greece3.webp";

const destinations = [
  {
    id: 1,
    title: "Paris, France",
    images: [paris1, paris2, paris3],
    price: "$420",
    duration: "7 Days",
    description:
      "Paris is one of the most beautiful cities in the world, known for its romantic atmosphere, historic architecture, world-class museums, charming streets, iconic Eiffel Tower, artistic heritage, fashion culture, cozy cafés, delicious cuisine, river cruises, cultural landmarks, and unforgettable travel experiences that attract millions of visitors every year.",
  },
  {
    id: 2,
    title: "Rome, Italy",
    images: [italy1, italy2, italy3],
    price: "$450",
    duration: "6 Days",
    description:
      "Rome, the Eternal City, is a mesmerizing destination filled with ancient history, incredible architecture, and vibrant Italian culture. Famous for landmarks such as the Colosseum, Roman Forum, Pantheon, and Vatican City, Rome offers travelers a journey through time with unforgettable experiences.",
  },
  {
    id: 3,
    title: "Tokyo, Japan",
    images: [japan1, japan2, japan3],
    price: "$500",
    duration: "8 Days",
    description:
      "Tokyo is a bustling city where modern innovation meets centuries-old tradition. From neon-lit streets and skyscrapers to serene temples and gardens, Tokyo offers a rich mix of culture, food, shopping, and technology experiences that make every visit unique and exciting.",
  },
  {
    id: 4,
    title: "Istanbul, Turkey",
    images: [istanbul1, istanbul2, istanbul3],
    price: "$380",
    duration: "5 Days",
    description:
      "Istanbul is a city where East meets West, offering stunning architecture, rich culture, and vibrant markets. Visitors can explore the Hagia Sophia, Blue Mosque, and Topkapi Palace while enjoying Turkish cuisine and the lively streets that connect history and modern life.",
  },
  {
    id: 5,
    title: "Sydney, Australia",
    images: [sydney1, sydney2, sydney3],
    price: "$550",
    duration: "7 Days",
    description:
      "Sydney is a vibrant coastal city known for its Opera House, Harbour Bridge, and beautiful beaches. It offers a perfect mix of outdoor adventures, cultural experiences, lively markets, and stunning scenery, making it an ideal destination for travelers seeking both urban excitement and natural beauty.",
  },
  {
    id: 6,
    title: "Santorini, Greece",
    images: [greece1, greece2, greece3], 
    price: "$470",
    duration: "6 Days",
    description:
      "Santorini is a picturesque Greek island famous for its white-washed buildings, blue-domed churches, and stunning sunsets over the Aegean Sea. Visitors can enjoy beautiful beaches, local cuisine, charming villages, and breathtaking views that make it one of the most romantic and photogenic destinations in the world.",
  },
];

const truncate = (text, words = 30) => {
  const split = text.split(" ");
  if (split.length <= words) return text;
  return split.slice(0, words).join(" ") + "...";
};

const BeautifulDestinations = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Beautiful Destinations</h2>
        <p className="text-gray-500">
          Discover the most visually stunning places around the world
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <div
            key={d.id}
            className="bg-white rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Image Slider with autoplay */}
            <Swiper
              modules={[Autoplay]} // ✅ add module
              autoplay={{ delay: 2500, disableOnInteraction: false }} // ✅ autoplay settings
              loop={true} // ✅ loop slides
              className="h-48"
            >
              {d.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="h-48 w-full bg-gray-200">
                    {img && (
                      <img
                        src={img}
                        alt={d.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{d.title}</h3>

              <div className="flex justify-between text-sm text-gray-500">
                <span>{d.duration}</span>
                <span className="font-medium text-black">{d.price}</span>
              </div>

              <p className="text-sm text-gray-500">{truncate(d.description)}</p>

              {d.description.split(" ").length > 30 && (
                <button
                  onClick={() => {
                    setActive(d);
                    setOpen(true);
                  }}
                  className="text-black font-medium hover:underline"
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && active && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 relative shadow-[0_0_25px_rgba(0,0,0,0.9)] border border-black">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
            <p className="text-gray-700">{active.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeautifulDestinations;

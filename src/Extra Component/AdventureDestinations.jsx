import { useState } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import your adventure images
import nepal1 from "../assets/Adventures Destinations/nepal1.webp";
import nepal2 from "../assets/Adventures Destinations/nepal2.jpg";
import nepal3 from "../assets/Adventures Destinations/nepal3.jpg";

import iceland1 from "../assets/Adventures Destinations/iceland1.avif";
import iceland2 from "../assets/Adventures Destinations/iceland2.jpg";
import iceland3 from "../assets/Adventures Destinations/iceland3.jpg";

import newzealand1 from "../assets/Adventures Destinations/newzeland1.jpg";
import newzealand2 from "../assets/Adventures Destinations/newzeland2.jpg";
import newzealand3 from "../assets/Adventures Destinations/newzeland3.jpg";

import canada1 from "../assets/Adventures Destinations/canda1.jpg";
import canada2 from "../assets/Adventures Destinations/canada2.avif";
import canada3 from "../assets/Adventures Destinations/canada3.webp";

import peru1 from "../assets/Adventures Destinations/peru1.jpg";
import peru2 from "../assets/Adventures Destinations/peru2.jpg";
import peru3 from "../assets/Adventures Destinations/peru3.jpg";

import switzerland1 from "../assets/Adventures Destinations/switch1.jpg";
import switzerland2 from "../assets/Adventures Destinations/switch2.webp";
import switzerland3 from "../assets/Adventures Destinations/switch3.webp";

const adventures = [
  {
    id: 1,
    title: "Himalayan Trek, Nepal",
    activities: ["Mountaineering", "Trekking", "Camping"],
    images: [nepal1, nepal2, nepal3],
    price: "$800",
    duration: "10 Days",
    description:
      "Explore the majestic Himalayas in Nepal for a thrilling adventure. Experience mountaineering, trekking across breathtaking trails, and camping under starry skies surrounded by towering peaks and serene landscapes.",
  },
  {
    id: 2,
    title: "Glacier Exploration, Iceland",
    activities: ["Ice Climbing", "Snow Hiking", "Volcano Tours"],
    images: [iceland1, iceland2, iceland3],
    price: "$1200",
    duration: "7 Days",
    description:
      "Iceland offers a raw adventure experience with glaciers, volcanoes, and snowfields. Challenge yourself with ice climbing, hike across frozen landscapes, and explore active volcanic zones in one of the most unique adventure destinations.",
  },
  {
    id: 3,
    title: "Bungee & Skydiving, New Zealand",
    activities: ["Bungee Jumping", "Skydiving", "River Rafting"],
    images: [newzealand1, newzealand2, newzealand3],
    price: "$950",
    duration: "6 Days",
    description:
      "New Zealand is an adrenaline paradise. Experience heart-pumping bungee jumps, skydiving over scenic landscapes, and thrilling river rafting, all set against stunning mountains, rivers, and valleys for the ultimate adventure.",
  },
  {
    id: 4,
    title: "Rock Climbing, Canada",
    activities: ["Rock Climbing", "Hiking", "Canoeing"],
    images: [canada1, canada2, canada3],
    price: "$700",
    duration: "8 Days",
    description:
      "Canada's wild landscapes offer the perfect adventure playground. Engage in rock climbing on rugged cliffs, hike pristine trails, and enjoy canoeing in serene lakes surrounded by breathtaking nature.",
  },
  {
    id: 5,
    title: "Amazon Jungle, Peru",
    activities: ["Jungle Trekking", "River Kayaking", "Wildlife Safari"],
    images: [peru1, peru2, peru3],
    price: "$900",
    duration: "9 Days",
    description:
      "Peru’s Amazon jungle provides a real adventure vibe with dense forests and diverse wildlife. Trek through tropical paths, kayak along winding rivers, and enjoy thrilling wildlife safaris for an unforgettable experience.",
  },
  {
    id: 6,
    title: "Alpine Adventure, Switzerland",
    activities: ["Skiing", "Paragliding", "Mountain Hiking"],
    images: [switzerland1, switzerland2, switzerland3],
    price: "$1100",
    duration: "7 Days",
    description:
      "Switzerland offers exhilarating alpine adventures. Ski down pristine slopes, soar above valleys with paragliding, and hike mountain trails for breathtaking views and a true adrenaline-packed journey.",
  },
];

const truncate = (text, words = 30) => {
  const split = text.split(" ");
  if (split.length <= words) return text;
  return split.slice(0, words).join(" ") + "...";
};

const AdventureDestinations = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Adventure Destinations</h2>
        <p className="text-gray-500">
          Feel the thrill and explore the most adventurous spots around the world
        </p>
      </div>

      {/* Adventure Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {adventures.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="h-48"
            >
              {a.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="h-48 w-full bg-gray-200">
                    {img && (
                      <img
                        src={img}
                        alt={a.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-gray-500">
                Activities: {a.activities.join(", ")}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{a.duration}</span>
                <span className="font-medium text-black">{a.price}</span>
              </div>
              <p className="text-sm text-gray-500">{truncate(a.description)}</p>

              {a.description.split(" ").length > 30 && (
                <button
                  onClick={() => {
                    setActive(a);
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
            <p className="mt-2 text-gray-500">
              Activities: {active.activities.join(", ")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdventureDestinations;

import { useState } from "react";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import pizza1 from "../assets/Food Destinations/pizza1.jpg";
import pizza2 from "../assets/Food Destinations/pizza2.jpeg";
import pizza3 from "../assets/Food Destinations/pizza3.jpg";

import sushi1 from "../assets/Food Destinations/shusi1.webp";
import sushi2 from "../assets/Food Destinations/sushi2.avif";
import sushi3 from "../assets/Food Destinations/sushi3.webp";

import burger1 from "../assets/Food Destinations/burger1.jpg";
import burger2 from "../assets/Food Destinations/burger2.jpg";
import burger3 from "../assets/Food Destinations/burger3.jpg";

import taco1 from "../assets/Food Destinations/taco1.jpg";
import taco2 from "../assets/Food Destinations/taco2.webp";
import taco3 from "../assets/Food Destinations/taco3.jpg";

import curry1 from "../assets/Food Destinations/curry1.jpg";
import curry2 from "../assets/Food Destinations/curry2.jpg";
import curry3 from "../assets/Food Destinations/curry3.webp";

import paella1 from "../assets/Food Destinations/paella1.jpg";
import paella2 from "../assets/Food Destinations/paella2.jpg";
import paella3 from "../assets/Food Destinations/paella3.webp";

const foodDestinations = [
  {
    id: 1,
    country: "Italy",
    title: "Italian Cuisine",
    dishes: ["Pizza", "Pasta", "Gelato"],
    images: [pizza1, pizza2, pizza3],
    price: "$25",
    duration: "1 Day Tour",
    description:
      "Experience the best of Italian cuisine with its world-famous pizza, traditional pasta dishes, and creamy gelato. Italian food is celebrated for its fresh ingredients, rich flavors, and cultural significance across all regions.",
  },
  {
    id: 2,
    country: "Japan",
    title: "Japanese Cuisine",
    dishes: ["Sushi", "Ramen", "Tempura"],
    images: [sushi1, sushi2, sushi3],
    price: "$40",
    duration: "1 Day Tour",
    description:
      "Japanese cuisine is renowned for its delicate flavors and artistic presentation. Enjoy sushi rolls, steaming bowls of ramen, and crispy tempura, showcasing the harmony of taste and tradition in every bite.",
  },
  {
    id: 3,
    country: "USA",
    title: "American Cuisine",
    dishes: ["Burgers", "BBQ Ribs", "Apple Pie"],
    images: [burger1, burger2, burger3],
    price: "$15",
    duration: "1 Day Tour",
    description:
      "American food is hearty, diverse, and iconic. From juicy burgers and smoky BBQ ribs to classic apple pie, every dish reflects the country's regional flavors and vibrant food culture.",
  },
  {
    id: 4,
    country: "Mexico",
    title: "Mexican Cuisine",
    dishes: ["Tacos", "Enchiladas", "Guacamole"],
    images: [taco1, taco2, taco3],
    price: "$12",
    duration: "1 Day Tour",
    description:
      "Mexican cuisine is vibrant and flavorful. Enjoy tacos filled with fresh ingredients, cheesy enchiladas, and creamy guacamole, all of which showcase the country's rich culinary heritage.",
  },
  {
    id: 5,
    country: "India",
    title: "Indian Cuisine",
    dishes: ["Butter Chicken", "Biryani", "Samosa"],
    images: [curry1, curry2, curry3],
    price: "$20",
    duration: "1 Day Tour",
    description:
      "Indian cuisine is aromatic and diverse. Savor creamy butter chicken, fragrant biryani, and crispy samosas, representing the wide variety of regional spices and flavors found across the country.",
  },
  {
    id: 6,
    country: "Spain",
    title: "Spanish Cuisine",
    dishes: ["Paella", "Tapas", "Churros"],
    images: [paella1, paella2, paella3],
    price: "$30",
    duration: "1 Day Tour",
    description:
      "Spanish food is colorful and rich in flavor. Taste the famous paella, enjoy small tapas dishes, and finish with sweet churros for an authentic culinary experience in Spain.",
  },
];

const truncate = (text, words = 30) => {
  const split = text.split(" ");
  if (split.length <= words) return text;
  return split.slice(0, words).join(" ") + "...";
};

const FoodDestinations = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Famous Foods Around the World</h2>
        <p className="text-gray-500">
          Explore iconic dishes and culinary delights from different countries
        </p>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodDestinations.map((f) => (
          <div
            key={f.id}
            className="bg-white rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="h-48"
            >
              {f.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="h-48 w-full bg-gray-200">
                    {img && (
                      <img
                        src={img}
                        alt={f.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-500">
                Famous Dishes: {f.dishes.join(", ")}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{f.duration}</span>
                <span className="font-medium text-black">{f.price}</span>
              </div>
              <p className="text-sm text-gray-500">{truncate(f.description)}</p>

              {f.description.split(" ").length > 30 && (
                <button
                  onClick={() => {
                    setActive(f);
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
              Famous Dishes: {active.dishes.join(", ")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodDestinations;

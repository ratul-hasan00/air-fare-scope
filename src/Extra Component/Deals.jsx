import { Tag, Check } from "lucide-react";

// Example deals with package info
const deals = [
  {
    id: 1,
    title: "Paris Getaway",
    discount: "250",
    currency: "USD/EUR",
    package: "Romantic 3-Day Trip",
    description:
      "Includes 2 nights in a 4-star hotel, Guided city tour, Breakfast.",
  },
  {
    id: 2,
    title: "Rome Adventure",
    discount: "200",
    currency: "USD/EUR",
    package: "Historical Exploration",
    description:
      "3-day Rome trip with museum passes, Colosseum tour, Authentic Italian meals.",
  },
  {
    id: 3,
    title: "Tokyo Special",
    discount: "300",
    currency: "USD/EUR",
    package: "Cultural & Modern Experience",
    description:
      "Includes hotel stay, City sightseeing, Sushi workshop, Free transport pass.",
  },
];

const Deals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Travel Deals</h2>
        <p className="text-gray-500">
          Grab the best discounts and save big on your next trip. Choose a package that suits your style.
        </p>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Discount Badge */}
            <div className="flex items-center justify-between p-4">
              <h3 className="font-semibold text-lg">{deal.title}</h3>
              <div className="flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-4 h-4" />
                {deal.discount} {deal.currency} OFF
              </div>
            </div>

            {/* Package Info */}
            <div className="px-4 pb-4 space-y-2">
              <p className="text-gray-700 font-medium">{deal.package}</p>

              {/* Description as bullet list */}
              <ul className="text-gray-500 text-sm space-y-1 list-none">
                {deal.description
                  .split(",") // split by comma
                  .map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{item.trim()}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Book Button */}
            <div className="px-4 pb-4">
              <button className="w-full bg-black text-white font-medium py-2 rounded-xl hover:bg-gray-900 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;

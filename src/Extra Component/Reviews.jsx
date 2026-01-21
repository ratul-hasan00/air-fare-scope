import { Star, User } from "lucide-react";

// Sample professional dynamic users and realistic comments
const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    comment: "Booking was seamless and straightforward. The flight options were excellent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    comment: "Very satisfied with the customer service and flight timings.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Williams",
    comment: "Smooth booking experience. Loved the price comparison feature!",
    rating: 5,
  },
  {
    id: 4,
    name: "James Brown",
    comment: "Found the best deals easily. Highly recommend this platform.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emma Davis",
    comment: "The filter options made searching flights very convenient.",
    rating: 5,
  },
  {
    id: 6,
    name: "Oliver Wilson",
    comment: "User interface is clean and intuitive. Great experience.",
    rating: 5,
  },
  {
    id: 7,
    name: "Isabella Martinez",
    comment: "Flight search was fast and accurate. Very happy with the service.",
    rating: 4,
  },
  {
    id: 8,
    name: "Liam Anderson",
    comment: "Excellent app for comparing flight prices quickly.",
    rating: 5,
  },
  {
    id: 9,
    name: "Mia Thomas",
    comment: "The booking confirmation was instant and clear. Loved it!",
    rating: 5,
  },
  {
    id: 10,
    name: "Noah Jackson",
    comment: "Filters and sorting helped me choose the perfect flight.",
    rating: 4,
  },
  {
    id: 11,
    name: "Ava White",
    comment: "Very professional platform. Smooth experience from start to finish.",
    rating: 5,
  },
  {
    id: 12,
    name: "Ethan Harris",
    comment: "The interface is sleek and responsive. Highly recommended!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">User Reviews</h2>
        <p className="text-gray-500">
          Hear what our users are saying about their flight experiences.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col space-y-2 cursor-pointer"
          >
            {/* User Info */}
            <div className="flex items-center gap-3">
              {/* Circular border around icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
                <User className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base">{r.name}</h4>
                <div className="flex gap-1 text-yellow-400 mt-1">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 sm:w-4 sm:h-4" />
                  ))}
                </div>
              </div>
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

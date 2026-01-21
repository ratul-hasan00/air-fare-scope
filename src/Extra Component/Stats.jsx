import { Users, Plane, Globe, DollarSign } from "lucide-react";

const statsData = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-black" />,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: <Plane className="w-8 h-8 text-black" />,
    value: "500+",
    label: "Flights Booked Daily",
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8 text-black" />,
    value: "120+",
    label: "Destinations Worldwide",
  },
  {
    id: 4,
    icon: <DollarSign className="w-8 h-8 text-black" />,
    value: "$1M+",
    label: "Saved on Flights",
  },
];

const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Our Achievements</h2>
        <p className="text-gray-500">
          We are proud to share the milestones we have achieved with our users worldwide.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center justify-center text-center cursor-pointer"
          >
            {/* Icon */}
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {stat.icon}
            </div>

            {/* Value */}
            <h3 className="text-2xl font-bold">{stat.value}</h3>

            {/* Label */}
            <p className="text-gray-500 mt-1 text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

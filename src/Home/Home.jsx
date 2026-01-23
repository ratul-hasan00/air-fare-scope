import { useState, useMemo } from "react";
import SearchBar from "../Internal Component/SearchBar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Destination from "../Extra Component/Destination";
import Deals from "../Extra Component/Deals";
import Reviews from "../Extra Component/Reviews";
import Stats from "../Extra Component/Stats";

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [timeRange, setTimeRange] = useState([0, 24]);

  const airlines = useMemo(() => {
    const all = flights.flatMap((f) => f.validatingAirlineCodes);
    return [...new Set(all)];
  }, [flights]);
  const stopsOptions = useMemo(() => {
    return [...new Set(flights.map((f) => f.itineraries[0].segments.length - 1))];
  }, [flights]);
  const minPrice = useMemo(() => {
    if (!flights.length) return 0;
    return Math.min(...flights.map((f) => parseFloat(f.price.total)));
  }, [flights]);
  const maxPrice = useMemo(() => {
    if (!flights.length) return 1000;
    return Math.max(...flights.map((f) => parseFloat(f.price.total)));
  }, [flights]);
  const filteredFlights = useMemo(() => {
    return flights.filter((f) => {
      const price = parseFloat(f.price.total);
      const stops = f.itineraries[0].segments.length - 1;
      const depHour = parseInt(f.itineraries[0].segments[0].departure.at.split("T")[1].slice(0, 2), 10);
      const airlineCheck =
        selectedAirlines.length === 0 ||
        f.validatingAirlineCodes.some((code) => selectedAirlines.includes(code));
      const stopsCheck =
        selectedStops.length === 0 || selectedStops.includes(stops);
      const priceCheck = price >= priceRange[0] && price <= priceRange[1];
      const timeCheck = depHour >= timeRange[0] && depHour <= timeRange[1];
      return airlineCheck && stopsCheck && priceCheck && timeCheck;
    });
  }, [flights, selectedAirlines, selectedStops, priceRange, timeRange]);
  const priceData = useMemo(() => {
    if (!flights.length) return [];
    const step = Math.ceil((maxPrice - minPrice) / 5);
    const ranges = Array.from({ length: 5 }, (_, i) => ({
      name: `${minPrice + i * step}-${minPrice + (i + 1) * step}`,
      count: flights.filter(
        (f) => parseFloat(f.price.total) >= minPrice + i * step && parseFloat(f.price.total) < minPrice + (i + 1) * step
      ).length,
    }));
    return ranges;
  }, [flights, minPrice, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <SearchBar setFlights={setFlights} />

      {flights.length === 0 && (
        <p className="text-center text-gray-500">
          Search flights to see results
        </p>
      )}

      {flights.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col lg:w-80 gap-6">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md space-y-6">
              <h2 className="text-lg font-bold mb-4">Filter Flights</h2>
              <div className="space-y-2">
                <p className="font-medium">Airlines</p>
                <div className="flex flex-wrap gap-2">
                  {airlines.map((a) => (
                    <button
                      key={a}
                      onClick={() =>
                        setSelectedAirlines((prev) =>
                          prev.includes(a)
                            ? prev.filter((x) => x !== a)
                            : [...prev, a]
                        )
                      }
                      className={`px-3 py-1 rounded-xl border ${selectedAirlines.includes(a)
                        ? "bg-black text-white"
                        : "bg-white"
                        }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Stops</p>
                <div className="flex gap-2">
                  {stopsOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() =>
                        setSelectedStops((prev) =>
                          prev.includes(s)
                            ? prev.filter((x) => x !== s)
                            : [...prev, s]
                        )
                      }
                      className={`px-3 py-1 rounded-xl border ${selectedStops.includes(s)
                        ? "bg-black text-white"
                        : "bg-white"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Price Range ({priceRange[0]} - {priceRange[1]})</p>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([minPrice, parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <p className="font-medium">Departure Time (Hours)</p>
                <input
                  type="range"
                  min={0}
                  max={24}
                  value={timeRange[1]}
                  onChange={(e) => setTimeRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <p className="font-medium mb-2">Price Distribution</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={priceData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#000000" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFlights.map((f, i) => {
              const segments = f.itineraries[0].segments;
              const from = segments[0].departure.iataCode;
              const to = segments.at(-1).arrival.iataCode;

              const departure = segments[0].departure.at;
              const arrival = segments.at(-1).arrival.at;

              const departureDate = departure.split("T")[0];
              const departureTime = departure.split("T")[1].slice(0, 5);

              const arrivalDate = arrival.split("T")[0];
              const arrivalTime = arrival.split("T")[1].slice(0, 5);

              const airline = f.validatingAirlineCodes.join(", ");
              const duration = f.itineraries[0].duration.replace("PT", "");
              const stops = segments.length - 1;

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-all p-6 flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-2xl font-bold mb-4">
                    <span>{from}</span>
                    <span className="text-gray-400 text-xl transition-transform duration-200 hover:rotate-45">✈</span>
                    <span>{to}</span>
                  </div>
                  <div className="flex justify-between mb-4 text-sm text-gray-700">
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Departure</span>
                      <span>{departureDate}</span>
                      <span>{departureTime}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium">Arrival</span>
                      <span>{arrivalDate}</span>
                      <span>{arrivalTime}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-gray-500 text-sm">
                    <span>Duration: {duration}</span>
                    <span>Airline: {airline}</span>
                    <span>Stops: {stops}</span>
                  </div>
                  <div className="flex justify-start">
                    <div className="border-2 border-black rounded-xl px-4 py-2 font-semibold">
                      {f.price.total} {f.price.currency}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Destination />
      <Deals />
      <Reviews />
      <Stats />
    </div>
  );
};

export default Home;

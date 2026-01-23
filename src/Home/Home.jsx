import { useState, useMemo } from "react";
import SearchBar from "../Internal Component/SearchBar";
import Spinner from "../Spinner/Spinner";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Destination from "../Extra Component/Destination";
import Deals from "../Extra Component/Deals";
import Reviews from "../Extra Component/Reviews";
import Stats from "../Extra Component/Stats";

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [timeRange, setTimeRange] = useState([0, 24]);

  /* ---------------- DERIVED DATA ---------------- */

  const airlines = useMemo(
    () => [...new Set(flights.flatMap(f => f.validatingAirlineCodes))],
    [flights]
  );

  const stopsOptions = useMemo(
    () => [...new Set(flights.map(f => f.itineraries[0].segments.length - 1))],
    [flights]
  );

  const minPrice = useMemo(() => {
    if (!flights.length) return 0;
    return Math.min(...flights.map(f => Number(f.price.total)));
  }, [flights]);

  const maxPrice = useMemo(() => {
    if (!flights.length) return 1000;
    return Math.max(...flights.map(f => Number(f.price.total)));
  }, [flights]);

  const filteredFlights = useMemo(() => {
    return flights.filter(f => {
      const price = Number(f.price.total);
      const stops = f.itineraries[0].segments.length - 1;
      const depHour = Number(
        f.itineraries[0].segments[0].departure.at
          .split("T")[1]
          .slice(0, 2)
      );

      return (
        (selectedAirlines.length === 0 ||
          f.validatingAirlineCodes.some(a =>
            selectedAirlines.includes(a)
          )) &&
        (selectedStops.length === 0 || selectedStops.includes(stops)) &&
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        depHour >= timeRange[0] &&
        depHour <= timeRange[1]
      );
    });
  }, [
    flights,
    selectedAirlines,
    selectedStops,
    priceRange,
    timeRange,
  ]);

  const priceData = useMemo(() => {
    if (!flights.length) return [];
    const step = Math.ceil((maxPrice - minPrice) / 5);

    return Array.from({ length: 5 }, (_, i) => ({
      name: `${minPrice + i * step}-${minPrice + (i + 1) * step}`,
      count: flights.filter(
        f =>
          Number(f.price.total) >= minPrice + i * step &&
          Number(f.price.total) < minPrice + (i + 1) * step
      ).length,
    }));
  }, [flights, minPrice, maxPrice]);

  /* ---------------- UI ---------------- */

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <SearchBar setFlights={setFlights} setLoading={setLoading} />

      {loading && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <Spinner />
        </div>
      )}

      {!loading && flights.length === 0 && (
        <p className="text-center text-gray-500">
          Search flights to see results
        </p>
      )}

      {!loading && flights.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE */}
          <div className="lg:w-80 space-y-6">
            {/* FILTER */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md space-y-5">
              <h2 className="text-lg font-bold">Filter Flights</h2>

              <div>
                <p className="font-medium mb-2">Airlines</p>
                <div className="flex flex-wrap gap-2">
                  {airlines.map(a => (
                    <button
                      key={a}
                      onClick={() =>
                        setSelectedAirlines(prev =>
                          prev.includes(a)
                            ? prev.filter(x => x !== a)
                            : [...prev, a]
                        )
                      }
                      className={`px-3 py-1 rounded-xl border ${
                        selectedAirlines.includes(a)
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Stops</p>
                <div className="flex gap-2">
                  {stopsOptions.map(s => (
                    <button
                      key={s}
                      onClick={() =>
                        setSelectedStops(prev =>
                          prev.includes(s)
                            ? prev.filter(x => x !== s)
                            : [...prev, s]
                        )
                      }
                      className={`px-3 py-1 rounded-xl border ${
                        selectedStops.includes(s)
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">
                  Price ({priceRange[0]} - {priceRange[1]})
                </p>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={e =>
                    setPriceRange([minPrice, Number(e.target.value)])
                  }
                  className="w-full"
                />
              </div>

              <div>
                <p className="font-medium mb-2">
                  Departure Time (Hours)
                </p>
                <input
                  type="range"
                  min={0}
                  max={24}
                  value={timeRange[1]}
                  onChange={e =>
                    setTimeRange([0, Number(e.target.value)])
                  }
                  className="w-full"
                />
              </div>
            </div>

            {/* BAR CHART */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md h-[280px]">
              <p className="font-medium mb-3">Price Distribution</p>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#000" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CARDS */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filteredFlights.map((f, i) => {
              const seg = f.itineraries[0].segments;
              const from = seg[0].departure.iataCode;
              const to = seg.at(-1).arrival.iataCode;
              const dep = seg[0].departure.at;
              const arr = seg.at(-1).arrival.at;

              return (
                <div
                  key={i}
                  className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all p-4"
                >
                  {/* ROUTE */}
                  <div className="flex justify-center items-center gap-2 text-lg font-semibold mb-2">
                    <span>{from}</span>
                    <span className="text-gray-400">✈</span>
                    <span>{to}</span>
                  </div>

                  {/* META */}
                  <p className="text-xs text-gray-500 text-center">
                    Airline: {f.validatingAirlineCodes.join(", ")}
                  </p>
                  <p className="text-xs text-gray-500 text-center mb-3">
                    Stops: {seg.length - 1}
                  </p>

                  {/* TIME */}
                  <div className="flex justify-between text-sm text-gray-700 mb-3">
                    <div>
                      <p className="font-medium">Departure</p>
                      <p>{dep.split("T")[0]}</p>
                      <p>{dep.split("T")[1].slice(0, 5)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Arrival</p>
                      <p>{arr.split("T")[0]}</p>
                      <p>{arr.split("T")[1].slice(0, 5)}</p>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="text-center">
                    <span className="inline-block border-2 border-black rounded-xl px-3 py-1 font-semibold text-sm">
                      {f.price.total} {f.price.currency}
                    </span>
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

import { useEffect, useState } from "react";
import { getAirportOptions, searchFlights } from "../services/amadeus";

const SearchBar = ({ setFlights }) => {
  const [originText, setOriginText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [originCode, setOriginCode] = useState("");
  const [destinationCode, setDestinationCode] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);

  useEffect(() => {
    if (originText.length < 2) return;
    getAirportOptions(originText).then(setOriginOptions);
  }, [originText]);

  useEffect(() => {
    if (destinationText.length < 2) return;
    getAirportOptions(destinationText).then(setDestinationOptions);
  }, [destinationText]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const flights = await searchFlights({
      origin: originCode,
      destination: destinationCode,
      date,
      passengers,
    });
    setFlights(flights);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-gray-100/80 backdrop-blur-md border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        {/* ORIGIN */}
        <div className="relative">
          <input
            value={originText}
            onChange={(e) => setOriginText(e.target.value)}
            placeholder="From"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black transition-all"
          />
          {originOptions.length > 0 && (
            <ul className="absolute bg-white border rounded-xl shadow-md mt-1 w-full z-10">
              {originOptions.map((a) => (
                <li
                  key={a.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOriginText(`${a.name} (${a.iataCode})`);
                    setOriginCode(a.iataCode);
                    setOriginOptions([]);
                  }}
                >
                  {a.name} ({a.iataCode})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* DESTINATION */}
        <div className="relative">
          <input
            value={destinationText}
            onChange={(e) => setDestinationText(e.target.value)}
            placeholder="To"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-black transition-all"
          />
          {destinationOptions.length > 0 && (
            <ul className="absolute bg-white border rounded-xl shadow-md mt-1 w-full z-10">
              {destinationOptions.map((a) => (
                <li
                  key={a.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setDestinationText(`${a.name} (${a.iataCode})`);
                    setDestinationCode(a.iataCode);
                    setDestinationOptions([]);
                  }}
                >
                  {a.name} ({a.iataCode})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* DATE */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border rounded-xl focus:ring-2 focus:ring-black"
        />

        {/* PASSENGERS */}
        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className="p-3 border rounded-xl focus:ring-2 focus:ring-black"
        >
          {[1,2,3,4,5].map(n => (
            <option key={n} value={n}>
              {n} Passenger{n > 1 && "s"}
            </option>
          ))}
        </select>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-black text-white rounded-xl font-medium
                     hover:scale-105 hover:bg-gray-900
                     transition-transform duration-200"
        >
          Search Flights
        </button>

      </div>
    </form>
  );
};

export default SearchBar;

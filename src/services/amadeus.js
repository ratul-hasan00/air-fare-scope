const ACCESS_TOKEN = import.meta.env.VITE_AMADEUS_ACCESS_TOKEN;
const BASE_URL = "https://test.api.amadeus.com";

export const getAirportOptions = async (keyword) => {
  if (!keyword) return [];

  try {
    const res = await fetch(
      `${BASE_URL}/v1/reference-data/locations?subType=AIRPORT&keyword=${keyword}&view=LIGHT&page[limit]=8`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Airport API error:", err);
      return [];
    }

    const json = await res.json();
    console.log("Airport search response:", json);
    return json.data || [];
  } catch (err) {
    console.error("Airport fetch failed:", err);
    return [];
  }
};

export const searchFlights = async ({ origin, destination, date, passengers }) => {
  if (!origin || !destination || !date) return [];

  const url = `${BASE_URL}/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=${passengers}&max=10`;
// console.log("ACCESS_TOKEN:", ACCESS_TOKEN);

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Flight API error:", err);
      return [];
    }

    const json = await res.json();
    console.log("Flight search API response:", json);
    return json.data || [];
  } catch (err) {
    console.error("Flight fetch failed:", err);
    return [];
  }
};

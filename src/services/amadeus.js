const ACCESS_TOKEN = import.meta.env.VITE_AMADEUS_ACCESS_TOKEN;

const BASE_URL = "https://test.api.amadeus.com";

/**
 * Airport search (autocomplete)
 */
export const getAirportOptions = async (keyword) => {
  if (!keyword) return [];

  const res = await fetch(
    `${BASE_URL}/v1/reference-data/locations?subType=AIRPORT&keyword=${keyword}&page[limit]=8`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  const json = await res.json();
  return json.data || [];
};

/**
 * Flight search
 */
export const searchFlights = async ({ origin, destination, date, passengers }) => {
  if (!origin || !destination || !date) return [];

  const url = `${BASE_URL}/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=${passengers}&max=10`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  const json = await res.json();
  return json.data || [];
};

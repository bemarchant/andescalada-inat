const baseUrl = "https://api.inaturalist.org/v1/";
const observationHistogramPath = "observations/histogram";
const observationPath = "observations/";

const fetchObservations = ({ taxon_id, lng, lat, radius }) => {
  const paramsObj = {
    taxon_id,
    lng,
    lat,
    radius,
  };

  const searchParams = new URLSearchParams(paramsObj);
  return fetch(baseUrl + observationPath + "?" + searchParams.toString());
};

export const getObservation = async (climbingZone, kingdom_id) => {
  const res = await fetchObservations({
    taxon_id: kingdom_id,
    lng: climbingZone.lng,
    lat: climbingZone.lat,
    radius: climbingZone.radius,
  });
  data = await res.json();

  return data;
};

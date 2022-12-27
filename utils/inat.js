const baseUrl = "https://api.inaturalist.org/v1/";
const observationPath = "observations/";
import { WILD_LIFE_DATA } from "./constants";
import { useQuery } from "@tanstack/react-query";

const fetchObservations = ({ taxon_id, lng, lat, radius, locale }) => {
  const paramsObj = {
    taxon_id,
    lng,
    lat,
    radius,
    locale,
  };

  const searchParams = new URLSearchParams(paramsObj);
  return fetch(baseUrl + observationPath + "?" + searchParams.toString());
};

export const getObservation = async (climbingZone, kingdom_id) => {
  let data;
  const res = await fetchObservations({
    taxon_id: kingdom_id,
    lng: climbingZone.lng,
    lat: climbingZone.lat,
    radius: climbingZone.radius,
    locale: "es",
  });
  data = await res.json();

  return data;
};

export const downLoadWildLifeData = (climbingZone, kingdom) => {
  const query = useQuery({
    queryKey: ["observation", kingdom.id],
    queryFn: getObservation.bind(this, climbingZone, kingdom.id),
  });

  if (!query.isLoading) {
    let data = { observations: query.data };
    WILD_LIFE_DATA.push({ taxaId: kingdom.id, data: data });
  }

  return query;
};

export const getUserNameObservation = (observation) => {
  const userName = observation?.["user"]?.["name"];
  if (userName === "") {
    return observation?.["user"]?.["login"];
  } else if (userName) {
    return observation?.["user"]?.["name"];
  }
  return "Usuario Desconocido";
};

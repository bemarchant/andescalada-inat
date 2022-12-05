import { useQuery } from "@tanstack/react-query";
import { getObservation } from "../utils/inat.js";
import KingdomCard from "./KingdomCard";

export const WildLifeData = [];

const Observation = ({ children, climbingZone, kingdom }) => {
  console.log("Observation.jsx");
  const query = useQuery({
    queryKey: ["observation", kingdom.id],
    queryFn: getObservation.bind(this, climbingZone, kingdom.id),
  });

  if (!query.isLoading) {
    let data = { taxa_id: kingdom.id, observations: query.data };
    WildLifeData.push(data);

    return (
      <KingdomCard kingdom={kingdom} total_count={query.data["total_results"]}>
        {children}
      </KingdomCard>
    );
  } else {
    return;
  }
};

export default Observation;

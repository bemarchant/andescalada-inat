import { useQuery } from "@tanstack/react-query";
import { getObservation } from "../utils/inat";
import KingdomCard from "./KingdomCard";

export const WildLifeData = [];

const Observation = ({ navigation, children, climbingZone, kingdom }) => {
  const query = useQuery({
    queryKey: ["observation", kingdom.id],
    queryFn: getObservation.bind(this, climbingZone, kingdom.id),
  });

  if (!query.isLoading) {
    let data = { taxa_id: kingdom.id, observations: query.data };
    WildLifeData.push(data);
    return (
      <KingdomCard navigation={navigation} kingdom={kingdom} total_count={query.data["total_results"]}/>    );
  } else {
    return;
  }
};

export default Observation;

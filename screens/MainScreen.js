import { View, StyleSheet } from "react-native";
import KingdomCard from "../components/KingdomCard";
import { downLoadWildLifeData } from "../utils/inat";
import { WILD_LIFE_DATA, CLIMBING_ZONE, KINGDOM } from "../utils/constants";

export const MainScreen = ({ navigation }) => {
  let query1 = downLoadWildLifeData(CLIMBING_ZONE.elmanzano, KINGDOM.animalia);
  let query2 = downLoadWildLifeData(CLIMBING_ZONE.elmanzano, KINGDOM.plantae);
  let query3 = downLoadWildLifeData(CLIMBING_ZONE.elmanzano, KINGDOM.funga);

  const getTotalTaxaObservations = (taxaId) => {
    return WILD_LIFE_DATA.find((w) => w["taxaId"] === taxaId)["data"][
      "observations"
    ]["total_results"];
  };

  if (query1.isLoading || query2.isLoading || query3.isLoading) {
    return;
  } else {
    return (
      <View style={styles.screenContainer}>
        <View>
          <KingdomCard
            climbingZone={CLIMBING_ZONE.elmanzano}
            kingdom={KINGDOM.animalia}
            navigation={navigation}
            total_count={getTotalTaxaObservations(KINGDOM.animalia.id)}
          >
            Reino Animal
          </KingdomCard>
        </View>

        <View>
          <KingdomCard
            climbingZone={CLIMBING_ZONE.elmanzano}
            kingdom={KINGDOM.plantae}
            navigation={navigation}
            total_count={getTotalTaxaObservations(KINGDOM.plantae.id)}
          >
            Reino Planta
          </KingdomCard>
        </View>

        <View>
          <KingdomCard
            climbingZone={CLIMBING_ZONE.elmanzano}
            kingdom={KINGDOM.funga}
            navigation={navigation}
            total_count={getTotalTaxaObservations(KINGDOM.funga.id)}
          >
            Reino Funga
          </KingdomCard>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#454545ff",
  },
});

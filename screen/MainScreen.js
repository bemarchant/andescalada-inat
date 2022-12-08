import { Text, View, StyleSheet } from "react-native";
import KingdomCard from "../components/KingdomCard";
import { downLoadWildLifeData } from "../utils/inat";
import { WILD_LIFE_DATA, CLIMBING_ZONE, KINGDOM } from "../utils/Constants";

const MainScreen = ({ navigation }) => {
  downLoadWildLifeData(CLIMBING_ZONE.elmanzano, KINGDOM.animalia);
  downLoadWildLifeData(CLIMBING_ZONE.elmanzano, KINGDOM.plantae);
  downLoadWildLifeData(CLIMBING_ZONE.elmanzano, KINGDOM.funga);

  const getTotalObservations = () => {};

  const getTotalTaxaObservations = (taxaId) => {
    return WILD_LIFE_DATA.find((w) => w["taxaId"] === taxaId)["data"][
      "observations"
    ]["total_results"];
  };

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
};

export default MainScreen;

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

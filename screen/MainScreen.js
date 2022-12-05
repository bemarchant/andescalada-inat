import { Text, View, StyleSheet } from "react-native";
import Observation from "../components/Observation";
import { CLIMBING_ZONE, KINGDOM } from "../utils/Constants";

const MainScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <Observation
          climbingZone={CLIMBING_ZONE.elmanzano}
          kingdom={KINGDOM.animalia}
        >
          Reino Animal
        </Observation>
        <Observation
          climbingZone={CLIMBING_ZONE.elmanzano}
          kingdom={KINGDOM.plantae}
        >
          Reino Planta
        </Observation>
        <Observation
          climbingZone={CLIMBING_ZONE.elmanzano}
          kingdom={KINGDOM.funga}
        >
          Reino Fungi
        </Observation>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#454545ff",
    justifyContent: "center",
  },
});

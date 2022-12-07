import { Text, View, StyleSheet } from "react-native";
import Observation from "../components/Observation";
import { CLIMBING_ZONE, KINGDOM } from "../utils/Constants";

const MainScreen = () => {
  return (
    <View style={styles.screenContainer}>
      {/* <View> TITLE </View> */}

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
    justifyContent: "flex-end",
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#454545ff",
  },
});

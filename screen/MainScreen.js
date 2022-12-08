import { Text, View, StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Observation from "../components/Observation";
import { CLIMBING_ZONE, KINGDOM } from "../utils/Constants";

const queryClient = new QueryClient();

const MainScreen = ({ navigation }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.screenContainer}>
        {/* <View> TITLE </View> */}

        <View>
          <Observation
            climbingZone={CLIMBING_ZONE.elmanzano}
            kingdom={KINGDOM.animalia}
            navigation={navigation}
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
    </QueryClientProvider>
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

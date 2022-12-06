import { Image, Dimensions, View, StyleSheet } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import Observation, { WildLifeData } from "../components/Observation";

const MIN_OBS = 5;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FieldGuideScreen = () => {
  for (let i = 0; i < MIN_OBS; i++) {}

  console.log("WildLifeData[0].observations : ", WildLifeData[0]);

  const observation = WildLifeData[1].observations["results"][12];

  return (
    <View style={styles.wildLifeCardContainer}>
      <WildLifeCard observation={observation} />
    </View>
  );
};

export default FieldGuideScreen;

const styles = StyleSheet.create({
  optionContainer: {
    backgroundColor: "#454545ff",
  },
  wildLifeCardContainer: {
    backgroundColor: "#454545ff",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Image, Dimensions, View, StyleSheet } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import Observation, { WildLifeData } from "../components/Observation";

const MIN_OBS = 5;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FieldGuideScreen = () => {
  for (let i = 0; i < MIN_OBS; i++) {}

  const observation = WildLifeData[1].observations["results"][0];

  return (
    <View style={styles.fieldWildLifeContainer}>
      <WildLifeCard observation={observation} />
    </View>
  );
};

export default FieldGuideScreen;

const styles = StyleSheet.create({
  optionContainer: {
    //backgroundColor: "#454545ff",
  },
  fieldWildLifeContainer: {
    flex: 1,
  },
});

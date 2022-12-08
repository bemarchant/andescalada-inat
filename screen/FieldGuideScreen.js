import { Image, Dimensions, View, StyleSheet } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import { WILD_LIFE_DATA } from "../utils/Constants";

const MIN_OBS = 5;
let WildLifeData = WILD_LIFE_DATA;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FieldGuideScreen = () => {
  for (let i = 0; i < MIN_OBS; i++) {}

  const observation = WILD_LIFE_DATA.find((w) => w["taxaId"] === 1)["data"][
    "observations"
  ]["results"][0];

  console.log(Object.keys(observation));
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

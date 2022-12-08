import { useLayoutEffect } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import { WILD_LIFE_DATA } from "../utils/Constants";

const MIN_OBS = 5;
let WildLifeData = WILD_LIFE_DATA;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FieldGuideScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Reino",
    });
  }, [navigation]);

  const observation = WILD_LIFE_DATA.find(
    (w) => w["taxaId"] === route.params.taxaId
  )["data"]["observations"]["results"][1];

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

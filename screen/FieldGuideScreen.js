import { useLayoutEffect, useState } from "react";
import { Dimensions, View, StyleSheet, Pressable } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import { WILD_LIFE_DATA } from "../utils/Constants";

const MIN_OBS = 5;
let WildLifeData = WILD_LIFE_DATA;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FieldGuideScreen = ({ navigation, route }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const swipeRight = () => {
    setPhotoIndex(photoIndex + 1);
  };

  const swipeLeft = () => {
    if (photoIndex === 0) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation]);

  const observation = WILD_LIFE_DATA.find(
    (w) => w["taxaId"] === route.params.taxaId
  )["data"]["observations"]["results"][photoIndex];

  return (
    <View style={styles.fieldGuideContainer}>
      <Pressable onPress={swipeLeft}>
        <View style={styles.leftPressedContainer}></View>
      </Pressable>
      <WildLifeCard style={styles.cardContainer} observation={observation} />

      <Pressable onPress={swipeRight}>
        <View style={styles.rightPressedContainer}></View>
      </Pressable>
    </View>
  );
};

export default FieldGuideScreen;

const styles = StyleSheet.create({
  optionContainer: {
    //backgroundColor: "#454545ff",
  },
  fieldGuideContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  rightPressedContainer: {
    flex: 1,
    //backgroundColor: "red",
    width: 100,
  },
  leftPressedContainer: {
    flex: 1,
    //backgroundColor: "green",
    width: 100,
  },
});

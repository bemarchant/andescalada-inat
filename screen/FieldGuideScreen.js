import { useLayoutEffect, useState } from "react";
import { Dimensions, View, StyleSheet, Pressable } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import { WILD_LIFE_DATA } from "../utils/Constants";

const MIN_OBS = 5;
let WildLifeData = WILD_LIFE_DATA;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FieldGuideScreen = ({ navigation, route }) => {
  const [photoIndex, setPhotoIndex] = useState(5);

  const clickRight = () => {
    console.log("swipeRight");
    setPhotoIndex(photoIndex + 1);
  };

  const clickLeft = () => {
    console.log("swipeLeft");

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

  const observationLeft = WILD_LIFE_DATA.find(
    (w) => w["taxaId"] === route.params.taxaId
  )["data"]["observations"]["results"][photoIndex - 1];

  const observationMiddle = WILD_LIFE_DATA.find(
    (w) => w["taxaId"] === route.params.taxaId
  )["data"]["observations"]["results"][photoIndex];

  const observationRight = WILD_LIFE_DATA.find(
    (w) => w["taxaId"] === route.params.taxaId
  )["data"]["observations"]["results"][photoIndex + 1];

  return (
    <View style={styles.fieldGuideContainer}>
      <Pressable onPress={clickLeft} style={styles.leftPressedContainer}>
        <WildLifeCard observation={observationLeft} position={"left"} />
      </Pressable>

      <Pressable style={styles.cardContainer}>
        <WildLifeCard observation={observationMiddle} position={"middle"} />
      </Pressable>

      <Pressable onPress={clickRight} style={styles.rightPressedContainer}>
        <WildLifeCard observation={observationRight} position={"right"} />
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
  },
  cardContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 400,
    zIndex: 1,
    transform: [{ scale: 1.1 }],

    //backgroundColor: "blue",
  },
  rightPressedContainer: {
    flex: 1,
    alignItems: "flex-start",
    opacity: 0.3,
    height: 350,
    transform: [
      { scale: 0.9 },
      { rotateZ: "30deg" },
      { translateX: -50 },
      { translateY: 20 },
    ],

    //backgroundColor: "red",
  },
  leftPressedContainer: {
    flex: 1,
    alignItems: "flex-start",
    opacity: 0.3,
    height: 350,
    transform: [
      { scale: 0.9 },
      { rotateZ: "-30deg" },
      { translateX: -100 },
      { translateY: 20 },
    ],
    //backgroundColor: "red",
  },
});

import { useLayoutEffect, useState, useMemo } from "react";
import { Dimensions, View, StyleSheet, Pressable } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import { WILD_LIFE_DATA } from "../utils";

const windowHeight = Dimensions.get("window").height;

const getObservation = (photoIndex, route) => {
  return WILD_LIFE_DATA.find((w) => w["taxaId"] === route.params.taxaId)[
    "data"
  ]["observations"]["results"][photoIndex];
};

export const FieldGuideScreen = ({ navigation, route }) => {
  const wildLifeDeck = useMemo(() => {
    return WILD_LIFE_DATA.filter((w) => w["taxaId"] === route.params.taxaId)[0][
      "data"
    ]["observations"]["results"].map((w) => <WildLifeCard observation={w} />);
  }, [route.params.taxaId]);

  const [photoIndex, setPhotoIndex] = useState(0);

  const onPressHandler = (position) => {
    if (position === "right") {
      setPhotoIndex(photoIndex + 1);
      return;
    } else if (position === "middle") {
      navigation.navigate("WildLifeCardEditScreen", {
        observation: getObservation(photoIndex, route),
      });
      return;
    } else if (position === "left") {
      if (photoIndex === 0) {
        setPhotoIndex(0);
      } else {
        setPhotoIndex(photoIndex - 1);
      }
      return;
    }
    return;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation]);

  const observationLeft = getObservation(photoIndex - 1, route);
  const observationMiddle = getObservation(photoIndex, route);
  const observationRight = getObservation(photoIndex + 1, route);

  const leftCard = () => {
    if (observationLeft) {
      return (
        <Pressable
          onPress={onPressHandler.bind(this, "left")}
          style={styles.leftPressedContainer}
        >
          {wildLifeDeck[photoIndex - 1]}
        </Pressable>
      );
    }
    return;
  };
  const rightCard = () => {
    if (observationRight) {
      return (
        <Pressable
          onPress={onPressHandler.bind(this, "right")}
          style={styles.rightPressedContainer}
        >
          {wildLifeDeck[photoIndex + 1]}
        </Pressable>
      );
    }
    return;
  };
  const middleCard = () => {
    if (observationMiddle) {
      return (
        <Pressable
          onPress={onPressHandler.bind(this, "middle")}
          style={styles.cardContainer}
        >
          {wildLifeDeck[photoIndex]}
        </Pressable>
      );
    }
    return;
  };

  return (
    <View style={styles.fieldGuideContainer}>
      {leftCard()}
      {middleCard()}
      {rightCard()}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    //backgroundColor: "#454545ff",
  },
  fieldGuideContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#454545ff",
  },
  cardContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: windowHeight * 0.8,

    zIndex: 1,
    transform: [{ scale: 1.3 }],

    //backgroundColor: "blue",
  },
  rightPressedContainer: {
    flex: 1,
    alignItems: "flex-start",
    opacity: 0.3,
    height: windowHeight * 0.7,
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
    height: windowHeight * 0.7,
    transform: [
      { scale: 0.9 },
      { rotateZ: "-30deg" },
      { translateX: -100 },
      { translateY: 20 },
    ],
    //backgroundColor: "red",
  },
});

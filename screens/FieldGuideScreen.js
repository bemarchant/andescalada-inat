import { useLayoutEffect, useState, useMemo } from "react";
import { Dimensions, View, StyleSheet, Pressable } from "react-native";
import { WildLifeCard } from "../components/WildLifeCard";
import { WILD_LIFE_DATA } from "../utils";

const MIN_OBS = 5;
let WildLifeData = WILD_LIFE_DATA;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const getObservation = (photoIndex, route) => {
  return WILD_LIFE_DATA.find((w) => w["taxaId"] === route.params.taxaId)[
    "data"
  ]["observations"]["results"][photoIndex];
};

export const FieldGuideScreen = ({ navigation, route }) => {
  const wildLifeDeck = useMemo(() => {
    WILD_LIFE_DATA.map((w) => (
      <WildLifeCard observation={w} position={"left"} />
    ));
  }, []);

  const [photoIndex, setPhotoIndex] = useState(0);
  const onPressHandler = (position) => {
    if (position === "right") {
      setPhotoIndex(photoIndex + 1);
      return;
    } else if (position === "middle") {
      navigation.navigate("EditWildLifeCardScreen", {
        title: route.params.title,
        color: route.params.color,
        taxaId: route.params.id,
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
          <WildLifeCard observation={observationLeft} position={"left"} />
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
          <WildLifeCard observation={observationRight} position={"right"} />
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
          <WildLifeCard observation={observationMiddle} position={"middle"} />
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
  },
  cardContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: windowHeight * 0.5,

    zIndex: 1,
    transform: [{ scale: 1.1 }],

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
import { useState, useContext, useEffect } from "react";
import Animated, { runOnJS } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  Platform,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import ImageGestureHandler from "./ImageGestureHandler";
import { ResearchGradeStatus } from "./ResearchGradeStatus";
import { CientificName } from "./CientificName";
import { CommonName } from "./CommonName";
import { ConservationStatusBar } from "./ConservationStatusBar";
import { ClimbingZoneText } from "./ClimbingZoneText";
import { UserName } from "./UserName";
import { DateObservation } from "./DateObservation";
import { PopMenuContext } from "../../store/context/popMenu-context";
import { DISTRIBUTIONS } from "../../utils";
import { getUserNameObservation } from "../../utils";
import { ImageSettingsContext } from "../../store/context/imageSettings-context";
let windowWidth = Dimensions.get("window").width;
let windowHeight = Dimensions.get("window").height;

export const ObservationInfoBox = ({ observation, cardWidth }) => {
  const popMenuCtx = useContext(PopMenuContext);
  const imageSettingsCtx = useContext(ImageSettingsContext);

  useEffect(() => {}, [popMenuCtx.visibility], [popMenuCtx.selectedOption]);

  const [circlePosX, setCirclePosX] = useState(0);
  const panCircleStatusBar = Gesture.Pan().onUpdate((gesture) => {
    runOnJS(setCirclePosX)(gesture.translationX);
  });
  let day = observation?.["observed_on_details"]?.["day"] ?? "??";
  let month = observation?.["observed_on_details"]?.["month"] ?? "??";
  let year = observation?.["observed_on_details"]?.["year"] ?? "????";
  let date = day + "/" + month + "/" + year;
  let userName = getUserNameObservation(observation);
  let climbingZone = "El Manzano" ?? "Desconocido";
  let cientificName =
    observation?.["taxon"]?.["name"] ?? "Sin nombre científico";
  let commonName =
    observation?.["taxon"]?.["preferred_common_name"] ?? "Sin nombre común";
  let userIconUrl = observation?.["user"]?.["icon_url"];
  return (
    <>
      <View style={[styles.infoContainer]}>
        <GestureDetector gesture={panCircleStatusBar}>
          <View>
            <View
              style={[styles.topBackground, { width: cardWidth - 24 }]}
            ></View>

            <View style={[styles.topInfoContainer, { width: cardWidth - 24 }]}>
              <CommonName>{commonName}</CommonName>
              <Pressable
                onPress={() => {
                  popMenuCtx.setVisibility(true);
                  popMenuCtx.setOptions(DISTRIBUTIONS);
                }}
              >
                {/* <View
              style={[
                styles.distributionContainer,
                {
                  borderColor: popMenuCtx.selectedOption.borderColor,
                  backgroundColor: popMenuCtx.selectedOption.color,
                },
              ]}
            >
              <Text style={[styles.distributionText]}>
                {popMenuCtx.selectedOption.shortName}
              </Text>
            </View> */}
              </Pressable>

              {/* <ResearchGradeStatus /> */}
              <CientificName>{cientificName}</CientificName>

              <View style={styles.statusBar}>
                <ConservationStatusBar
                  style={styles.statusBar}
                  circlePosX={circlePosX}
                />
              </View>
            </View>
          </View>
        </GestureDetector>
        <ImageGestureHandler>
          <View style={styles.imageGestureHandlerContainer}></View>
        </ImageGestureHandler>
        <View style={styles.bottomInfo}>
          <View
            style={[styles.bottomBackground, { width: cardWidth - 24 }]}
          ></View>
          <View
            style={[styles.bottomInfoContainer, , { width: cardWidth - 24 }]}
          >
            <ClimbingZoneText>{climbingZone}</ClimbingZoneText>
            <UserName userIconUrl={userIconUrl}>{userName}</UserName>
            <DateObservation>{date}</DateObservation>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    justifyContent: "center",
  },

  topBackground: {
    height: 100,
    opacity: 0.3,
    backgroundColor: "black",
    marginLeft: 12,
    marginTop: 12 + 30,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  imageGestureHandlerContainer: {
    flex: 1,
    // borderColor: "white",
    // borderWidth: 1,
  },

  bottomBackground: {
    height: 100,
    opacity: 0.3,
    backgroundColor: "black",
    marginLeft: 12,
    marginBottom: 12 + 30,
    borderTopWidth: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  infoContainer: {
    flex: 1,
    flexDirection: "column",
  },

  // headerIconsContainer: {
  //   padding: 0,
  //   flexDirection: "row",
  // },

  textInput: {},

  topInfoContainer: {
    flex: 1,
    height: 90,
    position: "absolute",
    justifyContent: "space-around",
    //backgroundColor: "red",
    top: 42,
    left: 20,
  },

  bottomInfoContainer: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 12,
    top: 115,
    paddingHorizontal: 10,
    // borderTopColor: "gray",
    // borderTopWidth: 1,
  },
  distributionContainer: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    width: 30,
    height: 12,
    borderWidth: 1,
    borderRadius: 5,
  },

  distributionText: {
    fontSize: 8,
    color: "white",
    fontWeight: "bold",
    overflow: "hidden",
  },
});

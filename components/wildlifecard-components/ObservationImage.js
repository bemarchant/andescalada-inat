import { Dimensions, View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { getPhotoImageUri } from "../../utils";

let frameColor = "black";
let widthWindow = Dimensions.get("window").width;
let heightWindow = Dimensions.get("window").height;

export const ObservationImage = ({ observation, cardWidth, cardHeight }) => {
  const widthPhoto =
    observation["photos"][0]["original_dimensions"]["width"] * 1;
  const heightPhoto =
    observation["photos"][0]["original_dimensions"]["height"] * 1;

  const image_uri = getPhotoImageUri(observation);

  const imageScale = useSharedValue(1);
  const imagePosX = useSharedValue(0);
  const imagePosY = useSharedValue(0);
  const centerPinchX = useSharedValue(0);
  const centerPinchY = useSharedValue(0);

  const imageCenter = {
    x: widthWindow / 2,
    y: heightWindow / 2,
  };

  const pinchImage = Gesture.Pinch().onUpdate((gesture) => {
    imageScale.value = gesture.scale;
  });

  const panImage = Gesture.Pan().onUpdate((gesture) => {
    imagePosX.value = gesture.translationX;
    imagePosY.value = gesture.translationY;
  });

  const styleAnimated = useAnimatedStyle(() => ({
    transform: [
      { translateX: imagePosX.value + centerPinchX.value - imageCenter.x },
      { translateY: imagePosY.value + centerPinchY.value - imageCenter.y },
      { scale: imageScale.value },
      { translateX: imagePosX.value - centerPinchX.value + imageCenter.x },
      { translateY: imagePosY.value - centerPinchY.value + imageCenter.y },
    ],
  }));

  const composedGesture = Gesture.Simultaneous(pinchImage, panImage);

  return (
    <View style={{ position: "absolute" }}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View>
          <Animated.Image
            style={styleAnimated}
            source={{
              uri: image_uri,
              width: widthPhoto,
              height: heightPhoto,
            }}
          />
          <View style={styles.rootContainer}>
            <View
              style={[
                styles.frameContainer,
                {
                  width: cardWidth,
                  height: cardHeight * 0.72,
                  top: -heightPhoto,
                },
              ]}
            />
            <View
              style={[
                styles.bottomContainer,
                ,
                {
                  width: cardWidth,
                  height: cardHeight * 0.3,
                  top: -heightPhoto + cardHeight * 0.72,
                },
              ]}
            />
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    opacity: 0.4,
  },

  bottomContainer: {
    position: "absolute",
    backgroundColor: frameColor,
  },

  frameContainer: {
    position: "absolute",
    borderWidth: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: frameColor,
    backgroundColor: "transparent",
  },
});

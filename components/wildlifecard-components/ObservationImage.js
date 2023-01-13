import { Dimensions, View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { getPhotoImageUri } from "../../utils";
import { useContext } from "react";
import { ImageSettingsContext } from "../../store/context/imageSettings-context";

let widthWindow = Dimensions.get("window").width;
let heightWindow = Dimensions.get("window").height;

export const ObservationImage = ({ observation, cardWidth, cardHeight }) => {
  const imageSettingsCtx = useContext(ImageSettingsContext);

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
      { translateX: imageSettingsCtx.posX },
      { translateY: imageSettingsCtx.posY },
      { scale: imageSettingsCtx.scale },
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
                  height: cardHeight,
                  top: -heightPhoto,
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

  frameContainer: {
    position: "absolute",
    borderWidth: 10,
    marginLeft: 0,
    borderRadius: 10,
    borderColor: "black",
    borderTopWidth: 40,
    borderBottomWidth: 40,
  },
});

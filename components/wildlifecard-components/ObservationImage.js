import { Dimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { getPhotoImageUri } from "../../utils";

let widthWindow = Dimensions.get("window").width;
let heightWindow = Dimensions.get("window").height;

export const ObservationImage = ({ observation }) => {
  const widthPhoto =
    observation["photos"][0]["original_dimensions"]["width"] * 0.6;
  const heightPhoto =
    observation["photos"][0]["original_dimensions"]["height"] * 0.5;

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
    <View>
      <GestureDetector gesture={composedGesture}>
        <Animated.Image
          style={styleAnimated}
          source={{
            uri: image_uri,
            width: widthPhoto,
            height: heightPhoto,
          }}
        />
      </GestureDetector>
    </View>
  );
};

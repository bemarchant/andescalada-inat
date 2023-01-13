import { Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useContext } from "react";
import { useSharedValue, runOnJS } from "react-native-reanimated";
import { ImageSettingsContext } from "../../store/context/imageSettings-context";

let windowWidth = Dimensions.get("window").width;

const ImageGestureHandler = ({ children }) => {
  const imageSettingsCtx = useContext(ImageSettingsContext);

  const imageCenter = {
    x: windowWidth / 2,
    y: windowWidth / 2,
  };

  const pinchImage = Gesture.Pinch().onUpdate((gesture) => {
    const scale = gesture.scale * 2;
    runOnJS(imageSettingsCtx.setScale)(scale);
  });

  const panImage = Gesture.Pan().onUpdate((gesture) => {
    const posX = gesture.translationX * 2;
    const posY = gesture.translationY * 2;
    runOnJS(imageSettingsCtx.setPosX)(posX);
    runOnJS(imageSettingsCtx.setPosY)(posY);
  });

  const composedGesture = Gesture.Simultaneous(pinchImage, panImage);

  return (
    <GestureDetector gesture={composedGesture}>{children}</GestureDetector>
  );
};

export default ImageGestureHandler;

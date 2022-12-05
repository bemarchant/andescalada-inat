import {
  SkPoint,
  vec,
  Image,
  useImage,
  useClockValue,
  Canvas,
  useComputedValue,
} from "@shopify/react-native-skia";

const interval = 3000;

const LoadingScreen = () => {
  const image = useImage(require("../assets/images/puma-concolor-huella.png"));
  const clock = useClockValue();
  const opacity = useComputedValue(() => {
    return (clock.current % interval) / interval;
  }, [clock]);

  return (
    <Canvas style={{ flex: 1 }}>
      {image && (
        <Image
          image={image}
          fit="contain"
          x={200}
          y={100}
          width={40}
          height={40}
          opacity={opacity}
        />
      )}
    </Canvas>
  );
};

export default LoadingScreen;

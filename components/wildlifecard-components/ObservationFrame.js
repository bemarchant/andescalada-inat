import { Text, View } from "react-native";

export const ObservationFrame = () => {
  return (
    <>
      {/* <View
        style={{
          position: "absolute",
          bottom: 185,
          borderWidth: 10,
          borderColor: "black",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 5,
          opacity: 0.3,
        }}
      /> */}
      <View
        style={{
          position: "absolute",
          width: 400,
          height: 185,
          bottom: 0,
          backgroundColor: "black",
          opacity: 0.3,
        }}
      />
    </>
  );
};

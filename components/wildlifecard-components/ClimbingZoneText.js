import { View, Text, StyleSheet } from "react-native";
import ClimbZoneIcon from "../icons/ClimbZoneIcon";

export const ClimbingZoneText = ({ children }) => {
  return (
    <View style={styles.rootView}>
      {/* <View style={styles.iconContainer}>
        <ClimbZoneIcon />
      </View> */}
      <Text style={styles.userNameText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flexDirection: "row",
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 6,
  },

  userNameText: {
    color: "white",
    fontSize: 14,
  },
});

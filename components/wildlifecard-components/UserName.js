import { View, Image, Text, StyleSheet } from "react-native";
import UserIcon from "../icons/UserIcon";

export const UserName = ({ children, userIconUrl }) => {
  const userIcon = userIconUrl ? (
    <Image
      style={styles.iconContainer}
      source={{
        uri: userIconUrl,
        width: 20,
        height: 20,
      }}
    ></Image>
  ) : (
    <View style={styles.iconContainer}>
      <UserIcon />
    </View>
  );

  return (
    <View style={styles.rootView}>
      {/* <View style={{ justifyContent: "center" }}>{userIcon}</View> */}
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
    borderRadius: 14,
  },

  userNameText: {
    color: "white",
    fontSize: 14,
  },
});

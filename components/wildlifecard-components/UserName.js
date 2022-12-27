import { View, Image, Text, StyleSheet } from "react-native";
import UserIcon from "../icons/UserIcon";

export const UserName = ({ children, userIconUrl }) => {
  const userIcon = userIconUrl ? (
    <Image
      style={styles.iconContainer}
      source={{
        uri: userIconUrl,
        width: 14,
        height: 14,
      }}
    ></Image>
  ) : (
    <View style={styles.iconContainer}>
      <UserIcon />
    </View>
  );

  return (
    <View style={styles.rootView}>
      <View style={{ justifyContent: "center" }}>{userIcon}</View>
      <Text style={styles.userNameText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: "blue",
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "white",
    //backgroundColor: "red",
  },

  userNameText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 3,
  },
});

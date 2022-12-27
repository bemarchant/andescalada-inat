import { TextInput, StyleSheet } from "react-native";

export const CommonName = ({ children }) => {
  return <TextInput style={styles.commonNameText}>{children}</TextInput>;
};

const styles = StyleSheet.create({
  commonNameText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    paddingVertical: 1,
  },
});

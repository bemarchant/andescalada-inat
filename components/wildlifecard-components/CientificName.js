import { Text, StyleSheet } from "react-native";

export const CientificName = ({ children }) => {
  return (
    <Text style={styles.cientificNameText}>
      {"("}
      {children}
      {")"}
    </Text>
  );
};

const styles = StyleSheet.create({
  cientificNameText: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "italic",
  },
});

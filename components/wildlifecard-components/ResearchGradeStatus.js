import { View, StyleSheet } from "react-native";
import {
  CasualIdIcon,
  NeedIdIcon,
  ResearchGradeIdIcon,
} from "../icons/ResearchGradeIcons";

export const ResearchGradeStatus = () => {
  return (
    <View style={styles.researchStatusContainer}>
      <View style={styles.researchStatus}>
        <CasualIdIcon />
      </View>
      <View style={styles.researchStatus}>
        <NeedIdIcon />
      </View>
      <View style={styles.researchStatus}>
        <ResearchGradeIdIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  researchStatusContainer: {
    flexDirection: "row",
    position: "absolute",
    right: -5,
    bottom: 0,
  },

  researchStatus: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});

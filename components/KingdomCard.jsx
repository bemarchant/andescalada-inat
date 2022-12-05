import { View, Text, StyleSheet, Pressable } from "react-native";
const MIN_HEIGHT = 80;

const kingdomOnPressHandler = (text) => {
  console.log("kingdom : ", text);
};

const KingdomCard = ({ kingdom, children, total_count }) => {
  let height = total_count < MIN_HEIGHT ? MIN_HEIGHT : total_count;
  height = MIN_HEIGHT;
  return (
    <View>
      <Pressable onPress={kingdomOnPressHandler.bind(this, children)}>
        <View
          style={[
            styles.kingdomContainer,
            { backgroundColor: kingdom.color, height: height },
          ]}
        >
          <Text style={styles.kingdomText}> {total_count} </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default KingdomCard;

const styles = StyleSheet.create({
  kingdomContainer: {
    flexDirection: "row",
    margin: 10,
    borderColor: "black",
    backgroundColor: "pink",
    borderWidth: 0,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  kingdomText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#454545ff",
  },
});

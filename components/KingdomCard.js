import { View, Text, StyleSheet, Pressable } from "react-native";
import { KINGDOM } from "../utils/constants";
import {
  AnimalKingdomIcon,
  FungiKingdomIcon,
  PlantaeKingdomIcon,
} from "./icons";

const KingdomCard = ({ navigation, kingdom, total_count }) => {
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("FieldGuideScreen", {
            title: kingdom.name,
            color: kingdom.color,
            taxaId: kingdom.id,
          })
        }
      >
        <View
          style={[
            styles.kingdomBarContainer,
            { backgroundColor: kingdom.color, height: 50 },
          ]}
        >
          <View style={styles.kingdomIcon}>{getKingdomIcon(kingdom.id)}</View>

          <Text style={styles.kingdomText}> {total_count} </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default KingdomCard;

const getKingdomIcon = (taxa_id) => {
  if (taxa_id === KINGDOM.animalia.id) {
    return <AnimalKingdomIcon />;
  } else if (taxa_id === KINGDOM.plantae.id) {
    return <PlantaeKingdomIcon />;
  } else if (taxa_id === KINGDOM.funga.id) return <FungiKingdomIcon />;
};

const styles = StyleSheet.create({
  kingdomBarContainer: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "visible",
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  kingdomText: {
    paddingLeft: 10,
    fontSize: 32,
    fontWeight: "bold",
    color: "#454545ff",
  },

  kingdomIcon: {
    width: 50,

    //backgroundColor: 'red',
  },
});

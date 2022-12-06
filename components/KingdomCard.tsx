import { View, Text, StyleSheet, Pressable } from "react-native";
import { KINGDOM } from "../utils/Constants";
import AnimalKingdomIcon from "./svg/AnimalKingdomIcon";
import FungiKingdomIcon from "./svg/FungiKingdomIcon";
import PlantaeKingdomIcon from "./svg/PlantaeKingdomIcon";
const MIN_HEIGHT = 80;

const kingdomOnPressHandler = (text) => {
  console.log("kingdom : ", text);
};

const KingdomCard = ({ kingdom, children, total_count }) => {
  let height = total_count < MIN_HEIGHT ? MIN_HEIGHT : total_count;
  height = MIN_HEIGHT;
  console.log(kingdom.id)
  return (
    <View>
      <Pressable onPress={kingdomOnPressHandler.bind(this, children)}>

        <View
          style={[
            styles.kingdomContainer,
            { backgroundColor: kingdom.color, height: 50 },
          ]}
        >
          <View style={styles.kingdomIcon}>
            {getKingdomIcon(kingdom.id)}
          </View>

          <Text style={styles.kingdomText}> {total_count} </Text>


        </View>
      </Pressable>
    </View>
  );
};

export default KingdomCard;


const getKingdomIcon = (taxa_id) => {
  if(taxa_id === KINGDOM.animalia.id ){
    return <AnimalKingdomIcon/>;
  }
  else if(taxa_id === KINGDOM.plantae.id){
    return <PlantaeKingdomIcon />;
  }
  else if(taxa_id === KINGDOM.funga.id)
    return <FungiKingdomIcon />;
}

const styles = StyleSheet.create({
  kingdomContainer: {
    flexDirection: "row",
    margin: 10,
    borderColor: "black",
    backgroundColor: "pink",
    borderWidth: 0,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  kingdomText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#454545ff",
  },


  kingdomIcon: {
    // backgroundColor: 'red',

  },
  
});

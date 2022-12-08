import { View, Text, StyleSheet, Pressable } from "react-native";
import { KINGDOM } from "../utils/Constants";

import AnimalKingdomIcon from "./svg/AnimalKingdomIcon";
import FungiKingdomIcon from "./svg/FungiKingdomIcon";
import PlantaeKingdomIcon from "./svg/PlantaeKingdomIcon";

const KingdomCard = ({ navigation, kingdom, total_count}) => {
    return (
    <View style={styles.kingdomContainer}>
      <Pressable  onPress={() => navigation.navigate('FieldGuideScreen', {title: kingdom.name, color: kingdom.color, taxaId: kingdom.id})}>
        <View
          style={[
            styles.kingdomBarContainer,
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
  },

  kingdomBarContainer: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "flex-start",
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

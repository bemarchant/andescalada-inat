import { Text, Image, Dimensions, View, StyleSheet } from "react-native";
import ConservationStatusBar from "./svg/ConservationStatusBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const WildLifeCard = ({ observation }) => {
  const photo_id = observation["photos"][0]["id"];
  const conservationStatus = "Preocupación menor";
  const day = observation["observed_on_details"]["day"];
  const month = observation["observed_on_details"]["month"];
  const year = observation["observed_on_details"]["year"];
  const date = day + "/" + month + "/" + year;
  const userName = observation["user"]["name"];
  const climbingZone = "El Manzano";
  let communName = observation["taxon"]["preferred_common_name"];
  const cientificName = observation["taxon"]["name"];

  const photoFileFormat = getPhotoFileFormat(observation["photos"][0]["url"])
  const image_uri = "https://static.inaturalist.org/photos/" + photo_id + "/original."+photoFileFormat;

  communName = communName ? communName : "Desconocido";
  return (
    <View>
      <View>
        <Image
          style={{
            borderRadius: 12,
            width: windowWidth * 0.9,
            height: windowHeight * 0.8,
          }}
          source={{
            uri: image_uri,
          }}
        />
      </View>
      <View style={styles.infoText}>
        <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
          {communName}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          {"("+cientificName+")"}
        </Text>
        <ConservationStatusBar height={20}/>
        <Text style={{ color: "white", fontSize: 14 }}>{climbingZone}</Text>
        <Text style={{ color: "white", fontSize: 14 }}>{userName}</Text>
        <Text style={{ color: "white", fontSize: 14 }}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  textStyle: {
    fontSize: 32,
  },
});

const getPhotoFileFormat = (urlPhoto: string) => {
  const len = urlPhoto.split('.').length;
  return urlPhoto.split('.')[len-1];
};

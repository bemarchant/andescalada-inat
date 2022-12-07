import { Text, Image, Dimensions, View, StyleSheet } from "react-native";
import ConservationStatusBar from "./svg/ConservationStatusBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
let photoWidth = 0;
let photoHeight = 0;


export const WildLifeCard = ({ observation }) => {

  setPhotoDimensions(observation);
  const day = observation["observed_on_details"]["day"];
  const month = observation["observed_on_details"]["month"];
  const year = observation["observed_on_details"]["year"];
  const date = day + "/" + month + "/" + year;
  const userName = observation["user"]["name"];
  const climbingZone = "El Manzano";
  let communName = observation["taxon"]["preferred_common_name"];
  const cientificName = observation["taxon"]["name"];
  communName = communName ? communName : "Desconocido";

  const image_uri = getPhotoImageUri(observation);
  setPhotoDimensions(observation);
  let photoRatio =  photoWidth / photoHeight;

  return (
    <View style={styles.wildLifeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            borderRadius: 8,
          }}
          source={{
            uri: image_uri,
            width: windowWidth * 0.6,
            height: windowHeight * 0.5,
          }}
        />
      </View>
      
      <View style={styles.infoText}>
        <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
          {communName}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 8,
            fontStyle: "italic",
          }}
        >
          {"("+cientificName+")"}
        </Text>

        <ConservationStatusBar height={20}/>
        <Text style={{ color: "white", fontSize: 8 }}>{climbingZone}</Text>
        <Text style={{ color: "white", fontSize: 8 }}>{userName}</Text>
        <Text style={{ color: "white", fontSize: 8 }}>{date}</Text>
      
      </View>

      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  imageContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wildLifeCardContainer: {
    // backgroundColor: 'red',
    flex:1

  },

  infoText: {
    flex: 1,
    // backgroundColor: 'green',
    position: "absolute",
    bottom: 230,
    left: 90,
    height: windowHeight*0.1,
    width: windowWidth*0.4,
  },

});

const getPhotoImageUri = (observation) => {
  const photo_id = observation["photos"][0]["id"];
  const photoFileFormat = getPhotoFileFormat(observation["photos"][0]["url"])
  const baseUrl = getPhotoBaseUrl(observation["photos"][0]["url"]);
  const image_uri = baseUrl + photo_id + "/original."+ photoFileFormat;


// console.log(observation);
// console.log(Object.keys(observation));
// console.log("id : ", observation["id"]);
// console.log("photo_id : ", photo_id);
// console.log("observation_photos : ", observation["photos"][0]["observation_photos"]);

  return image_uri;
}

const getPhotoBaseUrl = (urlPhoto: string) => {
  return  urlPhoto.split('/photos/')[0] + "/photos/";
}
const getPhotoFileFormat = (urlPhoto: string) => {
  const len = urlPhoto.split('.').length;
  return urlPhoto.split('.')[len-1];
};

const setPhotoDimensions = (observation) => {
  photoHeight = observation["photos"][0]["original_dimensions"]["height"];
  photoWidth = observation["photos"][0]["original_dimensions"]["width"];
  return;
}

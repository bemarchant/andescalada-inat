import {Text, Image, Dimensions, View, StyleSheet, Pressable } from "react-native";
import { useState} from "react";
import ConservationStatusBar from "./svg/ConservationStatusBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let photoWidth = windowWidth * 0.6;
let photoHeight = windowHeight * 0.5;

export const WildLifeCard = ({ position, observation }) => {

  let day = observation["observed_on_details"]["day"] ?? '??';
  let month = observation["observed_on_details"]["month"] ?? '??';
  let year = observation["observed_on_details"]["year"]  ?? '????';
  let date = day + "/" + month + "/" + year;
  let userName = observation["user"]["name"] ?? 'Usuario desconocido';
  let climbingZone = "El Manzano" ?? 'Desconocido';
  let communName = observation["taxon"]["preferred_common_name"] ?? 'Sin nombre común';
  let cientificName = observation["taxon"]["name"] ?? 'Sin nombre científico';
  let image_uri = getPhotoImageUri(observation);

  setPhotoDimensions(observation);

  const [photoZoomIn, setPhotoZoomIn] = useState(false);
  const [cardWidth, setCardWidth] = useState(windowWidth * 0.6);
  const [cardHeight, setCardHeight] = useState(windowHeight * 0.5);


  const displayTextInfo = () => {
    if(position === 'middle'){
    return (        
    <View  style={[styles.infoContainer,{bottom: cardWidth*0.1, left:cardHeight*0.02}]}>
      <Text  style={[styles.infoText,{ fontSize: 14}]}>
        {communName}
      </Text>
      <Text
        style={[styles.infoText,{
          fontStyle: "italic",
        }]}
      >
        {"("+cientificName+")"}
      </Text>

      <ConservationStatusBar consevationStatus={''} width={80} height={10}/>
      <Text style={styles.infoText}>{climbingZone}</Text>
      <Text  style={styles.infoText}>{userName}</Text>
      <Text  style={styles.infoText}>{date}</Text>
    </View>);
    }
    return;
  }
  return (
      <View style={styles.imageContainer}>
        <Image
          style={{
            borderRadius: 10,
          }}
          source={{
            uri: image_uri,
            width: cardWidth,
            height: cardHeight,
          }}
        ></Image>

        {displayTextInfo()}

      </View>


  );
};

const styles = StyleSheet.create({

  imageContainer: {
    justifyContent: 'center',
    overflow:'hidden',  
    flex: 1,
    borderRadius: 10,
  },

  infoText: {
    color: "white", 
    fontSize: 8, 
    fontWeight: "bold"
  },

  infoContainer: {
    //backgroundColor: 'green',
    position: "absolute",
    bottom: 10,
    left: 10,
  },



});

const getPhotoImageUri = (observation) => {
  const photo_id = observation["photos"][0]["id"];
  const photoFileFormat = getPhotoFileFormat(observation["photos"][0]["url"])
  const baseUrl = getPhotoBaseUrl(observation["photos"][0]["url"]);
  const image_uri = baseUrl + photo_id + "/original."+ photoFileFormat;

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



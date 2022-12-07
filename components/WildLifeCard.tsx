import {Text, Image, Dimensions, View, StyleSheet, Pressable } from "react-native";
import { useState, useEffect} from "react";
import Observation from "./Observation";
import ConservationStatusBar from "./svg/ConservationStatusBar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let photoWidth = windowWidth * 0.6;
let photoHeight = windowHeight * 0.5;

export const WildLifeCard = ({ observation }) => {
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

  const [photoZoomIn, setPhotoZoomIn] = useState(false);
  const [cardWidth, setCardWidth] = useState(windowWidth * 0.6);
  const [cardHeight, setCardHeight] = useState(windowHeight * 0.5);

  useEffect(() => {
    console.log('useEffect')
      if(!photoZoomIn){
        setCardWidth(windowWidth * 0.6);
        setCardHeight(windowHeight * 0.5);
      }
      else{
        setCardWidth(windowWidth * 1.1);
        setCardHeight(windowHeight * 1.1);
      }
    }, [photoZoomIn]);


  const wildCardLifeOnPressHandler = () => {
    console.log('pressed');
    if(!photoZoomIn){
      setPhotoZoomIn(true);
    }
    else{
      setPhotoZoomIn(false);
    }
    return;
  }

  return (
    <Pressable onPress={wildCardLifeOnPressHandler} style={styles.wildLifeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            borderRadius: 8,
          }}
          source={{
            uri: image_uri,
            width: cardWidth,
            height: cardHeight,
          }}
        />
      </View>
      
      <View  style={styles.infoText}>
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

        <ConservationStatusBar consevationStatus={''} height={20}/>
        <Text style={{ color: "white", fontSize: 8 }}>{climbingZone}</Text>
        <Text style={{ color: "white", fontSize: 8 }}>{userName}</Text>
        <Text style={{ color: "white", fontSize: 8 }}>{date}</Text>
      
      </View>
    </Pressable>

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


const getConservationStatus = (observation) => {
  return '';
}

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



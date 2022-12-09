import {Text, Image, Dimensions, View, StyleSheet, Pressable } from "react-native";
import { useState, useEffect} from "react";
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
      if(!photoZoomIn){
        setCardWidth(windowWidth * 0.6);
        setCardHeight(windowHeight * 0.5);
      }
      else{
        setCardWidth(windowWidth * 0.6);
        setCardHeight(windowHeight * 0.5);
      }
    }, [photoZoomIn]);


  const wildCardLifeOnPressHandler = () => {
    if(!photoZoomIn){
      setPhotoZoomIn(true);
    }
    else{
      setPhotoZoomIn(false);
    }
    return;
  }

  return (
    <View style={styles.outterContainer}>
    <Pressable onPress={wildCardLifeOnPressHandler}>
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
        />
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
        </View>
      </View>
    </Pressable>
  </View>

  );
};

const styles = StyleSheet.create({

  outterContainer: {
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  imageContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    overflow:'hidden',  
  },

  infoContainer: {
    //backgroundColor: 'green',
    position: "absolute",
    bottom: 10,
    left: 10,
  },

  infoText: {
    color: "white", 
    fontSize: 8, 
    fontWeight: "bold"
  }

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



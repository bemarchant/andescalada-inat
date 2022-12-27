import { Image, Dimensions, View, StyleSheet } from "react-native";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const WildLifeCard = ({ observation }) => {
  let image_uri = getPhotoImageUri(observation);

  setPhotoDimensions(observation);

  const [photoZoomIn, setPhotoZoomIn] = useState(false);
  const [cardWidth, setCardWidth] = useState(windowWidth * 0.6);
  const [cardHeight, setCardHeight] = useState(windowHeight * 0.5);

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
    borderRadius: 10,
  },

  infoText: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
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
  const photoFileFormat = getPhotoFileFormat(observation["photos"][0]["url"]);
  const baseUrl = getPhotoBaseUrl(observation["photos"][0]["url"]);
  const image_uri = baseUrl + photo_id + "/original." + photoFileFormat;

  return image_uri;
};

const getPhotoBaseUrl = (urlPhoto) => {
  return urlPhoto.split("/photos/")[0] + "/photos/";
};
const getPhotoFileFormat = (urlPhoto) => {
  const len = urlPhoto.split(".").length;
  return urlPhoto.split(".")[len - 1];
};

const setPhotoDimensions = (observation) => {
  //photoHeight = observation["photos"][0]["original_dimensions"]["height"];
  //photoWidth = observation["photos"][0]["original_dimensions"]["width"];
  return;
};

import { Image, Dimensions, View, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const WildLifeCard = ({ observation }) => {
  let image_uri = getPhotoImageUri(observation);

  const cardWidth = windowWidth * 0.6;
  const cardHeight = windowHeight * 0.5;

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

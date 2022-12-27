const getPhotoBaseUrl = (urlPhoto) => {
  return urlPhoto.split("/photos/")[0] + "/photos/";
};

const getPhotoFileFormat = (urlPhoto) => {
  const len = urlPhoto.split(".").length;
  return urlPhoto.split(".")[len - 1];
};

export const getPhotoImageUri = (observation) => {
  const photo_id = observation["photos"][0]["id"];
  const photoFileFormat = getPhotoFileFormat(observation["photos"][0]["url"]);
  const baseUrl = getPhotoBaseUrl(observation["photos"][0]["url"]);
  const image_uri = baseUrl + photo_id + "/original." + photoFileFormat;
  return image_uri;
};

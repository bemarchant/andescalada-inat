import { useLayoutEffect } from "react";
import { Dimensions, View } from "react-native";

const EditWildLifeCardScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation]);
  return <View></View>;
};

export default EditWildLifeCardScreen;

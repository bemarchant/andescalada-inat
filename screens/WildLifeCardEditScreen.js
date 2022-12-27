import { useRef, useEffect, useContext, useLayoutEffect } from "react";
import {
  Share,
  Dimensions,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import ScreenHeaderButton from "../components/icons/ScreenHeaderButton";
import {
  ObservationImage,
  ObservationInfoBox,
} from "../components/wildlifecard-components";
import { PopUpMenu } from "../components/PopUpMenu";
import { PopMenuContext } from "../store/context/popMenu-context";
import INatCLIcon from "../components/icons/INatCLIcon";
import { DISTRIBUTIONS } from "../utils";

const windowWidth = Dimensions.get("window").width;

export const WildLifeCardEditScreen = ({ navigation, route }) => {
  const observation = route.params.observation;
  const popMenuCtx = useContext(PopMenuContext);

  useEffect(() => {
    popMenuCtx.setSelectedOption(DISTRIBUTIONS["NATIVE"]);
  }, []);

  const viewRef = useRef();
  const shareWildLifeCard = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 1,
      });
      await Share.share({ url: uri });
    } catch (err) {
      console.error(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerIconsContainer}>
            <ScreenHeaderButton
              name="share-outline"
              color="gray"
              onPress={shareWildLifeCard}
            />
          </View>
        );
      },
    });
  });

  return (
    <KeyboardAvoidingView behavior="position" style={styles.rootView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.cardContainer} ref={viewRef}>
            <ObservationImage observation={observation} />
            <ObservationInfoBox observation={observation} />
            <INatCLIcon style={styles.iNatIconContainer} />
          </View>
          <PopUpMenu
            options={popMenuCtx.options}
            popMenu={popMenuCtx.visibility}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#454545ff",
  },
  cardContainer: {
    top: 10,
    backgroundColor: "#363636ff",
    overflow: "hidden",
    borderRadius: 5,
    height: windowWidth * 1.6,
    width: windowWidth * 0.9,
  },
  iNatIconContainer: {
    position: "absolute",
    //backgroundColor: "red",
    right: 20,
    bottom: 30,
    opacity: 0.4,
  },
});

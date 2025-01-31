import { StyleSheet, View, ImageBackground, Image } from "react-native";
import liff from "@line/liff";
import Button from "../components/Button";
import colors from "../constants/colors";

export default function HomeScreen() {
  const handleMapPress = () => {
    liff.openWindow({
      url: "https://miniapp.line.me/2006841295-jw19DpzR",
      external: true,
    });
  };

  const handleGamePress = () => {
    liff.openWindow({
      url: "https://miniapp.line.me/2006841288-NGr37qMr",
      external: true,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/home.png")}
        resizeMode="cover"
        style={styles.carImage}
      >
        <View style={styles.bigF1Logo}>
          <Image source={require("../../assets/bigf1.png")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="ミニマップを開く"
            onPress={handleMapPress}
            Icon={() => <Image source={require("../../assets/Location.png")} />}
          />
          <Button
            title="ミニゲームを遊ぶ"
            onPress={handleGamePress}
            Icon={() => <Image source={require("../../assets/DPaD.png")} />}
          />
          <View style={styles.smallF1Logo}>
            <Image source={require("../../assets/smallf1.png")} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  carImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    gap: 10,
  },
  bigF1Logo: {
    paddingTop: 50,
    paddingLeft: 50,
  },
  smallF1Logo: {
    marginVertical: 20,
    alignItems: "center",
  },
});

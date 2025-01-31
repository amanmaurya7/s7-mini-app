import { StyleSheet, View, ImageBackground, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import colors from "../constants/colors";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
export default function HomeScreen() {
  const navigation = useNavigation();

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
            onPress={() => navigation.navigate("Map")}
            Icon={() => <Image source={require("../../assets/Location.png")} />}
          />
          <Button
            title="ミニゲームを遊ぶ"
            onPress={() => navigation.navigate("Games")}
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
    height: Platform.OS === 'web' ? '100%' : '100%',
  },
  carImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    maxWidth: 1200, // Add for web
    marginVertical: 0,
    alignSelf: 'center', // Add for web
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    gap: 10,
    maxWidth: 600, // Add for web
    marginHorizontal: 'auto', // Add for web
    marginVertical: 0, // Add for web
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

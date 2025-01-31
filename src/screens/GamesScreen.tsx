import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

export default function GamesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              fill="#E10600"
            />
          </Svg>
        </TouchableOpacity>
        <Image
          source={require("../../assets/f1logo.png")}
          style={styles.f1Logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.gameCard}>
        <View style={styles.gameTitleContainer}>
          <Image
            source={require("../../assets/fingerCircuit.png")}
            style={styles.gameIcon}
          />
          <View>
            <Text style={styles.gameSubtitle}>フィンガーサーキット</Text>
            <Text style={styles.gameTitle}>FINGER CIRCUIT</Text>
          </View>
        </View>
        <Text style={styles.gameDescription}>
          このゲームでは、画面アイコンをコースに沿って上手くなぞってください。
          {"\n"}
          サーキットを正確になぞれば高得点をGET OK！{"\n"}
          いろいろなコースがあるので、お気に入りのサーキットでチャレンジしよう！
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>今すぐ遊ぶ</Text>
            </TouchableOpacity>
            <Image
              source={require("../../assets/LowerButton.png")}
              style={styles.imageButton}
            />
          </View>
        </View>
      </View>

      <View style={styles.gameCard}>
        <View style={styles.gameTitleContainer}>
          <Image
            source={require("../../assets/trafficLight.png")}
            style={styles.gameIcon}
          />
          <View>
            <Text style={styles.gameSubtitle}>レッドライトスタート</Text>
            <Text style={styles.gameTitle}>REDLIGHT START</Text>
          </View>
        </View>
        <Text style={styles.gameDescription}>
          赤信号が消えた瞬間にスタートダッシュを決めよう！{"\n"}
          タイミングが早すぎても遅すぎてもペナルティ！{"\n"}
          ベストなタイミングでスタートを切れるか挑戦しよう。
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>今すぐ遊ぶ</Text>
            </TouchableOpacity>
            <Image
              source={require("../../assets/UpperButton.png")}
              style={styles.imageButton}
            />
          </View>
        </View>
      </View>

      <Image
        source={require("../../assets/f1logo.png")} 
        style={[styles.f1Logo, styles.bottomLogo]}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    position: "relative",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  f1Logo: {
    width: "100%",
    height: 40,
    marginVertical: 10,
    resizeMode: "contain",
  },
  bottomLogo: {
    marginTop: 20,
    marginBottom: 30,
  },
  gameCard: {
    margin: 15,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E10600",
    
  },
  gameTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  gameIcon: {
    width: 50,
    height: 40,
    marginRight: 10,
    resizeMode: "contain",
  },
  gameSubtitle: {
    fontSize: 12,
    color: "#E10600",
    marginBottom: 2,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E10600",
  },
  gameDescription: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 15,
    
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 400,
    height: 100,
    // marginTop: 20,
  },
  playButton: {
    backgroundColor: "#E10600",
    padding: 15,
    borderRadius: 25,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  playButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 40,
  },
  imageButton: {
    position: "absolute",
    height: 100,
    width: 100,
    right: "8%",
    top: 10,
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    left: 16,
    zIndex: 1,
  },
});

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function GamesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gameCard}>
        <Text style={styles.gameTitle}>FINGER CIRCUIT</Text>
        <Text style={styles.gameDescription}>
          このゲームでは、画面アイコンをコースに沿って上手くなぞってください。
          サーキットを正確になぞれば高得点をGET OK！
          いろいろなコースがあるので、お気に入りのサーキットでチャレンジしよう！
        </Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>今すぐ遊ぶ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gameCard}>
        <Text style={styles.gameTitle}>REDLIGHT STRAT</Text>
        <Text style={styles.gameDescription}>
          赤信号が消えた瞬間にスタートダッシュを決めよう！
          タイミングが早すぎても遅すぎてもペナルティ！
          ベストなタイミングでスタートを切れるか挑戦しよう。
        </Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>今すぐ遊ぶ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameCard: {
    margin: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E10600',
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E10600',
  },
  gameDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15,
  },
  playButton: {
    backgroundColor: '#E10600',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
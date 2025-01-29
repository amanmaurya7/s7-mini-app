import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nKjTsZromdtQZZT95KV84rBI7blnJJ.png' }}
        style={styles.carImage}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Map')}
        >
          <Text style={styles.buttonText}>ミニマップを開く</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Games')}
        >
          <Text style={styles.buttonText}>ミニゲームを遊ぶ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  carImage: {
    width: '100%',
    height: 300,
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#E10600',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
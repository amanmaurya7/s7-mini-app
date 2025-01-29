import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import colors from '../constants/colors';

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
        <Button 
          title="ミニマップを開く"
          onPress={() => navigation.navigate('Map')}
        />
        <Button 
          title="ミニゲームを遊ぶ"
          onPress={() => navigation.navigate('Games')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
});
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PLACES = [
  { id: 'A', name: 'Place A' },
  { id: 'B', name: 'Place B' },
  { id: 'C', name: 'Place C' },
  { id: 'D', name: 'Place D' },
  { id: 'E', name: 'Place E' },
  { id: 'F', name: 'Place F' },
  { id: 'G', name: 'Place G' },
  { id: 'H', name: 'Place H' },
  { id: 'I', name: 'Place I' },
  { id: 'J', name: 'Place J' },
  { id: 'K', name: 'Place K' },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.currentLocation}>現在地</Text>
        <Text style={styles.locationName}>アクアパーク周辺</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-twSIXzFpJCJNZXq51n5fcXoPHQXwCp.png' }}
          style={styles.mapImage}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.calendarButton}>
        <Text style={styles.calendarButtonText}>カレンダーを見る</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#E10600',
    padding: 15,
  },
  currentLocation: {
    color: '#fff',
    fontSize: 12,
  },
  locationName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
    padding: 10,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  calendarButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E10600',
    alignItems: 'center',
  },
  calendarButtonText: {
    color: '#E10600',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
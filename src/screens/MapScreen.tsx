import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';

const { width } = Dimensions.get('window');

interface Place {
  id: string;
  name: string;
  x: number;
  y: number;
  position: 'left' | 'right';
}

// Current location indicator component
const CurrentLocationIndicator = ({ x, y }: { x: number; y: number }) => (
  <View style={[styles.currentLocationIndicator, { left: x - 25, top: y - 25 }]}>
    <Svg width="50" height="50" viewBox="0 0 50 50">
      <G transform="translate(-193 -540)">
        <Circle 
          cx="25" 
          cy="25" 
          r="25" 
          transform="translate(193 540)" 
          fill="#e50111" 
          opacity="0.08"
        />
        <Circle 
          cx="17.5" 
          cy="17.5" 
          r="17.5" 
          transform="translate(201 548)" 
          fill="#e50111" 
          opacity="0.08"
        />
        <Circle 
          cx="8.5" 
          cy="8.5" 
          r="8.5" 
          transform="translate(210 557)" 
          fill="#e50111" 
          opacity="0.08"
        />
        <Circle 
          cx="4" 
          cy="4" 
          r="4" 
          transform="translate(214 561)" 
          fill="#e50111"
        />
      </G>
    </Svg>
  </View>
);

const PLACES: Place[] = [
  { id: 'A', name: 'Place A', x: 250, y: 160, position: 'left' },
  { id: 'B', name: 'Place B', x: 275, y: 165, position: 'right' },
  { id: 'K', name: 'Place K', x: 185, y: 320, position: 'left' },
  { id: 'C', name: 'Place C', x: 260, y: 300, position: 'right' },
  { id: 'D', name: 'Place D', x: 230, y: 335, position: 'right' },
  { id: 'J', name: 'Place J', x: 230, y: 400, position: 'left' },
  { id: 'E', name: 'Place E', x: 290, y: 420, position: 'right' },
  { id: 'I', name: 'Place I', x: 165, y: 460, position: 'left' },
  { id: 'F', name: 'Place F', x: 240, y: 485, position: 'right' },
  { id: 'G', name: 'Place G', x: 230, y: 540, position: 'right' },
  { id: 'H', name: 'Place H', x: 105, y: 568, position: 'left' },
];

const LocationPin = ({ x, y }: { x: number; y: number }) => (
  <View style={[styles.pinContainer, { left: x - 7, top: y - 21 }]}>
    <Svg width={14} height={21} viewBox="0 0 14.139 21">
      <Path
        d="M90.713,0a7.069,7.069,0,0,0-7.069,7.069c0,3.985,1.975,4.834,4.158,7.485A13.057,13.057,0,0,1,90.713,21a13.057,13.057,0,0,1,2.911-6.446c2.183-2.651,4.158-3.5,4.158-7.485A7.069,7.069,0,0,0,90.713,0Zm0,9.512a2.443,2.443,0,1,1,2.443-2.443A2.443,2.443,0,0,1,90.713,9.512Z"
        transform="translate(-83.644)"
        fill="#E50111"
      />
    </Svg>
  </View>
);

const PlaceButton = ({ name, x, y, position }: { name: string; x: number; y: number; position: 'left' | 'right' }) => {
  const leftOffset = position === 'left' ? -95 : 15;
  
  return (
    <View style={[styles.placeButtonContainer, { left: x + leftOffset, top: y - 15 }]}>
      <TouchableOpacity style={styles.placeButton}>
        <Text style={styles.placeButtonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const MapScreen = () => {
  // Current location coordinates (adjust these to match your exact center point)
  const currentLocation = { x: 225, y: 435 };

  return (
    <View style={styles.container}>
      <View style={styles.locationHeader}>
        <View style={styles.locationContent}>
          <Text style={styles.currentLocationLabel}>現在地</Text>
          <View style={styles.locationNameContainer}>
            <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.locationIcon}>
              <Path
                d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"
                fill="#FFF"
              />
            </Svg>
            <Text style={styles.locationName}>アクアパーク周辺</Text>
          </View>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/map.png')}
          style={styles.mapBackground}
          resizeMode="contain"
        />
        
        <CurrentLocationIndicator x={currentLocation.x} y={currentLocation.y} />
        
        {PLACES.map((place) => (
          <React.Fragment key={place.id}>
            <LocationPin x={place.x} y={place.y} />
            <PlaceButton 
              name={place.name} 
              x={place.x} 
              y={place.y} 
              position={place.position}
            />
          </React.Fragment>
        ))}

        <View style={styles.calendarWrapper}>
          <TouchableOpacity style={styles.calendarButton}>
            <Image
              source={require('../../assets/calendar-icon.png')}
              style={styles.calendarIcon}
            />
            <Text style={styles.calendarButtonText}>カレンダーを見る</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.f1LogoContainer}>
          <Image
            source={require('../../assets/F1-logo.png')}
            style={styles.f1Logo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationHeader: {
    backgroundColor: '#E50111',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  currentLocationLabel: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  locationName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    width: width,
  },
  mapBackground: {
    width: '100%',
    height: '100%',
  },
  currentLocationIndicator: {
    position: 'absolute',
    width: 50,
    height: 50,
    zIndex: 2,
  },
  pinContainer: {
    position: 'absolute',
    width: 14,
    height: 21,
    zIndex: 1,
  },
  placeButtonContainer: {
    position: 'absolute',
    width: 80,
    height: 30,
    zIndex: 2,
  },
  placeButton: {
    backgroundColor: '#E50111',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  placeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  calendarWrapper: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  calendarButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E50111',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  calendarIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  calendarButtonText: {
    color: '#E50111',
    fontSize: 14,
  },
  f1LogoContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  f1Logo: {
    width: 80,
    height: 44,
  },
});

export default MapScreen;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import GamesScreen from '../screens/GamesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen}
          options={{
            title: 'F1日本グランプリ',
          }}
        />
        <Stack.Screen 
          name="Games" 
          component={GamesScreen}
          options={{
            title: 'F1日本グランプリ',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen'
import MapScreen from './src/screens/MapScreen';
import GamesScreen from './src/screens/GamesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'F1日本グランプリ',
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
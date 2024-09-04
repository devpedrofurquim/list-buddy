import "./global.css"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import Home from './src/screens/Home';
import Details from "./src/screens/Details";
import {LIGHT,DARK} from "./src/utils/themeOptions";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  const {colorScheme} = useColorScheme();

  return (
    <SafeAreaProvider>
    <NavigationContainer theme={colorScheme === "dark" ? DARK : LIGHT}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Main'}}/>
        <Stack.Screen name="Details" component={Details} options={{title: 'Settings'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar hidden/>
    </SafeAreaProvider>
  );
}
import "./global.css"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'nativewind';
import Home from './src/screens/Home';
import Details from "./src/screens/Details";
import {LIGHT,DARK} from "./src/utils/themeOptions";

const Stack = createNativeStackNavigator();

export default function App() {
  const {colorScheme, setColorScheme} = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === "dark" ? DARK : LIGHT}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
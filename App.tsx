import './global.css';
import { useColorScheme } from 'nativewind';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import { LIGHT, DARK } from './src/utils/themeOptions';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent style="auto" backgroundColor="transparent" />
      <Routes />
    </SafeAreaProvider>
  );
}

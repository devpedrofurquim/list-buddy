import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Main' }} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;

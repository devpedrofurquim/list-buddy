import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Stack = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register' }}
      />
    </Stack.Navigator>
  );
};

export default PublicRoutes;

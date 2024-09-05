import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { DARK, LIGHT } from '../utils/themeOptions';
import PrivateRoutes from './private';
import PublicRoutes from './public';

const Routes = () => {
  const { colorScheme } = useColorScheme();
  const user = false;

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DARK : LIGHT}>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Routes;

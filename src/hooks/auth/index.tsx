import { createContext, useEffect, useState } from 'react';
import { AuthType, AuthProviderProps, UserType, TokenType } from './props';
import { getUser } from '../../services/auth';
import * as SecureStore from 'expo-secure-store';
import { apiType } from '../../services/api/props';

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>({} as UserType);
  const [token, setToken] = useState<TokenType>({} as TokenType);

  const AuthVerify = async () => {
    try {
      const token = await SecureStore.getItemAsync(`@token`);
      if (!token) {
        throw new Error('Token not found');
      }
      const data: apiType = await getUser(token);
      setUser(data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const Login = () => {};

  const Logout = () => {};

  useEffect(() => {
    AuthVerify();
  }, []);

  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};

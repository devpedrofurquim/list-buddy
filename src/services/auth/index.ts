import { mockedApi } from '../api';
import { apiType } from '../api/props';
import { SigInProps } from './props';
import * as SecureStore from 'expo-secure-store';

export const sigIn = async ({ email, password }: SigInProps) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject('Preencha todos os campos');
      } else if (email === 'devpedrofurquim' && password === '123456') {
        resolve('Autenticado com sucesso');
      } else {
        reject('Login ou Senha estão incorretos');
      }
    }, 1000);
  });
};

export const signOut = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      // Token Expired
      await SecureStore.deleteItemAsync('@token');
      resolve('Successfully deauthenticated');
    }, 1000);
  });
};

export const getUser = (token: string): Promise<apiType> => {
  return new Promise<apiType>((resolve, reject) => {
    if (!token) {
      return reject(new Error('Token not found')); // Use reject for error handling
    }

    setTimeout(() => {
      if (token === 'JWTTOKEN') {
        resolve(mockedApi); // Resolve the promise with the apiType object
      } else {
        reject(new Error('Invalid token')); // Reject for invalid token
      }
    }, 1000);
  }).finally(() => {
    console.log('getUser Operation Completed');
  });
};

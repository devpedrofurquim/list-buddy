import axios from 'axios';
import { UserData } from '../user';

export const getUsername = async (username: string) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(`https:api.github.com/users/${username}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.error(
          `Failed to fetch data for user ${username}:`,
          error.message || error
        );
        reject(new Error('Unable to fetch user data'));
      })
      .finally(() => {
        console.log('Operation finished');
      });
  });
};

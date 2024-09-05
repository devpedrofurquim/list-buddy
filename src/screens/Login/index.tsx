import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { getUsername } from '../../services/auth';
import { UserData } from '../../services/user';

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);

  const handleLogin = async (username: string) => {
    setSubmit(true);

    getUsername(username)
      .then((response: any) => {
        navigation.navigate('Register', {
          name: response.data.name,
          bio: response.data.bio,
          location: response.data.location,
          publicRepos: response.data.public_repos,
          followers: response.data.followers,
          following: response.data.following,
          hireable: response.data.hireable,
          githubUrl: response.data.html_url,
          avatarUrl: response.data.avatar_url,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmit(false);
      });
  };

  return (
    <View className="flex-1 justify-center items-center bg-background text-primary gap-4">
      <TextInput
        placeholder="Your github username"
        value={username}
        onChangeText={(username) => setUsername(username)}
        className="text-foreground"
      />
      <TouchableOpacity
        onPress={() => handleLogin(username)}
        className="bg-foreground w-1/2 h-10 rounded-md items-center justify-center"
      >
        <Text className="text-background">{submit ? 'Loading' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

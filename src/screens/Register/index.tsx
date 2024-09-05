import { View, Text, Button } from 'react-native';
import React from 'react';

const Register = ({ route, navigation }: any) => {
  const { name, bio } = route.params;
  return (
    <View className="flex-1 justify-center items-center bg-background text-primary gap-4">
      <Text className="text-xl text-foreground">Name: {name}</Text>
      <Text className="text-xl text-foreground">
        Bio: {JSON.stringify(bio)}
      </Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Register;

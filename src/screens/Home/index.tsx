import { View, Text, Button } from 'react-native';
import { useCallback, useState } from 'react';
import TaskItem from '../../components/TaskItem';

const Home = ({ navigation }: any) => {
  const [isDone, setIsDone] = useState(false);

  const toggleCheckbox = useCallback(() => {
    setIsDone((prev) => !prev);
  }, []);

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="text-xl text-foreground">Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;

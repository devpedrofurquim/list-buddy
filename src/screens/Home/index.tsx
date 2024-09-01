import { View,Text, Button } from "react-native"
import Checkbox from "../../components/Checkbox";
import { useCallback, useState } from "react";
import TaskItem from "../../components/TaskItem";

const Home = ({navigation} : any) => {
    const [isDone, setIsDone] = useState(false);

    const toggleCheckbox = useCallback(() => {
        setIsDone(prev => !prev);
    }, [])

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-xl text-black dark:text-white">Home</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <TaskItem isDone={isDone} onToggleChechbox={() => toggleCheckbox()}/>
        </View>
    )
}

export default Home;
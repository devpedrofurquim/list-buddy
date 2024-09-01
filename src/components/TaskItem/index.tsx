import React, { useCallback} from 'react';
import { Pressable, View, Text } from 'react-native';
import Checkbox from '../Checkbox';

interface Props {
    isDone: boolean;
    onToggleChechbox?: () => void;
}

const TaskItem = (props: Props) => {
    const {isDone, onToggleChechbox} = props;

    return (
        <View className='w-30 h-30 m-2 items-center flex-row gap-2 px-4 py-2 bg-slate-200 dark:bg-gray-200 rounded-md'>
            <Pressable onPress={onToggleChechbox}>
                <Checkbox isDone={isDone}></Checkbox>
            </Pressable>
            <Text className='text-xl dark:text-black'>Read the bible</Text>
        </View>
    )
}

export default TaskItem;
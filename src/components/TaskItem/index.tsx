import React, { useCallback} from 'react';
import { Pressable, View, Text } from 'react-native';
import Checkbox from '../Checkbox';
import TaskLabel from './_components/TaskLabel';

interface Props {
    isDone: boolean;
    onToggleChechbox?: () => void;
}

const TaskItem = (props: Props) => {
    const {isDone, onToggleChechbox} = props;

    return (
        <Pressable onPress={onToggleChechbox} className='m-2 items-center flex-row gap-2 px-4 py-2 bg-slate-200 dark:bg-gray-200 rounded-md'>
            <Checkbox isDone={isDone}></Checkbox>
            <TaskLabel strike={isDone} className='text-xl' textColor='#000' inactiveTextColor='#8888'>Read the bible</TaskLabel>
        </Pressable>
    )
}

export default TaskItem;
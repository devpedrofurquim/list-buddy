import React, {useEffect,memo} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

interface Props {
    isDone: boolean;
}

const Checkbox = (props:Props) => {
    const {isDone} = props;

    return (
            <Ionicons name={isDone ? "checkbox" : "add-circle"} size={32} color={isDone ? "green": "gray"} />
    )
}

export default Checkbox;
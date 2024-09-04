import { useColorScheme } from "nativewind";
import { useState } from "react";
import { View,Text, Button, Touchable, TouchableOpacity } from "react-native"
import { ThemeTypes } from "../../utils/types";

const Details = ({navigation} : any) => {

    return (
        <View className="flex-1 justify-center items-center bg-background">
            <Text className="text-xl text-foreground">Details</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <TouchableOpacity className="bg-primary p-4 rounded-md">
                <Text className="text-foreground">Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details;
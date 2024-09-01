import { View,Text, Button } from "react-native"

const Details = ({navigation} : any) => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-xl text-black dark:text-white">Details</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Details;
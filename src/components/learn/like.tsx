import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const Like = () => {
    const nav: any = useNavigation();
    return (
        <>
            <View>
                <Text>Like Page</Text>
                <Button
                    title="Go to LikeDetail"
                    onPress={() => { nav.navigate('LikeDetail') }}
                />
            </View>
        </>
    )
}

export default Like;
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const Home = () => {

    const nav: any = useNavigation();

    return (
        <>
            <View>
                <Text>Home Page</Text>
                <Button
                    title="Go to HomeDetail"
                    onPress={() => { nav.navigate('HomeDetail') }}
                />
            </View>
        </>
    )
}

export default Home;
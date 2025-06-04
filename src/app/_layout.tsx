import { Slot } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {

    return (
        <View style={{ marginTop: 70 }}>
            <Text>HEADER</Text>

            <Slot />

            <Text>FOOTER</Text>
        </View>
    );
}

export default RootLayout;
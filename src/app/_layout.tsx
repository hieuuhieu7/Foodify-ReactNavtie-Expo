import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {

    return (
        // <View style={{ marginTop: 70 }}>
        //     <Text>HEADER</Text>

        //     <Slot />

        //     <Text>FOOTER</Text>
        // </View>

        <Stack
        // screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="index"
                options={{ headerShown: false }}
            />

            <Stack.Screen name="(tabs)"
                options={{ title: "Home Page" }}
            />

            <Stack.Screen name="product/index"
                options={{ title: "Product Page" }}
            />
        </Stack>
    );
}

export default RootLayout;
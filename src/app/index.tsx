import { Link, router } from "expo-router";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";

const AppRoot = () => {

    const handleLogin = () => {
        alert("Login Success");
        router.navigate("/login");
    }

    return (
        <View>
            <Text>NGUYEN NGOC HIEU 7</Text>
            <Link href={"/like"}>Go to Like</Link>

            <Link href={"/like/like.detail"} asChild>
                <Pressable style={styles.myButton}>
                    <Text style={styles.myText}>Like Detail</Text>
                </Pressable>
            </Link>

            <Pressable
                style={styles.myButton}
                onPress={handleLogin}
            >
                <Text style={styles.myText}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    myButton: {
        backgroundColor: '#3924',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },

    myText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333'
    }
})

export default AppRoot;
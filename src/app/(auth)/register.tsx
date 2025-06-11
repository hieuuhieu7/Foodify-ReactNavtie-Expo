import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLOR } from "../utils/constant";
import ButtonPrimary from "@/components/button/button.primary";
import { SafeAreaView } from "react-native-safe-area-context";
import InputPrimary from "@/components/input/input.primary";
import { Link } from "expo-router";
import ButtonSocials from "@/components/button/button.socials";
import { useState } from "react";

const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>Register</Text>
                </View>

                <InputPrimary
                    title='Username'
                    value={name}
                    setValue={setName}
                />

                <InputPrimary
                    title='Email'
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                />

                <InputPrimary
                    title='Password'
                    secureText={true}
                    value={password}
                    setValue={setPassword}
                />

                <ButtonPrimary
                    onPress={() => { console.log(name, email, password) }}
                    titleText='Register'
                    textStyle={{ textTransform: "capitalize", color: 'white' }}
                    alignStyle={{ width: '100%' }}
                    colorStyle={{ backgroundColor: COLOR.RED }}
                />

                <View style={styles.flexText}>
                    <Text style={{ fontSize: 16, color: COLOR.BLACK }}>Have an account?</Text>
                    <Link href={"/(auth)/register"} asChild>
                        <Text style={{ color: COLOR.BLACK, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline' }}>Login</Text>
                    </Link>
                </View>

                <ButtonSocials />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },

    box: {
        marginBottom: 30
    },

    title: {
        fontSize: 30,
        color: COLOR.RED
    },

    flexText: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    }
})

export default RegisterPage;
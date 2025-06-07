import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { COLOR } from "./utils/constant";
import ButtonPrimary from "../components/button/button.primary";
import bg from '@/assets/auth/bg.png';
import fb from '@/assets/auth/facebook.png';
import gg from '@/assets/auth/google.png';
import { LinearGradient } from "expo-linear-gradient";


const WelComePage = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={bg}>
                <LinearGradient style={{ flex: 1 }} colors={['transparent', 'rgba(0, 0, 0, 0.8)']}>
                    <View style={styles.boxOne}>
                        <View style={styles.boxText}>
                            <Text style={styles.textLineOne}>Welcome to</Text>
                            <Text style={styles.textLineTwo}>Foodify</Text>
                            <Text style={styles.textLineThree}>Your favourite foods delivered fast at your door.</Text>
                        </View>
                    </View>

                    <View style={styles.boxTwo}>
                        <View style={styles.boxButton}>
                            <View style={styles.textSignIn}>
                                <View style={styles.textLine}></View>
                                <Text style={styles.text}>sign in with</Text>
                                <View style={styles.textLine}></View>
                            </View>

                            <View style={{ gap: 20 }}>
                                <View style={styles.flexButton}>
                                    <ButtonPrimary
                                        titleText='Facebook'
                                        textStyle={{ textTransform: "uppercase" }}
                                        iconStyle={
                                            <Image source={fb} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                                        }
                                    // alignStyle={{ alignSelf: 'auto' }}
                                    />
                                    <ButtonPrimary
                                        titleText='Google'
                                        textStyle={{ textTransform: "uppercase" }}
                                        iconStyle={
                                            <Image source={gg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                                        }
                                    // alignStyle={{ alignSelf: 'auto' }}
                                    />
                                </View>
                                <View>
                                    <ButtonPrimary
                                        titleText='Start with your email'
                                        textStyle={{ textTransform: "capitalize", color: 'white' }}
                                        // iconStyle={
                                        //     <FontAwesome5 name="google" size={30} color="blue" />
                                        // }
                                        alignStyle={{ width: '100%' }}
                                        colorStyle={{ backgroundColor: COLOR.RED }}
                                    />
                                </View>
                                <View style={styles.flexText}>
                                    <Text style={{ fontSize: 16, color: COLOR.WHITE }}>Already have an account?</Text>
                                    <Link href={"/(auth)/register"} asChild>
                                        <Text style={{ color: COLOR.WHITE, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline' }}>Register</Text>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: COLOR.RED,
        flex: 1,
    },

    boxOne: {
        // borderWidth: 2,
        // borderColor: 'red',
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxText: {
        gap: 20
    },

    textLineOne: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLOR.WHITE
    },

    textLineTwo: {
        fontSize: 46,
        fontWeight: 'bold',
        color: COLOR.RED,
        fontStyle: 'italic'
    },

    textLineThree: {
        fontSize: 16,
        color: COLOR.WHITE
    },

    boxTwo: {
        width: '100%',
        // borderWidth: 2,
        // borderColor: 'red',
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    boxButton: {
        marginTop: 80,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 20
    },

    textSignIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },

    text: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: COLOR.WHITE
    },

    textLine: {
        width: 114,
        borderWidth: 0.6,
        borderColor: COLOR.WHITE
    },

    flexButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    flexText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    }
})

export default WelComePage;
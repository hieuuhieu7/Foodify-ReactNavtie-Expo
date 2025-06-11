import { Image, StyleSheet, Text, View } from "react-native"
import ButtonPrimary from "./button.primary";
import fb from '@/assets/auth/facebook.png';
import gg from '@/assets/auth/google.png';
import { COLOR } from "@/app/utils/constant";

const ButtonSocials = () => {
    const onPress = () => {
        alert('Click')
    }
    return (
        <View>
            <View style={styles.textSignIn}>
                <View style={styles.textLine}></View>
                <Text style={styles.text}>sign in with</Text>
                <View style={styles.textLine}></View>
            </View>

            <View style={styles.flexButton}>
                <ButtonPrimary
                    onPress={onPress}

                    titleText='Facebook'
                    textStyle={{ textTransform: "uppercase" }}
                    iconStyle={
                        <Image source={fb} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                    }
                // alignStyle={{ alignSelf: 'auto' }}
                />
                <ButtonPrimary
                    onPress={onPress}

                    titleText='Google'
                    textStyle={{ textTransform: "uppercase" }}
                    iconStyle={
                        <Image source={gg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                    }
                // alignStyle={{ alignSelf: 'auto' }}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    textSignIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        marginBottom: 20
    },

    text: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: COLOR.BLACK
    },

    textLine: {
        width: 114,
        borderWidth: 0.6,
        borderColor: COLOR.BLACK
    },

    flexButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})

export default ButtonSocials;
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { ReactNode } from "react";
import { COLOR } from "@/app/utils/constant";

interface IProps {
    titleText?: string
    textStyle?: StyleProp<TextStyle>
    iconStyle?: ReactNode
    alignStyle?: StyleProp<TextStyle>
    colorStyle?: StyleProp<TextStyle>
    onPress: () => void
}

const ButtonPrimary = (props: IProps) => {

    const { textStyle, iconStyle, titleText, alignStyle, colorStyle, onPress } = props

    return (
        <Pressable
            style={({ pressed }) => ({ opacity: pressed === true ? 0.9 : 1 })}
            onPress={onPress}
        >
            <View style={[styles.btnPrime, alignStyle, colorStyle]}>
                {iconStyle}
                <Text style={[styles.btnText, textStyle]}>{titleText}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnPrime: {
        backgroundColor: COLOR.WHITE,
        padding: 15,
        borderRadius: 50,
        // borderWidth: 1,
        // borderColor: COLOR.RED,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: 180
    },

    btnText: {
        color: COLOR.BLACK,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
})

export default ButtonPrimary;
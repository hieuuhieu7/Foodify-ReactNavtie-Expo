import { COLOR } from "@/app/utils/constant";
import { useState } from "react";
import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

interface IProps {
    title?: string
    keyboardType?: KeyboardTypeOptions
    secureText?: boolean
    value?: any
    setValue: (v: any) => void
}

const InputPrimary = (props: IProps) => {

    const { title, keyboardType, secureText = false,
        value, setValue
    } = props;

    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    return (
        <View style={styles.registerBox}>
            {title && <Text style={styles.registerTitle}>{title}</Text>}
            <TextInput
                value={value}
                onChangeText={(text) => { setValue(text) }}
                onFocus={() => { setIsFocus(true) }}
                onBlur={() => { setIsFocus(false) }}
                keyboardType={keyboardType}
                style={[styles.registerInput, { borderColor: isFocus === true ? COLOR.RED : COLOR.GREY }]}
                secureTextEntry={secureText && !isShowPassword}
            />
            {secureText &&
                <Feather style={styles.eye} name={isShowPassword ? "eye" : "eye-off"} size={22} color={COLOR.BLACK}
                    onPress={() => { setIsShowPassword(!isShowPassword) }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    registerBox: {
        marginBottom: 30,
        gap: 5
    },

    registerTitle: {
        fontSize: 18
    },

    registerInput: {
        fontSize: 18,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10
    },

    eye: {
        position: 'absolute',
        right: 14,
        bottom: 13
    }
})

export default InputPrimary;
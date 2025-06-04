import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface IProps {
    onPress: () => void;
}
const MineButton = (props: IProps) => {

    const { onPress } = props;

    return (
        <Pressable
            style={({ pressed }) => ({ opacity: pressed === true ? 0.9 : 1 })}
            onPress={onPress}
        >
            <View style={styles.myButton}>
                <Text style={styles.text}>My Button</Text>
                <AntDesign name="pluscircleo" size={20} color="white" />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    myButton: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },

    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})


export default MineButton;
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import MineButton from '../button/mine.button';

interface IProps {
    addTodo: (value: string) => void;
}
const InputTodo = (props: IProps) => {
    const { addTodo } = props
    const [input, setInput] = useState("");

    const handleAddNewTodo = () => {
        if (!input) {
            Alert.alert(
                "Input không được để trống.",
                "Hãy nhập input."
            )
            return;
        }
        addTodo(input);
        setInput("");
    }

    return (
        <>
            <View style={{ width: '100%' }}>
                <TextInput
                    value={input}
                    onChangeText={value => setInput(value)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='numeric'
                    // maxLength={6}
                    // multiline={true}
                    style={styles.input}
                />

                <Text style={{ marginTop: 10, fontSize: 20 }}>Say my name: {input}</Text>
                <Button title='Add'
                    onPress={handleAddNewTodo}
                />

                <MineButton
                    onPress={handleAddNewTodo}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'grey',
        height: 35,
        borderRadius: 50,
        paddingHorizontal: 15
    }
});

export default InputTodo;
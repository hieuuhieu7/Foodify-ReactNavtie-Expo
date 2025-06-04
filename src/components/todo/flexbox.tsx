import { StyleSheet, Text, View } from "react-native"

const FlexBox = () => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.item01}>
                    <Text style={{ color: 'black', textAlign: 'center', backgroundColor: 'white', padding: 5, borderRadius: 50, borderWidth: 1, borderColor: 'black' }}>01</Text>
                </View>
                <View style={styles.item02}>
                    <Text style={{ color: 'black', textAlign: 'center', backgroundColor: 'white', padding: 5, borderRadius: 50, borderWidth: 1, borderColor: 'black' }}>02</Text>
                </View>
                <View style={styles.item03}>
                    <Text style={{ color: 'black', textAlign: 'center', backgroundColor: 'white', padding: 5, borderRadius: 50, borderWidth: 1, borderColor: 'black' }}>03</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        borderWidth: 2,
        borderColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    item01: {
        padding: 40,
        backgroundColor: 'green'
    },

    item02: {
        padding: 40,
        backgroundColor: 'red'
    },

    item03: {
        padding: 40,
        backgroundColor: 'purple'
    },
})

export default FlexBox;
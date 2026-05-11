import { View, Text, Pressable, StyleSheet } from "react-native"

export default function ClearButton(props) {
    return (
        <Pressable onPress={() => props.onClear()}>
            <View style={styles.ClearButton}>
                <Text style={styles.buttonText}>Limpar Tudo</Text>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    ClearButton: {
        margin: 8,
        padding: 8,
        backgroundColor: '#D22B2B',
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: 'white',
        alignItems: 'center',
    },
});

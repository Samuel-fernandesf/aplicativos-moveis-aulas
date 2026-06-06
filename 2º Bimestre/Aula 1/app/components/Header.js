import { View, Text, StyleSheet } from "react-native"

export default function Header(props) {
    return (

        <View style={[styles.Header, { backgroundColor: props.corFundo }]}>
            <Text style={[styles.headerText]}>{props.titulo}</Text>
        </View>


    )

}

const styles = StyleSheet.create({
    Header: {
        margin: 8,
        padding: 8,
        borderRadius: 6,

    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        color: 'white'
    },
});
import { View, Text, StyleSheet } from "react-native";

export default function GoalCount(props){
    return(
        <View style={styles.goalCount}>
            <Text style={styles.goalText}>Quantidade de Objetivos: {props.quantidade}</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    goalCount: {
        margin: 10,
        padding: 4,
        borderRadius: 6,
        backgroundColor: '#C1FFF1',
    },
    goalText: {
        padding: 8,
        textAlign: 'left',
        color: 'black',
        fontSize: 16,
    },
});

import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.roundText}>#{roundNumber}</Text>
      <Text style={styles.guessText}>Palpite: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.accent600,
    borderWidth: 2,
    borderRadius: 20,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
    }),
  },
  roundText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 16,
  },
  guessText: {
    fontFamily: 'open-sans',
    color: 'white',
    fontSize: 16,
  },
});

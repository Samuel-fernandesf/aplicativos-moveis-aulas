import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');

  function inputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (
    <View style={styles.imputContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder="Digite seu objetivo" 
        onChangeText={inputHandler} 
        value={enteredGoalText}
      />
      <Button title="Adicionar" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  imputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

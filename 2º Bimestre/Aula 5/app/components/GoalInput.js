/**
 * GoalInput.js — Componente de Entrada do Objetivo
 *
 * ⚠️  ATENÇÃO: Este arquivo contém bugs propositais para a atividade de depuração.
 *     Leia o documento "Roteiro_Depuracao.md" antes de começar.
 *
 * Props recebidas:
 *   - visible    {boolean}  → controla se o modal está visível
 *   - onAddGoal  {function} → callback chamado ao confirmar
 *   - onCancel   {function} → callback chamado ao cancelar
 */
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

export default function GoalInput(props) {

  const [enteredGoalText, setEnteredText] = useState('');

  function inputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    // 🐛 BUG 4: O texto enviado ao pai está errado.
    // Dica: use console.log para ver o que `enteredGoalText` contém no momento do clique.
    // O que é enviado para a lista em vez do texto digitado pelo usuário?
    props.onAddGoal(enteredGoalText.trim() === '' ? '' : enteredGoalText.trim());
    console.log('Texto que será enviado:', enteredGoalText);
    setEnteredText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>

        {/* 🐛 BUG 5: A imagem não vai aparecer. 
            Dica: inspecione a prop `source` do componente <Image>.
            Consulte a documentação em reactnative.dev: qual é o tipo de dado que `source` aceita
            para imagens locais? O que está sendo passado aqui é compatível? */}
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Digite seu objetivo"
          placeholderTextColor="#81749c"
          onChangeText={inputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancelar"
              color="#f31282"
              onPress={props.onClose}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Adicionar"
              color="#5e0acc"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});

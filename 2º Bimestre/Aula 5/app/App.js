/**
 * App.js — Componente Raiz (State Owner)
 * 
 * ⚠️  ATENÇÃO: Este arquivo contém bugs propositais para a atividade de depuração.
 *     Leia o documento "Roteiro_Depuracao.md" antes de começar.
 */
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  // 🐛 BUG 1: O estado da lista foi inicializado com um valor incorreto.
  // Dica: uma FlatList espera receber um Array. O que acontece se receber outra coisa?
  //Bug corrigido, se o valor do useState for null gerará um erro, pois o FlatLIst espera um array.
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    console.log('Texto recebido pelo App:', enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      console.log('ID recebido para deletar:', id);
      // 🐛 BUG 2: A lógica de remoção está invertida.
      // Dica: qual é a diferença entre `!==` e `===` dentro de um filter()?
      // Use console.log para inspecionar o `id` recebido e os ids da lista antes de filtrar.
      console.log('IDs na lista:', currentCourseGoals.map(g => g.id));
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>

      <View style={styles.addButton}>
        <Button
          title="Adicionar Meta"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
      </View>

      {/* 🐛 BUG 3: Uma prop obrigatória está faltando ou com nome errado.
          Dica: compare as props que GoalInput.js espera receber com o que está sendo passado aqui.
          O modal abre, mas o botão "Cancelar" não funciona. Por quê? */}
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onClose={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  addButton: {
    marginBottom: 24,
    borderRadius: 6,
    overflow: 'hidden',
  },
  goalsContainer: {
    flex: 5,
  },
});

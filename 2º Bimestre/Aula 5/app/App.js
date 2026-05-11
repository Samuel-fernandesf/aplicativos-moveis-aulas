import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Header from './components/Header';
import GoalCount from './components/GoalCount';
import ClearButton from './components/ClearButton.js';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function clearAllHandle (){
    setCourseGoals([]);
  }

  return (
    <View style={styles.container}>

      <Header titulo='Meus objetivos 2026' corFundo='#311b6b' />

      <GoalCount quantidade={courseGoals.length} />

      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>

        {courseGoals.length > 0 &&
          <ClearButton onClear={clearAllHandle} />}

        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
          )
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});



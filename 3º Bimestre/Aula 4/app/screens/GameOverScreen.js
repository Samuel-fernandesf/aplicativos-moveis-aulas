import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InstructionText from '../components/ui/InstructionText';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

  let praiseText = 'Boa partida!';
  if (roundsNumber <= 5) {
    praiseText = 'Impressionante!';
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Fim de jogo!</Title>

      <InstructionText style={styles.praiseText}>{praiseText}</InstructionText>

      <View style={styles.imageContainer}>
        <Ionicons name="trophy" size={90} color={Colors.primary700} />
      </View>

      <Text style={styles.summaryText}>
        O seu telemóvel precisou de{' '}
        <Text style={styles.highlight}>{roundsNumber}</Text> tentativas para
        adivinhar o número{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Começar novo jogo</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const circleSize = deviceWidth < 380 ? 220 : 300;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderWidth: 3,
    borderColor: Colors.accent500,
    backgroundColor: Colors.accent500,
    overflow: 'hidden',
    margin: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
  },
  praiseText: {
    fontSize: 22,
    marginVertical: 12,
    fontFamily: 'open-sans-bold',
  }
});


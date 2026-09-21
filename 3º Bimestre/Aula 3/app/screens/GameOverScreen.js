/**
 * screens/GameOverScreen.js  —  TELA DE FIM DE JOGO
 * --------------------------------------------------
 * AULA 18 · MOVIMENTO 6 (o "momento de vitória") + polimento visual.
 *
 * Exibida quando o telemóvel acerta o número. Mostra, de forma comemorativa,
 * quantas tentativas o aparelho precisou e qual era o número secreto.
 *
 * Props recebidas da App.js:
 *   • roundsNumber   — total de tentativas até acertar.
 *   • userNumber     — o número secreto que foi adivinhado.
 *   • onStartNewGame — reinicia o fluxo (volta para a StartGameScreen).
 *
 * Nota de estilo: em vez de uma imagem externa, montamos a "medalha" com um
 * círculo dourado + um ícone de troféu (Ionicons já vem com o Expo). Assim a
 * tela fica bonita sem depender de nenhum asset extra.
 */
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Fim de jogo!</Title>

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
    fontFamily: 'System',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginBottom: 24,
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.accent500,
  },
});

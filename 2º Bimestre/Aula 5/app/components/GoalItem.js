import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function GoalItem(props) {
  return (
    /*
     * MODIFICAÇÃO (Aula 9 — PDF pág. 9-11 / Anotações linhas 318-338):
     *
     * 1. android_ripple:
     *    No Android, o componente Pressable aceita a prop `android_ripple`
     *    que exibe um efeito visual de "ondulação" (ripple) ao ser pressionado.
     *    Passamos `{ color: '#210644' }` para usar uma cor escura que contrasta
     *    com o fundo roxo do item.
     *
     * 2. style com função (pressed state) — feedback para iOS:
     *    No iOS, `android_ripple` não tem efeito. Por isso, usamos a prop `style`
     *    com uma função que recebe o objeto `{ pressed }`. Quando `pressed` é true,
     *    aplicamos `styles.pressedItem` (opacidade reduzida), dando feedback visual
     *    ao toque no iOS.
     *
     * 3. .bind() em vez de arrow function inline:
     *    Trocamos `() => props.onDelete(props.id)` por
     *    `props.onDelete.bind(this, props.id)`.
     *    O método `.bind()` pré-configura a função com o argumento `props.id`,
     *    evitando a criação de uma nova arrow function a cada render.
     *    O primeiro argumento (`this`) define o contexto — não importa aqui,
     *    mas é obrigatório pela assinatura do bind.
     */
    <Pressable
      android_ripple={{ color: '#210644' }}
      onPress={props.onDelete.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  /*
   * MODIFICAÇÃO (Aula 9 — PDF pág. 9 / Anotações linhas 206-226):
   * Estilo aplicado ao Pressable quando o item está sendo pressionado (iOS).
   * A opacidade reduzida para 0.5 sinaliza visualmente ao usuário que
   * o toque foi reconhecido, já que o ripple do Android não funciona no iOS.
   */
  pressedItem: {
    opacity: 0.5,
  },
});

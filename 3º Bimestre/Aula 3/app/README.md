# Jogo de Adivinhação

Atividade desenvolvida para a disciplina de Arquitetura e Programação Mobile.
O aplicativo é um jogo iterativo onde o usuário escolhe um número secreto de 1 a 99 e a aplicação utiliza o algoritmo de Busca Binária para adivinhar a escolha através de palpites e dicas do jogador. **Aula 3** o jogo está em funcionamento: entrada validada, navegação entre três tela (Início › Jogo › Fim) e o motor de adivinhação completo — tudo com React puro (state, props, hooks).
---

## Melhorias Implementadas na Atividade

Todas as tarefas exigidas no desafio da Aula 3 foram totalmente implementadas e testadas:

### Nível 1 — Aquecimento
* **1. Contador de Tentativas ao Vivo:** Adicionada a exibição em tempo real do número de palpites realizados pelo computador (`guessRounds.length`) na tela do jogo (`GameScreen.js`).
* **2. Atualização da Paleta de Cores:** Adicionada a nova chave `accent600` no centralizador `constants/colors.js` e aplicada na borda do componente `NumberContainer.js`.

### Nível 2 — Praticando
* **3. Validação e Alertas Aprimorados:** O `Alert.alert` na `StartGameScreen.js` foi reformulado com mensagens mais descritivas e botão com estilo `destructive`.
* **4. Instruções de Intervalo:** Adicionado o componente `InstructionText` indicando explicitamente o limite aceito ("Escolha um número entre 1 e 99") na tela inicial.

### Nível 3 — Desafio (Extra)
* **5. Botão "Reiniciar" no Meio da Partida:** Criada a propriedade `onRestart` gerenciada no `App.js` e conectada a um botão de desistência/retorno na `GameScreen.js`, permitindo abandonar a partida a qualquer momento e voltar para a tela inicial.

---

## Estrutura

```
jogo-adivinhacao/
├── App.js                          # raiz — background em 3 camadas + navegação por estado + SafeArea
├── constants/
│   └── colors.js                   # ponto único de verdade para as cores (Movimento 4)
├── utils/
│   └── numbers.js                  # generateRandomBetween (Movimento 5)
├── components/
│   ├── ui/                         # componentes gerais de interface
│   │   ├── PrimaryButton.js        # botão customizado (Double Container Pattern)
│   │   ├── Title.js                # título reutilizável (padrão children)
│   │   ├── Card.js                 # cartão elevado (fundo + sombra)
│   │   └── InstructionText.js      # texto de instrução dourado
│   └── game/
│       └── NumberContainer.js      # caixa que exibe o palpite
├── screens/
│   ├── StartGameScreen.js          # input + validação + Alert (Movimentos 1 e 2)
│   ├── GameScreen.js               # motor de adivinhação (Movimentos 5 e 6)
│   └── GameOverScreen.js           # tela de fim de jogo
└── assets/images/background.png
```

## Mapa: conteúdo → arquivo

**Movimento 1 — Entrada & state**
| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| `useState` para o input              | `StartGameScreen.js` (`enteredNumber`)            |
| Input controlado (value ↓ / onChange ↑) | `TextInput value={enteredNumber}`              |
| `onPress` reencaminhado (prop)       | `PrimaryButton.js`                                |

**Movimento 2 — Validação & Alert**
| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| `parseInt` + três guardas            | `confirmInputHandler`                             |
| `isNaN`, `<= 0`, `> 99`              | `if (...) { Alert.alert(...) return; }`            |
| Alert API (título, msg, botões)      | `Alert.alert('Número inválido', ...)`             |
| `resetInputHandler` (um estado, dois gatilhos) | botão Reset + `onPress` do alerta       |

**Movimento 3 — Navegação de telas**
| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| Estado decide a tela                 | `App.js` (`userNumber`, `gameIsOver`)             |
| Render condicional (`let screen`)    | `App.js` (blocos `if`)                            |
| SafeAreaView (dentro do fundo, fora da UI) | `App.js`                                    |

**Movimento 4 — Componentes & cores**
| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| `Title` (padrão children)            | `components/ui/Title.js`                          |
| Cores num só lugar                   | `constants/colors.js`                             |
| `NumberContainer` (View obriga o borderRadius) | `components/game/NumberContainer.js`    |

**Movimento 5 — Motor de adivinhação**
| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| `generateRandomBetween(min,max,exclude)` | `utils/numbers.js`                           |
| Palpite inicial + `currentGuess`     | `GameScreen.js` (`useState`)                      |
| `.bind` para pré-configurar `direction` | `nextGuessHandler.bind(this, 'lower')`         |
| Limites dinâmicos (fora do componente) | `let minBoundary / maxBoundary`                 |

**Movimento 6 — Bugs & fim de jogo**
| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| Anti-trapaça (evita loop infinito)   | guarda no topo de `nextGuessHandler`              |
| `useEffect` detecta a vitória        | `GameScreen.js`                                   |
| Correção do "Maximum call stack"     | `generateRandomBetween(1, 100, userNumber)` fixo  |
| `gameOverHandler` troca a tela       | `App.js` + `GameOverScreen.js`                    |


--- 
## Tecnologias Utilizadas

- JavaScript
- React Native
- Expo
- Node.js

## Instalação e Execução

### Pré-requisitos

- Node.js
- Android Studio (opcional)
- Expo Go

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    https://github.com/Samuel-fernandesf/aplicativos-moveis-aulas.git
    cd 'aplicativos-moveis-aulas/3º Bimestre/Aula 3/app/'
    ```
2.  **Instale as dependências**
    ```bash
    npm install
    ```
3.  **Inicie o servidor do Expo:**
       ```bash
       npx expo start
       ```

       Para visualizar:
        Use o app Expo Go no seu celular e escaneie o QR Code gerado. <br>
        Ou pressione a para abrir no emulador Android ou i para iOS.

---

Este projeto foi desenvolvido como requisito para a disciplina de **Aplicativos Móveis**.

* **Desenvolvedor:** [Samuel Fernandes Filho](https://github.com/Samuel-fernandesf)
* **Instituição:** Instituto Federal de São Paulo (**IFSP**) - Campus Araraquara


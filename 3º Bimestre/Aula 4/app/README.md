# Jogo de Adivinhação — Atividade Prática

Atividade para consolidação prática, desenvolvido em **React Native** com **Expo**.
O aplicativo é um jogo iterativo em que o usuário escolhe um número entre 1 e 99 e o dispositivo tenta adivinhar através de palpites aleatórios calculados algoritmicamente, fornecendo feedbacks e histórico de tentativas em tempo real.

---

>  **Notas Importantes:**
>
> - As fontes **Open Sans** (`Regular` e `Bold`) encontram-se em `assets/fonts/`.
> - A imagem de fundo do app está localizada em `assets/images/background.png`.

## Atividades Implementadas

Nesta etapa do projeto, foram solucionados os desafios práticos propostos para personalização visual, refinamento da interface de usuário e ordenação lógica do histórico:

### Resumo dos Níveis Implementados

| **Nível** | **Tarefa** | **Descrição & Implementação** | **Arquivos Afetados** |
|---|---|---|---|
| **Nível 1** | **1. Título do Histórico** | Adicionado um cabeçalho `<InstructionText>` com a mensagem *"Rondas do Histórico"* utilizando *merge de estilos* com margem inferior customizada. | `screens/GameScreen.js` |
| **Nível 1** | **2. Repaginação Visual do Log** | O componente do log foi totalmente redesenhado com bordas arredondadas (`borderRadius: 20`), novas cores de tema (`primary700` e `accent600`) e sombras/elevações para Android e iOS. | `components/game/GuessLogItem.js` |
| **Nível 2** | **3. Mensagem por Desempenho** | Lógica condicional adicionada à tela final (`GameOverScreen`) para exibir um elogio dinâmico conforme a quantidade de rodadas (ex: *"Impressionante!"* para ≤ 5 tentativas ou *"Boa partida!"* para demais). | `screens/GameOverScreen.js` |
| **Nível 2** | **4. Contraste de Tipografia** | Aplicação de `open-sans-bold` especificamente no identificador do número da rodada (`#N`) e `open-sans` regular no texto do palpite, criando hierarquia visual clara. | `components/game/GuessLogItem.js` |
| **Nível 3** | **5. Ordem Cronológica do Histórico** | Inversão do histórico de palpites para exibir a primeira tentativa (`#1`) no topo da lista e as tentativas subsequentes ordenadas em direção ao rodapé (`itemData.index + 1`). | `screens/GameScreen.js` |

## Estrutura Atualizada do Projeto

```text
jogo-adivinhacao/
├── App.js                         # Gerenciamento de estado global, telas, fontes e carregamento
├── constants/
│   └── colors.js                 # Paleta de cores centralizada (Ponto Único de Verdade)
├── utils/
│   └── numbers.js                # Algoritmo de geração de números randômicos com exclusão
├── components/
│   ├── ui/                       # Componentes genéricos e reutilizáveis de UI
│   │   ├── PrimaryButton.js      # Botão customizado (Double Container Pattern)
│   │   ├── Title.js              # Título estilizado reutilizável
│   │   ├── Card.js               # Container com elevação e fundo de contraste
│   │   └── InstructionText.js    # Textos instrucionais estilizados
│   └── game/                     # Componentes de domínio específico do jogo
│       ├── NumberContainer.js    # Exibição estilizada do palpite atual
│       └── GuessLogItem.js       # [AULA 19] Item individual e repaginado do histórico
├── screens/
│   ├── StartGameScreen.js        # Entrada do usuário + validações de limite
│   ├── GameScreen.js             # Motor do jogo, contadores e FlatList cronológica
│   └── GameOverScreen.js         # Resumo do jogo com mensagens dinâmicas de feedback
└── assets/
    ├── images/
    │   └── background.png        # Imagem de fundo principal
    └── fonts/                    # Fontes customizadas (OpenSans-Regular e OpenSans-Bold)
```

## Mapeamento dos Conceitos por Aula

### Rondas, FlatList, Fontes & Desafios Práticos

| **Conceito** | **Aplicação Prática** | **Onde Encontrar** |
|---|---|---|
| **Carregamento de Fontes** | Hook `useFonts` + `expo-splash-screen` | `App.js` |
| **Hierarquia de Texto** | Separação de fontes Regular/Bold por componentes de UI | `GuessLogItem.js`, `Title.js` |
| **Listas de Desempenho** | Renderização otimizada de dados com `<FlatList>` | `screens/GameScreen.js` |
| **Feedback Dinâmico** | Renderização de conteúdo baseada em condicionais | `screens/GameOverScreen.js` |
| **Merge de Estilos** | Sobrescrita e reaproveitamento de `StyleSheet` via Arrays | `screens/GameScreen.js` |

### Estrutura Base & Motor de Adivinhação

| **Conceito** | **Aplicação Prática** | **Onde Encontrar** |
|---|---|---|
| **Entrada Controlada** | Input numérico com validação (`parseInt`, `isNaN`, limites) | `screens/StartGameScreen.js` |
| **Navegação por Estado** | Transição fluida entre telas sem uso de biblioteca de rotas | `App.js` |
| **Validação Antifraude** | Detecção e bloqueio de dicas inconsistentes do usuário | `screens/GameScreen.js` |
| **Hooks de Efeito** | `useEffect` monitorando condição de vitória e fim de jogo | `screens/GameScreen.js` |

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


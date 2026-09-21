# 3º Bimestre - Aplicações Mobile

Este diretório reúne as atividades desenvolvidas durante o terceiro bimestre da disciplina de Aplicativos Móveis, utilizando React Native com Expo.

As atividades têm como foco o desenvolvimento de um jogo de adivinhação, trabalhando progressivamente conceitos de organização de projetos, componentes reutilizáveis, propriedades, estados, eventos, estilização, validação de entradas, navegação entre telas, algoritmos, listas, fontes e refinamento da interface.

---

## Aulas/Atividades

| Aula | Tema | Descrição |
|------|------|------------|
| [**Aula 1**](./Aula%201/) | Estrutura de projetos e componentes | Criação da estrutura inicial do jogo de adivinhação, separando `screens/` e `components/`, além da criação de um `PrimaryButton` reutilizável e aplicação de estilização multiplataforma. |
| [**Aula 2**](./Aula%202/) | Interatividade, Pressable e estilização | Implementação de interações com `Pressable`, passagem de funções por props, estilização de botões, efeito *ripple*, estados de pressionamento e composição do background com gradiente e imagem. |
| [**Aula 3**](./Aula%203/) | Estados, validação e motor de adivinhação | Desenvolvimento do jogo completo, incluindo entrada validada de números, navegação entre telas por estado, `SafeAreaView`, paleta centralizada, algoritmo de geração de palpites, busca binária, prevenção de palpites inconsistentes e tela de fim de jogo. |
| **Atividade Prática** | Refinamento da interface e histórico | Personalização visual do histórico de palpites, mensagens de desempenho, hierarquia tipográfica com fontes customizadas, `FlatList` e organização cronológica das rodadas. |

---

## Conteúdos Trabalhados

Durante as atividades deste bimestre foram praticados conceitos como:

- Organização de projetos React Native com separação entre `screens/`, `components/`, `utils/` e `constants/`
- Criação de componentes reutilizáveis
- Passagem de dados e funções por Props
- Utilização de `props.children`
- Manipulação de estados com `useState`
- Efeitos com `useEffect`
- Renderização condicional
- Controle de entrada com `TextInput`
- Validação de dados com `parseInt` e `isNaN`
- Eventos com `Pressable`
- Efeito *ripple* no Android
- Estilização com `StyleSheet`
- Flexbox e organização de componentes
- Criação de botões customizados
- Sombras e diferenças de estilização entre Android e iOS
- Utilização de `LinearGradient` e `ImageBackground`
- Utilização de `SafeAreaView` e `SafeAreaProvider`
- Navegação entre telas utilizando estado e renderização condicional
- Centralização da paleta de cores
- Geração de números aleatórios com limites e exclusão de valores
- Implementação de um motor de adivinhação baseado em busca binária
- Validação contra palpites inconsistentes
- Detecção do fim do jogo
- Utilização de `FlatList`
- Carregamento de fontes customizadas com `useFonts`
- Hierarquia tipográfica
- Merge de estilos utilizando arrays
- Organização e exibição cronológica do histórico de tentativas

---

## Projeto Desenvolvido

Ao longo do bimestre, o projeto evoluiu de uma estrutura inicial contendo apenas a tela de entrada e componentes básicos para um jogo completo de adivinhação.

O fluxo principal da aplicação é:

```text
StartGameScreen
       │
       │ usuário escolhe um número
       ▼
 GameScreen
       │
       │ computador realiza palpites
       │ usuário informa maior/menor
       ▼
GameOverScreen
       │
       │ iniciar novo jogo
       └──────────────────► StartGameScreen
```

O usuário escolhe um número entre **1 e 99**, e o aplicativo tenta descobrir o número por meio de palpites sucessivos, utilizando os limites fornecidos pelo jogador para reduzir o intervalo de possibilidades.

---

## Como Executar uma Aula

1. Entre na pasta da aula desejada:

```bash
cd "Aula X/app/"
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor do Expo:

```bash
npx expo start
```

4. Para visualizar a aplicação:

- Utilize o **Expo Go** no celular e escaneie o QR Code gerado.
- Ou pressione `a` para abrir no emulador Android.
- Ou pressione `i` para abrir no iOS.

> Consulte o `README.md` de cada aula para verificar instruções ou dependências específicas daquela atividade.

---

## Tecnologias Utilizadas

- JavaScript
- React Native
- Expo
- Node.js

---

Este projeto foi desenvolvido como requisito para a disciplina de **Aplicativos Móveis**.

* **Desenvolvedor:** [Samuel Fernandes Filho](https://github.com/Samuel-fernandesf)
* **Instituição:** Instituto Federal de São Paulo (**IFSP**) - Campus Araraquara

# Aula 5 - Components e Props

Atividade prática desenvolvida na disciplina de Arquitetura e Programação para Dispositivos Móveis (ARQAPMO), utilizando React Native com Expo.

O objetivo desta atividade foi aprofundar os conceitos de criação de componentes reutilizáveis e passagem de dados através de props no React Native.

---

## Objetivos da Atividade

- Criar componentes reutilizáveis
- Trabalhar com passagem de propriedades (Props)
- Passar diferentes tipos de dados entre componentes
- Manipular estados com `useState`
- Utilizar renderização condicional
- Organizar melhor a estrutura do projeto

---

## Funcionalidades Implementadas

### Header
Componente reutilizável responsável pelo cabeçalho da aplicação.

Props utilizadas:
- `titulo`
- `corFundo`

---

### GoalCount
Componente responsável por exibir dinamicamente a quantidade de objetivos cadastrados.

Prop utilizada:
- `quantidade`

---

### ClearButton
Componente responsável por limpar todos os objetivos da lista.

Prop utilizada:
- `onClear`

Também foi aplicada renderização condicional para que o botão apareça somente quando houver itens cadastrados.

---

## Tecnologias Utilizadas

- JavaScript
- React Native
- Expo
- Node.js

---
## Instalação e Execução

### Pré-requisitos
* Node.js
* Expo Go
* Android Studio (opcional)

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Samuel-fernandesf/ArquivoOa.git
    cd ArquivoOa
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

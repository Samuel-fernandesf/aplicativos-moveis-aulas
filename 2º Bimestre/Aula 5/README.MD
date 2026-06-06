# Aula 5 - Depuração em React Native

Atividade prática desenvolvida na disciplina de Arquitetura e Programação para Dispositivos Móveis (ARQAPMO), utilizando React Native.

O objetivo desta atividade foi aplicar técnicas de depuração para identificar, analisar e corrigir erros em uma aplicação React Native, utilizando ferramentas comuns do processo de desenvolvimento.

## Objetivos da Atividade

- Identificar erros de execução em aplicações React Native
- Interpretar mensagens de erro (Red Box e Yellow Box)
- Utilizar `console.log` para rastreamento de dados
- Inspecionar componentes e propriedades com React DevTools
- Consultar a documentação oficial para validar comportamentos e tipos de dados
- Corrigir bugs relacionados a estado, props, listas e componentes visuais

## Funcionalidades Trabalhadas

### Correção de Falhas de Inicialização

Foi realizada a análise e correção de um erro que impedia a aplicação de iniciar corretamente devido à configuração incorreta do estado utilizado por um componente `FlatList`.

### Correção da Lógica de Exclusão

Foi ajustada a lógica responsável pela remoção de metas da lista, garantindo que apenas o item selecionado seja excluído.

### Depuração de Props

Utilizando React DevTools, foi realizada a análise das propriedades enviadas entre componentes para corrigir o funcionamento do botão de cancelamento do modal.

### Validação de Dados

Foram utilizados logs para acompanhar o fluxo de dados entre componentes e corrigir o problema que adicionava itens vazios à lista.

### Correção de Recursos Visuais

Foi corrigido o carregamento de imagens locais utilizando a forma adequada exigida pelo React Native.

## Ferramentas Utilizadas

- console.log
- React DevTools
- Red Box
- Yellow Box
- Documentação Oficial do React Native

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
    cd 'aplicativos-moveis-aulas/2º Bimestre/Aula 5/app/'
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

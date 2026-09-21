# Jogo de Adivinhação — Aula 2

Atividade que acompanha as aulas de React Native. A UI da
**StartGameScreen** é construída passo a passo; a lógica do jogo e as demais
telas vêm nos próximos módulos.

## Estrutura

```
jogo-adivinhacao/
├── App.js                   
├── screens/
│   └── StartGameScreen.js  
├── components/
│   └── PrimaryButton.js       
└── assets/images/background.png
```
## Roteiro da Aplicação

| Conceito                              | Onde no código                                    |
|--------------------------------------|---------------------------------------------------|
| Interatividade com `Pressable`       | `PrimaryButton.js` (`<Pressable onPress=…>`)      |
| Ponteiro, não execução (`onPress`)   | `onPress={onPress}` (sem parênteses)              |
| Esculpindo o botão (pílula, padding) | `styles.buttonInnerContainer` / `borderRadius 28` |
| React Native não é CSS (sem herança) | `styles.buttonText` (estilo próprio do `Text`)    |
| Ripple (Android)                     | `android_ripple={{ color: '#640233' }}`           |
| Opacidade no toque (`pressed`)       | `style={({pressed}) => …}` + `styles.pressed`     |
| Double Container Pattern             | View externa (`overflow:'hidden'`) + Pressable    |
| Flexbox: centralizar input           | `inputContainer.alignItems: 'center'`             |
| Linha de botões + `flex: 1`          | `buttonsContainer` (row) + `buttonContainer`      |
| Background: cor → gradiente → imagem | `App.js` (`LinearGradient` + `ImageBackground`)   |
| `style` vs `imageStyle`              | `App.js` (`style` externo, `imageStyle` opacity)  |


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
    cd 'aplicativos-moveis-aulas/3º Bimestre/Aula 2/app/'
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


# Jogo de Adivinhação — exemplo da aula (3º Bimestre)

Protótipo da **StartGameScreen** para explicar a arquitetura em pastas, o
`PrimaryButton` customizado e a estilização multiplataforma vistos na aula.
É o "Passo 4 · Mãos à obra" dos slides: monta o esqueleto do fluxo com o que
a turma já sabe. A validação (1–99) e a navegação entre as três telas ficam
para o próximo módulo.

## Estrutura das pastas (slide "A fundação")

```
jogo-adivinhacao/
├── App.js                     # raiz — decide qual TELA aparece
├── screens/
│   └── StartGameScreen.js     # tela cheia (View + TextInput + botões)
└── components/
    └── PrimaryButton.js       # bloco reutilizável (View + Text + children)
```

`screens/` = componentes que ocupam a tela e gerenciam o macro-estado.
`components/` = peças menores, genéricas e reutilizáveis.

## Roteiro de explicação

| Conceito do slide                     | Onde mostrar no código                                  |
|--------------------------------------|---------------------------------------------------------|
| Separação `screens/` × `components/` | a própria estrutura de pastas                            |
| Uma "tela" é um componente comum     | `App.js` renderizando `<StartGameScreen />`             |
| View envolve tudo; texto só em Text  | `StartGameScreen.js` (View raiz) e `PrimaryButton.js`   |
| Botão customizado × `<Button>` nativo| `PrimaryButton.js` (View + Text, 100% de controle)      |
| `props.children`                     | `PrimaryButton({ children })` ← `<PrimaryButton>Reset`  |
| Esculpindo o container (sem flex:1)  | `styles.inputContainer` na StartGameScreen              |
| Sombras Android × iOS                | `Platform.select` no container e no botão               |
| Estilizando o input (#ddb52f)        | `styles.numberInput`                                    |
| `maxLength={2}` (número, não string) | prop do `<TextInput>`                                    |
| Teclado numérico sem auto-correção   | `keyboardType` / `autoCapitalize` / `autoCorrect`       |

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


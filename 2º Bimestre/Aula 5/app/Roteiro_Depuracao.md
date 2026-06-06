# 🔍 Aula 11 — Atividade Prática: Depuração em React Native

**Disciplina:** ARQAPMO | Prof. Junior Fernandes Marques  
**Objetivo:** Aplicar as técnicas de depuração vistas em aula para identificar e corrigir 5 bugs intencionais escondidos no projeto.

---

## 📋 Instruções Gerais

1. Abra o projeto normalmente com `npm start`.
2. Rode o app no emulador e **observe o comportamento** antes de olhar o código.
3. Para cada bug, **use a ferramenta de depuração indicada** — não corrija no escuro!
4. Registre suas descobertas no campo "O que você observou" de cada desafio.
5. Corrija o código e confirme que o app voltou a funcionar corretamente.

> 💡 **Regra de ouro:** Antes de corrigir qualquer linha, use `console.log` ou o React DevTools para *confirmar* sua hipótese. Depurar é investigar, não adivinhar.

---

## 🐛 Os 5 Bugs

---

### Bug 1 — O app crasha ao abrir
**Arquivo:** `App.js`  
**Sintoma:** O aplicativo trava imediatamente ao iniciar, antes de qualquer interação.  
**Ferramenta indicada:** Terminal (Red Box / Stack Trace)

#### O que fazer:
- Leia a mensagem de erro no terminal e no emulador.
- Identifique qual componente está reclamando e sobre qual prop/dado.
- Consulte `reactnative.dev` → Componentes → `FlatList` → prop `data`: qual tipo de dado ela aceita?

#### O que você observou:
> O erro foi causado pela inicialização incorreta como null do usestate que estava utilizando flatlist, pois o flatlist sempre espera um array e não um null

#### Correção aplicada:
> Bug corrigido, se o valor do useState for null gerará um erro, pois o FlatLIst espera um array.
  const [courseGoals, setCourseGoals] = useState([]);

---

### Bug 2 — Deletar uma meta remove todas as outras, menos ela
**Arquivo:** `App.js`  
**Sintoma:** Ao pressionar um item da lista para deletar, todos os outros somem e só o pressionado permanece.  
**Ferramenta indicada:** `console.log`

#### O que fazer:
Adicione os seguintes logs **dentro** da função `deleteGoalHandler`, antes do `return`:

```js
function deleteGoalHandler(id) {
  console.log('ID recebido para deletar:', id);
  setCourseGoals(currentCourseGoals => {
    console.log('IDs na lista:', currentCourseGoals.map(g => g.id));
    return currentCourseGoals.filter((goal) => goal.id === id);
  });
}
```

- Execute o app, adicione 3 metas e delete uma.

  console.log - resposta:
  ID recebido para deletar: 0.13598766212937125
  LOG  IDs na lista: ["0.128991850452355", "0.2675471114747979", "0.13598766212937125"]

- Observe o terminal. O comportamento do `filter` faz sentido com o operador usado?
  Não, pois a lógica de comparação está invertida, visto que com o operador === ele mantém apenas o ID recebido para deletar, e remove os outros. 

- Qual operador deveria ser usado para *excluir* um item específico?
  !=

#### O que você observou:
> Que a lógica de comparação do filtro estava inversa. Para a lógica ficar correta, o ideal seria utilizar o operador !== que tem a lógica oposta, removendo o id recebido, mantendo os IDs que não foram passados como parâmetros.


#### Correção aplicada:
> return currentCourseGoals.filter((goal) => goal.id !== id);
  Foi trocado o operador para !==, para remover do filtro apenas o ID solicitado pelo parâmetro.

---

### Bug 3 — O botão "Cancelar" do modal não fecha nada
**Arquivo:** `App.js`  
**Sintoma:** O modal abre normalmente, mas ao pressionar "Cancelar", nada acontece.  
**Ferramenta indicada:** React DevTools (Standalone) ou inspeção de props

#### O que fazer:
- Abra o React DevTools (`react-devtools` em outro terminal).
- Clique no componente `GoalInput` na árvore.
- No painel direito, inspecione as **props** recebidas. A prop `onCancel` está presente?
- Compare as props que chegam ao `GoalInput` com o que o componente usa internamente.
- Agora compare com o que `App.js` está enviando via JSX.

#### O que você observou:
> A props do button de cancelar estava com nome errado: onCancel

#### Correção aplicada:
> corrigir o nome da prop: onClose

GoalInput.js:
  <!-- <Button
    title="Cancelar"
    color="#f31282"
    onPress={props.onClose}
  /> -->

---

### Bug 4 — Adicionar uma meta salva um item em branco
**Arquivo:** `components/GoalInput.js`  
**Sintoma:** Ao digitar um texto e pressionar "Adicionar", um item vazio aparece na lista.  
**Ferramenta indicada:** `console.log`

#### O que fazer:
Adicione o seguinte log dentro de `addGoalHandler` em `GoalInput.js`:

```js
function addGoalHandler() {
  console.log('Texto que será enviado:', enteredGoalText);
  // ... resto da função
}
```

- Adicione também um log para ver o argumento recebido em `addGoalHandler` no `App.js`:

```js
function addGoalHandler(enteredGoalText) {
  console.log('Texto recebido pelo App:', enteredGoalText);
  // ... resto da função
}
```

- Execute o app, digite "Aprender React" e pressione Adicionar.
- O que aparece no terminal? O valor enviado é o que você esperava?
- Leia atentamente a lógica dentro de `addGoalHandler` em `GoalInput.js`.

#### O que você observou:
> Observei que a partir dos logs, o texto recebido pelo App é vazio, não tem nada, enquando o texto que será enviado aparece o texto correto. Então se eu clico em adicionar o texto realmente é enviado para a função passada por prop para o App porém a forma que se envia está errada, o problema pelo que vejo é nesse if, porque se a função Trim() retornar que o texto é vazio do inicio ao fim ele envia o enteredGoalText que seria ainda vazio, e se não tiver espaços ele simplesmente esvazia o state e envia vazio, então o problema seria aqui.
> LOG  Texto recebido pelo App: 
> LOG  Texto que será enviado: Aprender React

#### Correção aplicada:
> A lógica de condicional para enviar o dado para a prop do app para salvar na lista estava errada. Ela usa um trim() para ver se o texto enviado é vazio no inicio e fim e retira esses espaços, e caso seja vazio ele envia o próprio enteredGoaltext, agora se não for vazio ele simplesmente retorna ''.
> A correção foi aqui:
> props.onAddGoal(enteredGoalText.trim() === '' ? '' : enteredGoalText.trim());
> Agora se o trim  retornar apenas '' ele vai retornar vazio mesmo, porém se não, ele vai retornar a variável com o campo que o usuário digitou retirando os espaços no início e final.

---

### Bug 5 — A imagem do modal não aparece
**Arquivo:** `components/GoalInput.js`  
**Sintoma:** O modal abre corretamente, mas o espaço da imagem fica em branco (sem imagem).  
**Ferramenta indicada:** Yellow Box (aviso) + documentação oficial

#### O que fazer:
- Verifique se há um **aviso amarelo (Yellow Box)** no emulador ou no terminal.
- Acesse `reactnative.dev` → Componentes → `Image` → prop `source`.
- Qual é o tipo de dado aceito para imagens **locais** (armazenadas no projeto)?
- O que está sendo passado atualmente como `source`? É compatível?

#### O que você observou:
>Observei que o código passava o caminho da imagem apenas como uma string comum (source={'../assets/images/goal.png'}). De acordo com a documentação do React Native, strings diretas não servem para carregar imagens locais. Para arquivos locais salvos dentro do projeto, o React Native exige o uso da função require() para empacotar o arquivo corretamente.

#### Correção aplicada:
> A correção foi envolver o caminho relativo do arquivo dentro da função require(), ficando da forma apresentada a seguir:
> source={require('../assets/images/goal.png')}

---

## ✅ Checklist de Entrega

Antes de finalizar, confirme:

- [X] O app abre sem crash.
- [X] É possível adicionar metas com texto correto.
- [X] O botão "Cancelar" fecha o modal.
- [X] Deletar uma meta remove apenas ela.
- [X] A imagem aparece no modal.
- [X] Usei `console.log` ou React DevTools em pelo menos 3 bugs.
- [X] Preenchi o campo "O que você observou" em todos os bugs.

---

## 🧰 Referência Rápida das Ferramentas

| Ferramenta | Como acessar | Melhor para |
|---|---|---|
| `console.log` | Terminal onde `npm start` roda | Verificar valores de variáveis e fluxo de execução |
| **Red Box** | Emulador / Terminal | Erros críticos que travam o app |
| **Yellow Box** | Emulador | Avisos de configuração incorreta |
| **React DevTools** | `npx react-devtools` (outro terminal) | Inspecionar props e state em tempo real |
| **Documentação oficial** | reactnative.dev | Confirmar tipos de dados aceitos por cada prop |

---

*Bom debug! Lembre-se: todo erro é um dado de diagnóstico. 🔬*

<h1 align="center">MVX Bingo</h1>

<p align="center">
  Aplicação web desenvolvida para sorteio de números em estilo bingo, com intervalo configurável, animações visuais, mural de números sorteados e bloqueio de repetição durante a sessão.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-layout-and-design-decisions">Layout e decisões de design</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Como executar</a>
</p>

<br>

<img src="./assets/Mockup - Bingo.png" alt="Mockup MVX-Bingo" width="100%">
---

## 🏠 About the project

O **MVX Bingo** foi desenvolvido como uma aplicação de sorteio numérico inspirada em dinâmicas de bingo, com o objetivo de permitir sorteios dentro de um intervalo definido pelo usuário e exibir o histórico dos números já extraídos. 

A proposta da aplicação é unir uma lógica simples de geração aleatória com uma experiência visual mais divertida, incluindo animações no elemento central, tremor de tela, exibição destacada do número sorteado e mural acumulativo com os resultados anteriores. 

Durante o desenvolvimento, foram trabalhados conceitos importantes como validação de entrada, prevenção de duplicidade, manipulação do DOM, criação dinâmica de elementos HTML, controle de estado com array e efeitos visuais com CSS. 

---

## 🧰 Features

- Definição de número mínimo e máximo para sorteio
- Sorteio aleatório dentro do intervalo informado
- Bloqueio de números repetidos na mesma sessão
- Validação de intervalo inválido
- Aviso quando todos os números possíveis já foram sorteados
- Exibição destacada do número sorteado
- Mural com histórico dos números sorteados
- Animação de rotação no elemento visual principal
- Animação de explosão ao revelar o número
- Efeito de tremor de tela durante o sorteio
- Botão de refresh para reiniciar a sessão
- Mensagens especiais para números específicos
- Layout responsivo para telas menores 

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript
- Manipulação do DOM
- Arrays
- `Math.random()`
- Criação dinâmica de elementos com JavaScript
- Animações com keyframes
- Media queries para responsividade 

---

## 👷 Project structure

A estrutura principal do projeto está organizada da seguinte forma:

- `index.html`
- `style.css`
- `script.js`
- `assets/` para ícones e imagens do layout 

### Organização dos arquivos

- `index.html` → estrutura da interface do bingo
- `style.css` → estilização, animações e responsividade
- `script.js` → lógica de sorteio, histórico, validação e reinicialização 

---

## 🎨 Layout and design decisions

O projeto utiliza uma interface com contraste forte entre uma área principal escura e uma área lateral clara para exibição do histórico, criando uma separação visual clara entre o sorteio atual e os números já obtidos.

Alguns pontos de destaque no layout:

- composição em duas áreas principais
- destaque central para o elemento de sorteio
- mural lateral para histórico dos números
- uso de verde como cor associada à vitória e sorteio
- animações para tornar a experiência mais envolvente
- cards simples para os números já sorteados
- adaptação para telas menores com reorganização da estrutura em coluna

---

## ⚙️ Functional rules

A lógica principal da aplicação funciona assim:

- o usuário informa um valor mínimo e um valor máximo
- ao clicar em **Sortear**, a aplicação valida o intervalo
- se o intervalo for inválido, é exibido um alerta
- se todos os números já tiverem sido sorteados, a aplicação também alerta
- caso contrário, um número aleatório é gerado dentro do intervalo
- se o número já tiver sido sorteado antes, outro é gerado até encontrar um valor novo
- o número sorteado é salvo em um array de controle
- depois da animação, ele aparece em destaque e é adicionado ao mural
- o botão de refresh recarrega a página e reinicia toda a sessão

---

## 🎲 Special numbers

O projeto inclui mensagens especiais para alguns números sorteados, como:

- `1` → “Começou o jogo!”
- `10` → “Craque do time!”
- `11` → “Um atrás do outro!”
- `13` → “Faz o L!”
- `18` → “Parabéns, agora você pode ser preso!”
- `22` → “Dois patinhos na lagoa!”
- `33` → “Idade de Jesus!”
- `51` → “Uma boa ideia!”
- `61` → “DDD de brasília!”
- `69` → “Número do amor!”
- `75` → “Terminou o jogo!"

---

## 🔰 Getting Started

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- Git
- Um navegador de sua preferência

---

### Clone the repository

```bash id="5m1vrk"
git clone https://github.com/seu-usuario/mvx-bingo.git

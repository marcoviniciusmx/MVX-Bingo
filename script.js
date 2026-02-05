// Seleciona o botão "Sortear"
const button = document.querySelector(".btn-draw");

// Seleciona o input do número mínimo
const firstNumber = document.querySelector(".num-min");

// Seleciona o input do número máximo
const lastNumber = document.querySelector(".num-max");

// Seleciona a imagem do dado
const cubeImage = document.querySelector(".cube-image");

// Seleciona o elemento onde o número sorteado será exibido
const resultNumber = document.querySelector(".result-number");

// Referência ao body da página
const body = document.body;

// Seleciona o container da direita (mural)
const containerRight = document.querySelector(".container-right");

// Array que guarda todos os números já sorteados
const drawnNumbers = [];

// Seleciona o botão de refresh (reiniciar)
const refreshButton = document.querySelector(".refresh");


// Função principal que sorteia os números
function generateRandomNumbers() {

    // Converte o valor do input mínimo para Number
    const min = Number(firstNumber.value);

    // Converte o valor do input máximo para Number
    const max = Number(lastNumber.value);

    // Validação:
    // - se min ou max não existir
    // - ou se min for maior que max
    if (!min || !max || min > max) {
        alert("Informe um intervalo válido!");
        return; // interrompe a função
    }

    // Verifica se todos os números possíveis já foram sorteados
    if (drawnNumbers.length === (max - min + 1)) {
        alert("Todos os números já foram sorteados!");
        return; // interrompe a função
    }

    // Gera um número aleatório inicial dentro do intervalo
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Enquanto o número já existir no array, sorteia outro
    do {
        result = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (drawnNumbers.includes(result));

    // Guarda o número sorteado no array
    drawnNumbers.push(result);

    // Envia o número para o mural (com delay)
    addNumberToMural(result);

    // ===== RESET VISUAL DO NÚMERO =====
    resultNumber.classList.add("hidden"); // esconde o número
    resultNumber.textContent = "";        // limpa o conteúdo
    resultNumber.classList.remove("show");// remove animação


    // ===== ANIMAÇÃO DE EXPLOSÃO =====
    cubeImage.classList.add("exploding"); // animação do cubo
    body.classList.add("shake");          // tremida da tela

    // Mensagens especiais para números específicos
    if (result == 1) {
        alert("Começou o jogo!");
    } else if (result == 10) {
        alert ("Craque do time!")
    } else if (result == 11) {
        alert("Um atrás do outro!");
    } else if (result == 13) {
        alert("Faz o L!");
    } else if (result == 18) {
        alert("Parabéns, agora você pode ser preso!");
    } else if (result == 22) {
        alert("Dois patinhos na lagoa!");
    } else if (result == 33) {
        alert("Idade de Jesus!");
    } else if (result == 51) {
        alert("Uma boa ideia!");
    } else if (result == 61) {
        alert("DDD de brasília!");
    } else if (result == 69) {
        alert("Número do amor!");
    } else if (result == 75) {
        alert("Terminou o jogo!");
    }

    // Após 700ms → mostra o número no lugar do cubo
    setTimeout(() => {
        cubeImage.style.display = "none";          // esconde o cubo
        resultNumber.textContent = result;         // insere o número
        resultNumber.classList.remove("hidden");   // torna visível
        resultNumber.classList.add("show");        // anima entrada
        resultNumber.classList.add("result-number");
    }, 800);


    // Após 3500ms → reseta tudo para o próximo sorteio
    setTimeout(() => {
        cubeImage.classList.remove("exploding");   // remove explosão
        cubeImage.style.display = "inline-block";  // mostra o cubo
        body.classList.remove("shake");             // remove tremida
        resultNumber.classList.remove("result-number");
        resultNumber.textContent = "";              // limpa o número
    }, 2500);
}


// Função responsável por adicionar o número no mural
function addNumberToMural(number) {

    // Seleciona o mural
    const mural = document.querySelector(".mural");

    // Cria um elemento <span>
    const span = document.createElement("span");

    // Delay para sincronizar com a animação principal
    setTimeout(() => {
        span.textContent = number;  // coloca o número no span
        span.style.color = "#FFF"; // define a cor do texto
        span.style.padding = "22px"; // define o padding
        span.style.fontSize = "28px"; // define o tamanho da fonte
        mural.appendChild(span);    // adiciona no mural
    }, 2500);
}


// Evento de clique no botão "Sortear"
button.addEventListener("click", generateRandomNumbers);

// Evento de clique no botão de refresh
refreshButton.addEventListener("click", () => {
    location.reload(); // recarrega a página
});

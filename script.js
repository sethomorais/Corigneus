const book = document.querySelector('.book');
const pageToBurn = document.querySelector('.back-page'); // Seleciona a página que vai queimar
const candlesContainer = document.querySelector('.candles-container');

// Variáveis de controle
const totalCandles = 18;
let litCandlesCount = 0;

// Função para virar a página
function turnPage() {
    book.classList.add('turn');
}

// Criar as 18 velas dinamicamente
for (let i = 0; i < totalCandles; i++) {
    const candle = document.createElement('div');
    candle.classList.add('candle');
    candle.addEventListener('click', () => {
        if (!candle.classList.contains('lit')) {
            candle.classList.add('lit');
            litCandlesCount++;
            
            if (litCandlesCount === totalCandles) {
                setTimeout(triggerFinalSequence, 1000); // Espera 1s para começar a queimar
            }
        }
    }, { once: true });
    candlesContainer.appendChild(candle);
}

// FUNÇÃO ATUALIZADA PARA DISPARAR A QUEIMA
function triggerFinalSequence() {
    // A única coisa que precisamos fazer é adicionar a classe à página das velas
    pageToBurn.classList.add('is-burning');

    // Oculta a página queimada ao final da animação para garantir
    // que o poema abaixo seja clicável/rolável
    setTimeout(() => {
        pageToBurn.style.display = 'none';
    }, 4000); // Duração da animação 'burn-away'
}

const book = document.querySelector('.book');
const candlesContainer = document.querySelector('.candles-container');
const poemContainer = document.querySelector('.poem-container');

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
    // Adiciona um listener de clique a cada vela
    candle.addEventListener('click', () => {
        // Acende a vela apenas se ela ainda não estiver acesa
        if (!candle.classList.contains('lit')) {
            candle.classList.add('lit');
            litCandlesCount++;
            
            // Verifica se todas as velas foram acesas
            if (litCandlesCount === totalCandles) {
                // Inicia a sequência final após um pequeno atraso
                setTimeout(triggerFinalSequence, 1000);
            }
        }
    }, { once: true }); // O listener é removido após o primeiro clique
    candlesContainer.appendChild(candle);
}

// Função para disparar o efeito de fogo e mostrar o poema
function triggerFinalSequence() {
    // 1. Esconde as velas
    candlesContainer.style.display = 'none';

    // 2. Adiciona a classe que mostra o GIF de fogo no body
    document.body.classList.add('burning');
    
    // 3. Após a animação do fogo terminar (definido no CSS para 3s), mostra o poema
    setTimeout(() => {
        poemContainer.classList.remove('hidden');
        poemContainer.style.display = 'block';
    }, 2500); // Este tempo deve ser coordenado com as animações CSS
}

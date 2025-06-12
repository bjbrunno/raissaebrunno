// Data de início do namoro: 02 de Julho de 2023
// O mês em JavaScript começa em 0 (Janeiro=0, Julho=6)
const startDate = new Date(2023, 6, 2, 0, 0, 0).getTime();

// Data do casamento: 18 de Outubro de 2025, às 17:00
// O mês em JavaScript começa em 0 (Janeiro=0, Outubro=9)
const weddingDate = new Date(2025, 9, 18, 17, 0, 0).getTime();

// Seleciona os elementos no HTML onde o tempo será exibido
const togetherElement = document.getElementById('together-time');
const weddingElement = document.getElementById('wedding-time');

// Função que atualiza o contador a cada segundo
setInterval(function() {
    let now = new Date().getTime();

    // ---- Contagem do tempo juntos ----
    let distanceTogether = now - startDate;
    let daysTogether = Math.floor(distanceTogether / (1000 * 60 * 60 * 24));
    let hoursTogether = Math.floor((distanceTogether % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesTogether = Math.floor((distanceTogether % (1000 * 60 * 60)) / (1000 * 60));
    let secondsTogether = Math.floor((distanceTogether % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento 'together-time'
    if (togetherElement) {
        togetherElement.innerHTML = `${daysTogether} dias, ${hoursTogether}h, ${minutesTogether}m e ${secondsTogether}s`;
    }

    // ---- Contagem regressiva para o casamento ----
    let distanceWedding = weddingDate - now;

    // Se a data do casamento já passou, mostra uma mensagem
    if (distanceWedding < 0) {
        if (weddingElement) {
            weddingElement.innerHTML = "Enfim casados! ❤️";
        }
        // Para a execução de outras partes do código se o casamento já aconteceu
        document.getElementById('countdown-wedding').querySelector('p').childNodes[0].nodeValue = '';
    } else {
        let daysWedding = Math.floor(distanceWedding / (1000 * 60 * 60 * 24));
        let hoursWedding = Math.floor((distanceWedding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesWedding = Math.floor((distanceWedding % (1000 * 60 * 60)) / (1000 * 60));
        let secondsWedding = Math.floor((distanceWedding % (1000 * 60)) / 1000);
        // Exibe o resultado no elemento 'wedding-time'
        if (weddingElement) {
            weddingElement.innerHTML = `${daysWedding} dias, ${hoursWedding}h, ${minutesWedding}m e ${secondsWedding}s`;
        }
    }

}, 1000); // Atualiza a cada 1 segundo
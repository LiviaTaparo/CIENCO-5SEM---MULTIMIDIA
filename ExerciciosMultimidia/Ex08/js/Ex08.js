// Inicializando contadores de votos
var votosCandidato1 = 0;
var votosCandidato2 = 0;
var votosNulos = 0;
var votosBrancos = 0;
var totalVotos = 0;

document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var voto = parseInt(document.getElementById('voto').value);

    // Contabilizando o voto
    switch (voto) {
        case 1:
            votosCandidato1++;
            break;
        case 2:
            votosCandidato2++;
            break;
        case 3:
            votosNulos++;
            break;
        case 4:
            votosBrancos++;
            break;
        default:
            alert("Código de voto inválido. Tente novamente.");
            return;
    }

    totalVotos++;
    document.getElementById('voto').value = '';
});

function finalizarVotacao() {
    if (totalVotos === 0) {
        alert("Nenhum voto foi registrado.");
        return;
    }

    var percentualCandidato1 = (votosCandidato1 / totalVotos) * 100;
    var percentualCandidato2 = (votosCandidato2 / totalVotos) * 100;
    var percentualNulos = (votosNulos / totalVotos) * 100;
    var percentualBrancos = (votosBrancos / totalVotos) * 100;

    document.getElementById('resultadoCandidato1').textContent = `Percentual de votos para o Candidato 1: ${percentualCandidato1.toFixed(2)}%`;
    document.getElementById('resultadoCandidato2').textContent = `Percentual de votos para o Candidato 2: ${percentualCandidato2.toFixed(2)}%`;
    document.getElementById('resultadoNulos').textContent = `Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`;
    document.getElementById('resultadoBrancos').textContent = `Percentual de votos em branco: ${percentualBrancos.toFixed(2)}%`;
}
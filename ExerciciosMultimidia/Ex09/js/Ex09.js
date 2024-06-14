var totalPessoas = 0;
var somaIdades = 0;
var votosOtimo = 0;
var votosBom = 0;
var votosRegular = 0;
var votosRuim = 0;

document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var idade = parseInt(document.getElementById('idade').value);
    var opiniao = parseInt(document.getElementById('opiniao').value);

    if (idade < 0) {
        alert("Idade inválida. Finalizando pesquisa.");
        return;
    }

    totalPessoas++;
    somaIdades += idade;

    switch (opiniao) {
        case 1:
            votosOtimo++;
            break;
        case 2:
            votosBom++;
            break;
        case 3:
            votosRegular++;
            break;
        case 4:
            votosRuim++;
            break;
        default:
            alert("Opinião inválida. Tente novamente.");
            return;
    }

    document.getElementById('idade').value = '';
    document.getElementById('opiniao').value = '1';
});

function finalizarPesquisa() {
    if (totalPessoas === 0) {
        alert("Nenhuma resposta foi registrada.");
        return;
    }

    var mediaIdade = somaIdades / totalPessoas;
    var percentualOtimo = (votosOtimo / totalPessoas) * 100;
    var percentualBom = (votosBom / totalPessoas) * 100;
    var percentualRegular = (votosRegular / totalPessoas) * 100;
    var percentualRuim = (votosRuim / totalPessoas) * 100;

    document.getElementById('quantidadePessoas').textContent = `Quantidade de pessoas que respondeu a pesquisa: ${totalPessoas}`;
    document.getElementById('mediaIdade').textContent = `Média de idade das pessoas que responderam a pesquisa: ${mediaIdade.toFixed(2)}`;
    document.getElementById('percentualOtimo').textContent = `Percentual de respostas Ótimo: ${percentualOtimo.toFixed(2)}%`;
    document.getElementById('percentualBom').textContent = `Percentual de respostas Bom: ${percentualBom.toFixed(2)}%`;
    document.getElementById('percentualRegular').textContent = `Percentual de respostas Regular: ${percentualRegular.toFixed(2)}%`;
    document.getElementById('percentualRuim').textContent = `Percentual de respostas Ruim: ${percentualRuim.toFixed(2)}%`;
}
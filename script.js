function calcularParcelas() {
    let valor = document.getElementById('valor').value.replace(",", "."); // Substitui a vírgula por ponto
    let parcelaMinima = document.getElementById('parcela').value.replace(",", ".");

    valor = parseFloat(valor); // Converte para número decimal
    parcelaMinima = parseFloat(parcelaMinima);

    if (!isNaN(valor) && !isNaN(parcelaMinima) && parcelaMinima > 0) {
        let totalParcelas = Math.floor(valor / parcelaMinima);
        document.getElementById('resultado').innerHTML = `Total de parcelas: ${totalParcelas}`;
    } else {
        document.getElementById('resultado').innerHTML = `Por favor, insira valores válidos.`;
    }
}
function classificarTriangulo() {
    let l1 = parseFloat(document.getElementById("lado1").value)
    let l2 = parseFloat(document.getElementById("lado2").value)
    let l3 = parseFloat(document.getElementById("lado3").value)
    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
        alert("Valor inválido!")
    } else {
        let resultado = ""
        if (l1 === l2 && l2 === l3) {
            resultado = "Equilátero"
        } else if (l1 === l2 || l2 === l3 || l1 === l3) {
            resultado = "Isósceles"
        } else {
            resultado = "Escaleno"
        }
        document.getElementById("res1").innerText = "Tipo de triângulo: " + resultado;
    }

}
function selecioneBebida() {
    let bebidaValor = parseInt(document.getElementById("bebida").value, 10)
    let resultado = ""
    switch (bebidaValor) {
        case 1:
            resultado = "Suco"
            break
        case 2:

            resultado = "Refrigerante"
            break
        case 3:
            resultado = "Água"
            break
        default:
            resultado = "Número inválido. Escolha 1 a 3."
    }
    document.getElementById("res2").innerText = "Bebida selecionada: " + resultado
}
function classificarLetra() {
    let letra = document.getElementById("letra").value
    let resultado = ""
    if (letra.length === 1 && /[a-zA-Z]/.test(letra)) {
        if (/[aeiouAEIOU]/.test(letra)) {
            resultado = "Vogal"
        } else {
            resultado = "Consoante"
        }
    } else {
        resultado = "Entrada inválida. Digite uma única letra."
    }
    document.getElementById("res3").innerText = "Classificação: " + resultado

}
function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value
    let resultado = ""
    switch (operacao) {
        case "soma":
            resultado = num1 + num2
            break
        case "subtracao":
            resultado = num1 - num2
            break
        case "multiplicacao":
            resultado = num1 * num2
            break
        case "divisao": if (num2 !== 0) {
            resultado = num1 / num2
        } else {
            resultado = "Erro: Divisão por zero"
        }

    }
    document.getElementById("res4").innerText = "Resultado: " + resultado
}
function converterMoeda() {
    let valorReais = parseFloat(document.getElementById("valorReais").value)
    let moeda = document.getElementById("moeda").value
    let resultado = ""
    switch (moeda) {
        case "dolar":
            resultado = valorReais * 0.20
            break
        case "euro":
            resultado = valorReais * 0.18
            break
        case "pesoA":
            resultado = valorReais * 20.00
            break
    }
    document.getElementById("res5").innerText = "Valor convertido: " + resultado.toFixed(2)
}

window.onerror = function (message, source, lineno, colno, error) {
    console.error("JS error:", message, "at", source + ":" + lineno + ":" + colno, error)
    return false
}

console.log("javascript.js carregado")

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
        case "divisao":
            if (num2 !== 0) {
                resultado = num1 / num2
            } else {
                resultado = "Erro: Divisão por zero"
            }
            break
    }
    document.getElementById("res4").innerText = "Resultado: " + resultado
}

function converterMoeda() {
    let valorReais = parseFloat(document.getElementById("valorReais").value)
    let moeda = document.getElementById("moeda").value
    let resultado = 0
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

let mediaIdadesSoma = 0
let mediaIdadesCount = 0

function mostrarResultado(id, html) {
    document.getElementById(id).innerHTML = html
}

function contagemProgressiva() {
    let resultado = ""
    for (let i = 1; i <= 50; i++) {
        resultado += i
        if (i < 50) resultado += ", "
        if (i % 10 === 0 && i < 50) resultado += "<br>"
    }
    mostrarResultado("res21", resultado)
}

function tabuadaDinamica() {
    let num = parseInt(document.getElementById("tabuadaNumero").value, 10)
    if (isNaN(num)) {
        mostrarResultado("res22", "Digite um número válido.")
        return
    }
    let resultado = ""
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}<br>`
    }
    mostrarResultado("res22", resultado)
}

function somadorCincoNumeros() {
    let soma = 0
    for (let i = 1; i <= 5; i++) {
        let valor = parseFloat(document.getElementById(`somador${i}`).value)
        if (isNaN(valor)) {
            mostrarResultado("res23", "Digite os 5 números corretamente.")
            return
        }
        soma += valor
    }
    mostrarResultado("res23", `Soma total: ${soma}`)
}

function apenasPares() {
    let resultado = ""
    for (let i = 2; i <= 100; i += 2) {
        resultado += i
        if (i < 100) resultado += ", "
        if (i % 20 === 0 && i < 100) resultado += "<br>"
    }
    mostrarResultado("res24", resultado)
}

function fatorialNumero() {
    let n = parseInt(document.getElementById("fatorialN").value, 10)
    if (isNaN(n) || n < 0) {
        mostrarResultado("res25", "Digite um número inteiro não negativo.")
        return
    }
    let fatorial = 1
    let passos = ""
    for (let i = n; i >= 1; i--) {
        fatorial *= i
        passos += i
        if (i > 1) passos += " × "
    }
    mostrarResultado("res25", `${n}! = ${passos} = ${fatorial}`)
}

function validarNota() {
    let nota = parseFloat(document.getElementById("notaValidacao").value)
    if (isNaN(nota) || nota < 0 || nota > 10) {
        mostrarResultado("res26", "Nota inválida. Digite um valor entre 0 e 10.")
    } else {
        mostrarResultado("res26", `Nota válida: ${nota}`)
    }
}

function adicionarIdade() {
    let idade = parseInt(document.getElementById("idadePessoa").value, 10)
    if (isNaN(idade) || idade < 0) {
        mostrarResultado("res27", "Idade inválida. Digite um valor positivo ou 0 para encerrar.")
        return
    }
    if (idade === 0) {
        calcularMediaIdades()
        return
    }
    mediaIdadesSoma += idade
    mediaIdadesCount++
    mostrarResultado("res27", `Idade adicionada: ${idade}. Total de pessoas: ${mediaIdadesCount}.`)
    document.getElementById("idadePessoa").value = ""
}

function calcularMediaIdades() {
    if (mediaIdadesCount === 0) {
        mostrarResultado("res27", "Nenhuma idade registrada.")
        return
    }
    let media = (mediaIdadesSoma / mediaIdadesCount).toFixed(2)
    mostrarResultado("res27", `Média de idades: ${media} (${mediaIdadesCount} pessoa(s)).`)
    mediaIdadesSoma = 0
    mediaIdadesCount = 0
}

function listaNomes() {
    const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduardo"]
    let resultado = ""
    nomes.forEach((nome, i) => {
        resultado += `${i + 1}. ${nome}<br>`
    })
    mostrarResultado("res28", resultado)
}

function maiorValorArray() {
    let numeros = []
    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(document.getElementById(`maior${i}`).value)
        if (isNaN(valor)) {
            mostrarResultado("res29", "Digite os 10 números corretamente.")
            return
        }
        numeros.push(valor)
    }
    let maior = Math.max(...numeros)
    mostrarResultado("res29", `O maior número digitado foi ${maior}.`)
}

function inversorOrdem() {
    let numeros = []
    for (let i = 1; i <= 5; i++) {
        let valor = parseFloat(document.getElementById(`inversor${i}`).value)
        if (isNaN(valor)) {
            mostrarResultado("res30", "Digite os 5 números corretamente.")
            return
        }
        numeros.push(valor)
    }
    let resultado = numeros.reverse().join(", ")
    mostrarResultado("res30", `Ordem inversa: ${resultado}`)
}

function localizadorNomes() {
    const nomes = ["Alice", "Breno", "Clara", "Diego", "Eva"]
    let busca = document.getElementById("nomeBusca").value.trim()
    if (!busca) {
        mostrarResultado("res31", "Digite um nome para buscar.")
        return
    }
    let existe = nomes.some(nome => nome.toLowerCase() === busca.toLowerCase())
    mostrarResultado("res31", existe ? `${busca} está na lista.` : `${busca} não está na lista.`)
}

function filtroNotas() {
    const notas = [5.5, 7.8, 9.0, 6.5, 8.2, 4.9, 7.0, 10.0, 6.8, 8.7]
    let count = notas.filter(nota => nota > 7.0).length
    mostrarResultado("res32", `Notas acima da média 7.0: ${count}.`)
}

function loginAcesso() {
    const usuarios = ["maria", "joao", "pedro", "ana", "lucas"]
    let login = document.getElementById("loginUsuario").value.trim()
    if (!login) {
        mostrarResultado("res33", "Digite um usuário.")
        return
    }
    let autorizado = usuarios.includes(login.toLowerCase())
    mostrarResultado("res33", autorizado ? "Acesso Liberado" : "Acesso Negado")
}

function mediaVendasAnuais() {
    const vendas = [1200, 1500, 1700, 1300, 1600, 1800, 1400, 1550, 1650, 1750, 1350, 1450]
    let total = vendas.reduce((acc, valor) => acc + valor, 0)
    let media = (total / vendas.length).toFixed(2)
    mostrarResultado("res34", `Total vendido no ano: R$ ${total.toFixed(2)}<br>Média mensal: R$ ${media}`)
}

function carrinhoCompras() {
    let nomes = []
    let precos = []
    let total = 0
    for (let i = 1; i <= 3; i++) {
        let nome = document.getElementById(`produto${i}`).value.trim()
        let preco = parseFloat(document.getElementById(`preco${i}`).value)
        if (!nome || isNaN(preco) || preco < 0) {
            mostrarResultado("res35", "Digite corretamente nome e preço dos 3 produtos.")
            return
        }
        nomes.push(nome)
        precos.push(preco)
        total += preco
    }
    let resultado = "<strong>Nota Fiscal</strong><br>"
    for (let i = 0; i < nomes.length; i++) {
        resultado += `${nomes[i]} - R$ ${precos[i].toFixed(2)}<br>`
    }
    resultado += `<br>Total: R$ ${total.toFixed(2)}`
    mostrarResultado("res35", resultado)
}

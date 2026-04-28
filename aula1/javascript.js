function meuRoubo() {
    document.write("Olá São Lucas!");
    document.write("<br> <a href='index.html'> Voltar</a>");
    alert("Fim!");
}
function perguntei() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "Seu nome é: " + nome;
}
function mostrarTexto() {
    let texto = document.getElementById("inputTexto").value;
    document.getElementById("res2").innerHTML = "Você Escreveu: " + texto;
}
function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite números válidos!");
    } else {
        let resultado = num1 + num2;
        document.getElementById("res3").innerHTML = num1 + " + " + num2 + " = " + resultado;
    }
}
function mediaEscolar() {
    let not1 = parseFloat(document.getElementById("not1").value);
    let not2 = parseFloat(document.getElementById("not2").value);
    let not3 = parseFloat(document.getElementById("not3").value);
    if (isNaN(not1) || isNaN(not2) || isNaN(not3)) {
        alert("Nota Inválida!")
    } else {
        let notaFinal = (not1 + not2 + not3) / 3
        document.getElementById("res4").innerHTML = not1 + " + " + not2 + " + " + not3 + " / " + "3" + " = " + notaFinal
        if (notaFinal >= 7) {
            alert("Aprovado!")
        } else {
            alert("Reprovado!")
        }
    }
}

function conversorDolar() {
    let valorReal = parseFloat(document.getElementById("valorReal").value);
    if (isNaN(valorReal)) {
        alert("Valor inválido!");
    } else {
        let valorDolar = valorReal / 5.01;
        document.getElementById("res5").innerHTML = "R$ " + valorReal.toFixed(2) + " = $ " + valorDolar.toFixed(2);
    }
}
function calculoArea() {
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(largura) || isNaN(altura)) {
        alert("Valores inválidos!");
    } else {
        let area = largura * altura;
        document.getElementById("res6").innerHTML = "Largura: " + largura + " m x Altura: " + altura + " m = Área: " + area.toFixed(2) + " m²";
    }
}
function antecessorSucessor() {
    let numero = parseInt(document.getElementById("numero").value);
    if (isNaN(numero)) {
        alert("Número inválido!");
    } else {
        let antecessor = numero - 1;
        let sucessor = numero + 1;
        document.getElementById("res7").innerHTML = "Número: " + numero + " | Antecessor: " + antecessor + " | Sucessor: " + sucessor;
    }
}
function parOuImpar() {
    let numero = parseInt(document.getElementById("parImpar").value);
    if (isNaN(numero)) {
        alert("Número inválido!");
    } else {
        let resultado = (numero % 2 === 0) ? "Par" : "Ímpar";
        document.getElementById("res8").innerHTML = "Número: " + numero + " é " + resultado;
    }
}

function velocidade() {
    let velocidade = parseFloat(document.getElementById("velocidadeRadar").value);
    if (isNaN(velocidade)) {
        alert("Valor inválido!");
    } else {
        let resultado = "";
        if (velocidade > 120) {
            resultado = "Multa gravíssima por excesso de velocidade!";
        } else if (velocidade > 80) {
            resultado = "Multado por excesso de velocidade!";
        } else {
            resultado = "Velocidade dentro do limite permitido.";
        }
        document.getElementById("res9").innerHTML = "Velocidade: " + velocidade + " km/h - " + resultado;
    }
}

function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
    if (isNaN(idade)) {
        alert("Valor inválido!");
    }
    else {
        let resultado = "";
        if (idade < 18) {
            resultado = "Menor de idade";
        }
        else if (idade < 65) {
            resultado = "Adulto";
        }
        else {
            resultado = "Idoso";
        }
        document.getElementById("res10").innerHTML = "Idade: " + idade + " anos - " + resultado;
    }
}
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("alturaIMC").value);
    if (isNaN(peso) || isNaN(altura)) {
        alert("Valor Inválido!");
    } else {
        let imc = peso / (altura * altura);
        let resultado = "";
        if (imc < 18.5) {
            resultado = "Abaixo do peso";
        } else if (imc < 25) {
            resultado = "Peso normal";
        } else if (imc < 30) {
            resultado = "Sobrepeso";
        } else {
            resultado = "Obeso";
        }
        document.getElementById("res11").innerHTML = "Peso: " + peso + " kg | Altura: " + altura + " m | IMC: " + imc.toFixed(2) + " - " + resultado;
    }
}

function calcularDesconto() {
    let preco = parseFloat(document.getElementById("preco").value)
    let desconto = parseFloat(document.getElementById("desconto").value);
    if (isNaN(preco) || isNaN(desconto)) {
        alert("Valor inválido!");
    }
    else {
        let valorDesconto = preco * (desconto / 100);
        let precoFinal = preco - valorDesconto;
        document.getElementById("res12").innerHTML = "Preço Original: R$ " + preco.toFixed(2) + " | Desconto: " + desconto.toFixed(2) + "% | Valor do Desconto: R$ " + valorDesconto.toFixed(2) + " | Preço Final: R$ " + precoFinal.toFixed(2);
    }
}
function compararNumeros() {
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    if (isNaN(numA) || isNaN(numB)) {
        alert("Valor inválido!");
    } else {
        let resultado = "";
        if (numA > numB) {
            resultado = numA + " " + " é maior que "+ " " + numB;
        } else if (numA < numB) {
            resultado = numB + " " +" é maior que" +" "+ numA;
        } else {
            resultado = "São iguais";
        }
        document.getElementById("res13").innerHTML = "Número A: " + numA + " | Número B: " + numB + " - " + resultado;
    }
}
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
    let not1 = parseFloat(document.getElementById("not1").value)
    let not2 = parseFloat(document.getElementById("not2").value)
    let not3 = parseFloat(document.getElementById("not3").value)
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
function calcularArea(){
    let area = parseFloat(document.getElementById("area").value);
    if (isNaN(area)) {
        alert("Valor inválido!");
    } else {
        let lado = Math.sqrt(area);
        document.getElementById("res6").innerHTML = "A área é: " + area + " m², então o lado do quadrado é: " + lado.toFixed(2) + " m";
    }
}
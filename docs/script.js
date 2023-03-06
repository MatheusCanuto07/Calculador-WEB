//Consertar erro do parentese só abrir uma vez
//Fazer o botão de porcentagem funcionar
var botaolimpa = document.getElementById("botao-limpa")

//Gera um array é necessario um for para preencher todos os dados, por se tratar
//De uma calculadora e os dados são de 0 a 9 a posição que cada elemento se
//encontra é a mesma do array que foi gerado
var botaonumero = document.getElementsByClassName("botao-numero")
var botaooperador = document.getElementsByClassName("botao-operador")
var botaoparentese = document.getElementById("botao-parentese")
var porcentagem = document.getElementById("botao-porcen")
var virgula = document.getElementById("botao-virgula")
var botaoapaga = document.getElementById("botao-apaga")
var botaoigual = document.getElementById("botao-igual")
var botaopi = document.getElementById("botao-pi")

var multi = document.getElementById("botao-multi")
var divisao = document.getElementById("botao-divisao")
var subtra = document.getElementById("botao-sub")
var soma = document.getElementById("botao-soma")

var visor = document.getElementById("display")
var abreparentese = "("
var fechaparentese = ")"
var virgulaSimbo = "."
var contaclick = 1
//Botão apaga
botaoapaga.addEventListener("click", function () {
    //Não entendi o primeiro parâmetro dessa função
    //O segundo atributo negativo diz que será removido um caractere do final do 
    //texto, no caso o último
    visor.innerHTML = visor.innerHTML.slice(0, -1)
})

//Botao parentese
botaoparentese.addEventListener("click", function () {
    contaclick ++
    console.log(contaclick)
    if(contaclick % 2 == 0){
            visor.insertAdjacentText("beforeend", "(")
    } else{
            visor.insertAdjacentText("beforeend", ")")
    }}
)
//Botão virgula
virgula.addEventListener("click", function () {
    if (!visor.innerHTML.includes('.')) {
        visor.insertAdjacentText('beforeend', virgulaSimbo)
    }
})
//Botao Limpa
botaolimpa.addEventListener("click", function () {
    visor.innerHTML = "";
})

//Botao números
for (let i = 0; i < botaonumero.length; i++) {
    botaonumero[i].addEventListener("click", function () {
        botaonumero[i] = document.getElementsByClassName("botao-numero");
        //A função insertAdjacentHTML espera um elemento html como 2° parâmetro
        //A variavel i não indica qual é o elemento, ela só é usada como um contador
        //o que vai ser adicionado no visor na verdade é o que está dentro da tag
        //html
        //Quando o i vale 0 o html vale 7, por isso não dá para usar a insertAdjacentText
        visor.insertAdjacentHTML('beforeend', botaonumero[i].innerHTML);
    });
}

//Botao divisão
divisao.addEventListener("click", () => {
    visor.insertAdjacentText("beforeend", "÷")
})

//Botao multi
multi.addEventListener("click", () => {
    visor.insertAdjacentText("beforeend", "x")
})

//Botao soma
soma.addEventListener("click", () => {
    visor.insertAdjacentText("beforeend", "+")
})

//Botao subtração
subtra.addEventListener("click", () => {
    visor.insertAdjacentText("beforeend", "-")
})

//Botão igual
botaoigual.addEventListener("click", function () {
    if (visor.innerHTML.includes('÷')) {
        visor.innerHTML = visor.innerHTML.replace(/÷/g, '/');
    } else if (visor.innerHTML.includes('x')) {
        visor.innerHTML = visor.innerHTML.replace(/x/g, '*');
    }
    // Avalie a expressão matemática e mostre o resultado para o usuário
    //A função eval executa a string como se ela fosse um código JavaScript real e retorna o resultado.
    var resultado = eval(visor.innerHTML);
    visor.innerHTML = resultado;
});
//Botão pi
botaopi.addEventListener("click", function(){
    visor.insertAdjacentText("beforeend", "3.14")
})
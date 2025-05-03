// 1.1 - Crie um algoritmo que peça 2 números ao usuário


// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números


// 1.3 - Exiba no console a operação feita e o resultado da conta

let n1 = parseInt(prompt("informe um número:"))
let n2 = parseInt(prompt("informe outro número:"))
let operacao = prompt("Você deseja fazer qual operação?")

switch (operacao) {
    case "+":
        console.log("O resultado da soma foi = ", + n1 + n2)
        break;
    case "-":
        console.log("O resultado da subtração = ", + n1 - n2)
        break;
    case "*":
        console.log("O resultado da multiplicação foi = ", + n1 * n2)
        break;

    case "/":
        console.log("O resultado da divisão foi = ", + n1 / n2)
        break;
    default:
        console.log("default")
        break;
}
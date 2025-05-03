// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.


// 1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 


// 1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)


// 1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".

let opcoes = parseInt(prompt("Se deseja abastecer o seu carro com gasolina. Digite: 1 // Se deseja abastecer o seu carro com álcool. Digite: 2 // Se deseja calibrar os pneus. Digite: 3"))

switch (opcoes) {
    case 1:
        let gasolina = (prompt("quantos reais de gasolina o senhor deseja?"))
        console.log("O senhor abasteceu", + gasolina / 5 + " litros de gasolina")
        break;
    case 2 :
        let alcool = (prompt("quantos reais de álcool o senhor deseja?"))
        console.log("O senhor abasteceu", + alcool / 3 + " litros de álcool")
        break;
    default:
        console.log("pneus calibrados com sucesso")


}
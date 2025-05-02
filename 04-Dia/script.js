

let nome = prompt("Qual é o seu nome?")
let idade =prompt("INforme sua idade?")
let temCnh =prompt("Você possuí CNH? s/n")
let temCarro =prompt("Você possuí algum carro?")

if(idade < "18" || temCnh === "n" ){
 console.log(nome + " você não ppode dirigir");
}else if(idade >= 18  && temCnh === "s"  && temCarro === "n" ){
 console.log(nome + ", você pode dirigir, mas não tem um carro");
}else{
 console.log(nome + ", você será motorista");

}
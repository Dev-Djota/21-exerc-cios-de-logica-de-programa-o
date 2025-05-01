let fome = prompt("Você está com fome ? S/N")
let dinheiro =prompt("Você tem dinheiro? S/N")
let restaurante =prompt("restaurante estar aberto? S/N")

if(fome === "N" || dinheiro == "N" ){
 console.log("Hoje a janta será em casa ");
}else if (dinheiro === "S" && restaurante == "S" ){
 console.log("Hoje o jantar será no seu restaurante preferido");
}else {
    console.log("Peça um delivery");
}



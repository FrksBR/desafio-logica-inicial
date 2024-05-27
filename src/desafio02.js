let name = "Frks"
let elo = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Diamante" , "Lendário" , "Imortal"]
let numDeVitorias = 50
let numDeDerrotas = 1
let saldoDePartidas = calcularElo(numDeVitorias, numDeDerrotas)

function calcularElo(numDeVitorias , numDeDerrotas){
    let saldoDePartidas = numDeVitorias - numDeDerrotas    
    return saldoDePartidas
}

if (saldoDePartidas <= 10){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[0]}`)
}
if (saldoDePartidas > 11 && saldoDePartidas < 20){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[1]}`)
}
if (saldoDePartidas > 21 && saldoDePartidas < 50){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[2]}`)
}
if (saldoDePartidas > 51 && saldoDePartidas < 80){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[3]}`)
}
if (saldoDePartidas > 81 && saldoDePartidas < 90){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[4]}`)
}
if (saldoDePartidas > 91 && saldoDePartidas < 100){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[5]}`)
}
if (saldoDePartidas >= 101){
    console.log(`O Herói tem saldo de ${saldoDePartidas} e está no nível ${elo[6]}`)
}

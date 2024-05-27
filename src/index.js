//1️⃣ Desafio Classificador de nível de Herói
//
//**O Que deve ser utilizado**
//
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//
//## Objetivo
//
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//
//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**

let nome = "Frks"
let level = 2020

if (level <1000){
    console.log("Olá " + nome + ".Você está no elo Ferro!")}
if (level >1001 && level <2000){
  console.log("Olá " + nome + ".Você está no elo Bronze!")}
if (level >2001 && level <5000){
  console.log("Olá " + nome + ".Você está no elo Prata!")
}
if (level >5001 && level <7000){
    console.log("Olá " + nome + ". Você está no elo Ouro!")
}
if (level >7001 && level <8000){
    console.log("Olá " + nome + ". Você está no elo Platina!")
}
if (level >8001 && level <9000){
    console.log("Olá " + nome + ". Você está no elo Ascendente!")
}
if (level >9001 && level <10000){
    console.log("Olá" + nome + ". Você está no elo Imortal!")
}
if  (level >=10001){
    console.log("Olá" + nome + ". Você está no Radiante!")
}
console.log("Olá " + nome + ". Você está no elo "+ elo + "!")
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
let level = 2099
let elo = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]

if (level <1000){
    console.log("Olá " + nome + ". Você está no " + elo[0])
}
if (level >1001 && level <2000){
    console.log("Olá " + nome + ". Você está no " + elo[1])
}
if (level >2001 && level <5000){
    console.log("Olá " + nome + ". Você está no " + elo[2])
}
if (level >5001 && level <7000){
    console.log("Olá " + nome + ". Você está no " + elo[3])
}
if (level >7001 && level <8000){
    console.log("Olá " + nome + ". Você está no " + elo[4])
}
if (level >8001 && level <9000){
    console.log("Olá " + nome + ". Você está no " + elo[5])
}
if (level >9001 && level <10000){
    console.log("Olá " + nome + ". Você está no " + elo[6])
}
if  (level >=10001){
    console.log("Olá " + nome + ". Você está no " + elo[7])
}

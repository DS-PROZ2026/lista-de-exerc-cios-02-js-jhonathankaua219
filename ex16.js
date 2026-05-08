const prompt = require('prompt-sync')();
let pessoas = [
    {nome: "Ana", idade: 16},
    {nome: "Jhon" , idade: 16 },
    {nome: "Arthur" , idade: 17 },
    {nome: "Claudio" , idade: 43 },
    {nome: "Leo" , idade: 19 },
];
let soma = 0;
for(let i = 0 ; i < pessoas.length ; i++){
    soma += (pessoas[i].idade)
}
let maior = pessoas[0].idade
pesM = ""
for(let i = 0 ; i < pessoas.length ; i++){
    if(pessoas[i].idade>maior){
        maior = pessoas[i].idade
        pesM = pessoas[i].nome
    
    }
}
console.log(`A média de idade foi ${soma/pessoas.length}`)
console.log(`E a pessoa mais velha foi ${pesM} com ${maior} anos`)
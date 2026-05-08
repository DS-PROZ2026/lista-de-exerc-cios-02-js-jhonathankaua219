const prompt = require ('prompt-sync')();
let Tsensores = []
let soma = 0
let maior = 0 
for(let i = 0 ; i < 6 ; i++){
   let temp = Number (prompt(`Qual a temperatura do ${i+1}° dia ?`))
   Tsensores.push(temp)
    soma += temp
    
}
let sensoresM = 0
for(let i = 0 ; i < Tsensores.length ; i++){
    if(Tsensores[i]>maior){
        maior = Tsensores[i]
    }
    if(Tsensores[i]>35){
        sensoresM+=1
    }
}

console.log(`A temp média é ${soma/Tsensores.length} e a maior foi ${maior} e ${sensoresM} tiveram temperatura maior que 35 `)
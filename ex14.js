const prompt = require ('prompt-sync')();
let caminhoes = []
let soma = 0
for (let i = 0 ; i <5 ; i++){
    let km = Number (prompt(`Qual cosumo em km/l do ${i+1}° caminhão`))
    caminhoes.push(km)
    soma +=km
}
let maior = 0
let menor = caminhoes[0]
for(let i = 0 ; i < caminhoes.length ; i++){
    if(caminhoes[i]>maior){
        maior = caminhoes[i]
    }
    if(caminhoes[i]<menor){
        menor = caminhoes[i]
    }
}
console.log(`A média de KM/L foi de ${soma/caminhoes.length} e o maior foi ${maior} e o menor foi ${menor}`)
const prompt = require ('prompt-sync')();
let manutencao = []
let soma = 0
for (let i = 0 ; i <4 ; i++){
    let valor = Number (prompt(`Qual valor da ${i+1}° manutenção: `))
    manutencao.push(valor)
    soma += valor
}
let maior = 0
for(let i = 0 ; i < manutencao.length ; i++){
    if(manutencao[i]>maior){
        maior = manutencao[i]
    
    }
}
console.log(`O custo total foi ${soma} e o custo médio foi ${soma/manutencao.length} e a mais cara foi ${maior}`)
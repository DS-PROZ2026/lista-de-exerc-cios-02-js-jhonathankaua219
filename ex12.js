const prompt = require ('prompt-sync')();
let litroD = []
for(let i = 0 ; i < 6 ;i++){
    let litro = Number(prompt(`qual a quantidade de litros no ${i+1}° dia: `))
    litroD.push(litro)
}
let maior = 0
let soma = 0
let dia = 1
for(let i = 0 ; i < litroD.length ; i++){
    soma += litroD[i]
    if(litroD[i]>maior){
        maior = litroD[i]
        dia = litroD.length
    }
}
media = soma/litroD.length
console.log(`o gasto total da semana  foi ${soma} litros e a média diaria foi ${media} e o dia com mais gastos foi ${dia} com ${maior} l`)
console.log(soma)

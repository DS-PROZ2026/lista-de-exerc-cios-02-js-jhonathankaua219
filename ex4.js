const prompt = require('prompt-sync')();
x = 1
m = 0
clima = []

for ( let i = 0 ; i < 7 ; i++){
    let tempo = Number(prompt(`qual a temperatura registradsa no ${x}° dia: `))
    clima.push(tempo)
    x+=1
    m+=tempo 
}
let maior = clima[0]
let menor = clima[0]
for(let i = 0 ; i <clima.length ; i++){
        if(clima[i] > maior){
            maior = clima[i];
        }
        if(clima[i]< menor){
            menor = clima[i]
        }
       }
console.log(`A média de temperaturas será ${(m/clima.length).toFixed(2)} e a maior temperatura será ${maior} e a menor ${menor}`)
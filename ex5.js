const prompt = require('prompt-sync')();

modelos = ["Duster", "Creta", "Nivus", "Pulse", "Compass"] 
precos = [110000, 135000, 128000, 105000, 180000]

let valorCliente = prompt("qual o valor do seu orçamento ? ")

for(i = 0 ; i < precos.length ; i++){
   if(precos[i]<=valorCliente){
    console.log(`Você poderá comprar os carros ${modelos[i]} de valor R$ ${precos[i]}`)
   }
    if(valorCliente<precos.length){
    console.log("Que tal olhar nossa seção de seminovos")
    break
   
   }
}



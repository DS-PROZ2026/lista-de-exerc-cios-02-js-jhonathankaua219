const estoque = [
    {produto : "Camiseta",quantidade : 15},
    {produto : "calça",quantidade : 10},
    {produto :"Meia",quantidade : 50}
]
let soma = 0

    estoque.forEach((pro) =>{
         soma = soma+pro.quantidade 
    }) 

console.log(soma)
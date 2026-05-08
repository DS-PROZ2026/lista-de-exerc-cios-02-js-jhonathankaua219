const prompt = require('prompt-sync')();

let atleta = []
let medalha = ["ouro","prata","bronze"]

for(i = 0 ; i <=4 ; i++){
    let nome = prompt("qual o nome dos 5 atletas? ")
    atleta.push(nome)
}

for(let i = 0 ; i < 3 ; i ++){
    console.log(`o jogador ${atleta[i]} ganhou a medalha de ${medalha[i]}`)
}
for(let i = 3 ; i < 5 ; i++){
    console.log(`psrticipante "${atleta[i]}" recebeu medalha de participação `)
}
const prompt = require('prompt-sync')();
itens = ["graveto","carvão","pedra","ouro","diamante","netherite"
]
mochila = []
 for (i = 0 ; i <4 ; i++){
    mochila.push(itens[i])
    console.log(`${mochila[i]} adicionado (a) a mochila`)
 }
 for(i = 4 ; i < 6 ; i++)
    if (mochila.length === 4){
        let ex = prompt("Mochila cheia! deseja descartar o primeiro item para pegar o novo ? s/n  ")
            if(ex === "s"){
               mochila.splice(0,1)

             mochila.push(itens[i]);
             console.log(`você adicionou ${itens[i]} a sua mochila`)
            }
            
            else{
                console.log("você não alterou os itens da mochila")
            }
    }

console.log(`itens finais: ${mochila}`)

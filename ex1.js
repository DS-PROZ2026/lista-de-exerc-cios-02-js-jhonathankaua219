const prompt = require ('prompt-sync')();
const nomeProibido = [
    "Artur","Claudio","Leonardo","Jonathan"
];
let n_Ok = []
for(i = 0 ; i < 3 ; i++){
    let nome = prompt("digite os nomes dos meliantes: ")
    if(nomeProibido.indexOf(nome) != -1){
        console.log(`ALERTA: Segurança acionada para o visitante ${nome}`);
    }else{
        n_Ok.push(nome);
    }
}
console.log(n_Ok);




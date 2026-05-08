const prompt = require ('prompt-sync')();
const nomes = ["Ana", "Pedro", "Ricardo", "Julia", "Marcos"];
let i = 0
let nome = prompt("digite os nomes dos meliantes: ")
while(i < nomes.length){
         if(nome.indexOf("Ricardo") != -1){
        console.log("Usuario encontrado");
        break
}else{
    console.log("Não encontrado")
    break
}
i++
}
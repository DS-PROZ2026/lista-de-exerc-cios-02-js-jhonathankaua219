const caminhoes = [
    {modelo: "volvo",km: 12,revisao: 7},
    {modelo: "scania",km: 6,revisao: 2},
    {modelo: "mercedes-bens",km: 2,revisao: 5},
    {modelo: "iveco",km: 8,revisao: 9},
]
let  frotaManutencao = []
for(let i = 0 ; i <caminhoes.length ; i++){
    if(caminhoes[i].km > 10 || caminhoes[i].revisao>6){
         frotaManutencao.push(caminhoes[i])
    }
}
console.log("Os caminhoes que precisão de manutenção: ",frotaManutencao)
console.log(frotaManutencao)
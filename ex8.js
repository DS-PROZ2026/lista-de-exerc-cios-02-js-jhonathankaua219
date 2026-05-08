const nomesVendedores = ["jubiscreudo","junin","irineu","natsu","teobaldo"]
const totalVendas = [4000,2754,1998,6000,5300] 
let valor = 0
let maior = 0
vendedorMa = ""
let menor = 0
vendedorMe = ""
for(let soma  of totalVendas){
   valor += soma
}
por = valor*0.7
for(let i = 0 ; i < nomesVendedores.length ; i++){
    if(totalVendas[i]>maior){
        maior = totalVendas[i]
        vendedorMa = nomesVendedores[i]

    }
    if(totalVendas[i]<por){
        menor = totalVendas[i]
        vendedorMe = nomesVendedores[i]
    }
}
media = valor/5
console.log(`A média do grupo foi ${media} e o  vendedor que mais vendeu foi ${vendedorMa} que vendeu ${maior} 
    e o abaixo da média foi ${vendedorMe}`)

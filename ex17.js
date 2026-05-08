const viagens = [
    { destino: "Paris", passagem: 4500, hospedagem: 3200 },
    { destino: "Buenos Aires", passagem: 1200, hospedagem: 1500 },
    { destino: "Caldas Novas", passagem: 400, hospedagem: 800 }, // <--- Total < 1000
    { destino: "Tóquio", passagem: 8500, hospedagem: 5000 },
    { destino: "Nova York", passagem: 5200, hospedagem: 4500 },
    { destino: "Lisboa", passagem: 3800, hospedagem: 2800 },
    { destino: "Maragogi", passagem: 900, hospedagem: 1800 },
    { destino: "Roma", passagem: 4100, hospedagem: 3300 },
    { destino: "Santiago", passagem: 1100, hospedagem: 1400 },
    { destino: "Belo Horizonte", passagem: 300, hospedagem: 500 }  // <--- Total < 1000
];
let soma = 0;
let maior = 0;
let destinoCaro = ""
let menos1000 = false
for(let i = 0 ; i < viagens.length ; i++){
    soma += (viagens[i].passagem)
    let maiorValor = viagens[i].passagem+viagens[i].hospedagem

    if(maiorValor>maior){
        maior=maiorValor
        destinoCaro = viagens[i].destino
    }
    if(maiorValor<1000){
        menos1000 = true
    }
}

if(menos1000 == true){
    console.log("tem destino que custa menos que 1000")
}else{
    console.log("Não tem destino que custa menos que 1000")
}
console.log(`A média das passagens foi: ${soma/viagens.length} e a mais cara é ${destinoCaro}`)
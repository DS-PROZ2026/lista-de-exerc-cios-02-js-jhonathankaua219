produtos = ["Monitor", "Mouse", "Teclado", "Cabo HDMI"] 
quantidades = [10,2, 8, 3]

for(i = 0 ; i < produtos.length  ; i++){
    if(quantidades[i] < 5)
        console.log(`Os produtos com menos de 5 unidades são: ${produtos[i]} ${quantidades[i]} `)
    
}

const funcinarios = [
    {nome: "Ana" , salario: 2500},
    {nome: "Pedro" , salario: 4200},
    {nome: "Marcos" , salario: 1800},
    {nome: "Julia" , salario: 3500 },
]
let i = 0;
while(i<funcinarios.length){
    if (funcinarios[i].salario<3000){
        console.log(funcinarios[i].nome)
    }
i++
}


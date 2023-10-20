var idade = 66
    console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log('Voce nao pode votar')
} else if (idade < 18 || idade > 65){
    console.log ('voto opcional')
} else{
    console.log('Voto Obrigatorio')
}
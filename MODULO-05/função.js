function parimpar(n){
    if(n%2 == 0){
        return `Par!`
    }else{
        return `Impar!`
    }
}

let res = parimpar(4)


console.log(`O numero ${res.value} é igual a`, res)
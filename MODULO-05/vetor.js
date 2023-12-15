let valores = [8,1,7,4,2,9]
valores.sort()
/* for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`Buscar o 4 indice, iniciando do 0: ${valores.indexOf(4)} o .sort() nao funciona`)
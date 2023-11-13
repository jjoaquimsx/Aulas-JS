function Contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById(`res`)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        res.style.fontSize = '20px'
    } else {
        res.innerHTML = `<br>Contando: </br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo INVALIDO! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
                res.style.fontSize = `20px`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML = `  ${c} `
                res.style.fontSize = `20px`
            }
        }
        res.innerHTML += ` <br>FIM DA CONTAGEM</br>`
    }
}

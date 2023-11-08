function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Erro, verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src','imgs/Menino.png')
            }else if(idade < 21){
                img.setAttribute('src','imgs/Homem20.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src','imgs/Homem40.png')
            }else{
                //idoso
                img.setAttribute('src','imgs/Homem60.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src','imgs/Menina.png')
            }else if(idade < 21){
                //joven
                img.setAttribute('src','imgs/Mulher20.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src','imgs/Mulher40.png')
            }else{
                //idoso
                img.setAttribute('src','imgs/Mulher60.png')
            }
        }
        res.innerHTML = `<p>Detectamos: ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var mens = document.getElementById('mensage')
    var data = new Date()
    var hora = data.getHours()
    var min = new Date()
    var minutos = min.getMinutes()

    msg.innerHTML = `<h1>Agora sao exatamente ${hora}:${minutos}</h1>` 

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'Manha.png'
        mens.innerText = 'Bom dia'
        document.getElementById('container').style.background = 'linear-gradient(to right, #00416a, #e4e5e6)'
        document.getElementById('container').style.transition = "all 2s linear"
    } else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'tarde.png'
        mens.innerText = 'Boa tarde'
        document.getElementById('container').style.background = 'linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% )'
        document.getElementById('container').style.transition = 'all 2s linear'
    }else{
        //boa noite
        img.src = 'noite.png'
        mens.innerText = 'Boa noite'
        document.getElementById('container').style.background = 'linear-gradient(140deg, rgba(66, 73, 141, 1) 48%, rgba(0, 212, 255, 1) 100%)'
        document.getElementById('container').style.transition = " all 2s linear"
    }
}

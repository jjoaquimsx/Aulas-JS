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
        img.src = 'assets/Manha.png'
        mens.innerText = 'Bom dia'
        document.body.style.background = 'background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);'
    } else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'tarde.png'
        mens.innerText = 'Boa tarde'
        document.body.style.background = 'background-image: linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );'
    }else{
        //boa noite
        img.src = 'noite.png'
        mens.innerText = 'Boa noite'
        document.body.style.background = 'background: linear-gradient(140deg, rgba(66, 73, 141, 1) 48%, rgba(0, 212, 255, 1) 100%);'
    }
}

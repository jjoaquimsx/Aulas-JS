var data = new Date()
var horas = data.getHours
var minutos = data.getMinutes
var sec = data.getSeconds



if(hora < 6){
    console.log(`Agora são exatamente ${hora}: horas`)
    console.log(`Boa madrugada `)
}else if (hora <= 12){
    console.log(`Agora são exatamente ${hora}:${minu} horas`)
    console.log(`Bom dia`)
} else if (hora < 18){
    console.log(`Agora são exatamente ${hora}:${minu} horas`)
    console.log(`Boa tarde`)
}else {
    console.log(`Agora são exatamente ${hora}:${minu} horas`)
    console.log(`Boa noite`)
}
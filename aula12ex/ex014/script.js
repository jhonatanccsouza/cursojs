function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()



if(hora == 0 ){
    msg.innerHTML = `Agora é MEIA-NOITE (${hora}:${min})`
    
} else if(hora == 24){
    msg.innerHTML = `Agora é MEIA-NOITE (${hora}:${min})`
    
} else if(hora == 1){
    msg.innerHTML = `Agora é ${hora}:${min}`
    
} else if (hora == 12){
    msg.innerHTML = `Agora é MEIO-DIA (${hora}:${min})`

}else if(hora > 1 && hora < 24 ){
    msg.innerHTML = `Agora são ${hora}:${min}`
    
}

if (hora > 0 && hora < 5){
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#1E3C40'

} else if(hora >= 5 && hora < 12){
    img.src = 'imagens/manha.jpg'
    document.body.style.background = '#F2C791'
} else if(hora >= 12 && hora <= 18 ){
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#D9B13B'
} else if(hora > 18 && hora < 24){
    img.src = 'imagens/noite.jpg'
    document.body.style.background =    '#0F2226'

} else if(hora == 0 || hora == 24){
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#0F2226'
} else {
    alert('[ERRO] Hora Inválida!')
}



}
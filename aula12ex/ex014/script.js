function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

hora = (hora < 10) ? "0" + hora: hora;

min = (min < 10) ? "0" + min : min;



if(hora == 0 ){
    msg.innerHTML = `<p>Agora é MEIA-NOITE (${hora}:${min})</p>`
    
} else if(hora == 24){
    msg.innerHTML = `<p>Agora é MEIA-NOITE (${hora}:${min})</p>`
    
} else if(hora == 1){
    msg.innerHTML = `<p>Agora é ${hora}:${min}</p>`
    
} else if (hora == 12){
    msg.innerHTML = `<p>Agora é MEIO-DIA (${hora}:${min})</p>`

}else if(hora > 1 && hora < 24 ){
    msg.innerHTML = `<p>Agora são <strong>${hora}:${min}</strong></p>`
    
}

if (hora > 0 && hora < 5){
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#1E3C40'

} else if(hora >= 5 && hora < 12){
    img.src = 'imagens/manha.jpg'
    document.body.style.background = '#F2C791'
} else if(hora >= 12 && hora < 18 ){
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#D9B13B'
} else if(hora >= 18 && hora < 24){
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#0F2226'

} else if(hora == 0 || hora == 24){
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#0F2226'
} else {
    alert('[ERRO] Hora Inválida!')
}



}

setInterval(carregar, 1000);
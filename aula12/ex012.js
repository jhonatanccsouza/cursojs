var agora = new Date()
var hora = agora.getHours()
if (hora == 0 ){
    console.log(`Agora é MEIA-NOITE (${hora} hora)`)
} else if(hora == 24) {
    console.log(`Agora é MEIA-NOITE (${hora} horas)`)

}else if(hora == 1){
    console.log(`Agora é ${hora} hora`)
} else if(hora == 12){
    console.log(`Agora é MEIO-DIA (${hora} horas)`)
}else if(hora > 1 && hora < 24){
    console.log(`Agora são ${hora} horas`)
}

if (hora >= 5 && hora < 12 ){
    console.log('BOM DIA!!!')
} else if (hora >= 12 && hora < 18){
    console.log('BOA TARDE!!!')
} else if (hora >= 18 && hora <= 23){
    console.log('BOA NOITE!!!')

} else if (hora >= 0 || hora == 24 && hora <5){
    console.log('BOA MADRUGADA!!!')
}
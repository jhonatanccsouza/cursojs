function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = 'IDADE Calculada'
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
    }
    
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 3){
            //Criança 0 a 3
            img.setAttribute('src', 'imagens/menino-3.jpg')
        } else if(idade < 10){
            //Criança 7 a 10
            img.setAttribute('src', 'imagens/menino-7.jpg')
        } else if(idade < 19){
            //Adolescente 11 a 19
            img.setAttribute('src', 'imagens/adolescente.jpg')
        } else if(idade < 29){
            //Adulto 20 a 29
            img.setAttribute('src', 'imagens/homem-22.jpg')
        } else if(idade < 50){
            //Adulto 30 a 49
            img.setAttribute('src', 'imagens/homem-40.jpg')
        } else{
            //Idoso
            img.setAttribute('src', 'imagens/homem-idoso.jpg')
        }

    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <=3){
            img.setAttribute('src', 'imagens/menina-1.jpg')
        } else if(idade < 7){
            img.setAttribute('src', 'imagens/menina-3.jpg')
        } else if(idade < 12){
            img.setAttribute('src', 'imagens/menina-7.jpg')
        } else if(idade < 20){
            img.setAttribute('src', 'imagens/adolescente-mulher.jpg')
        } else if(idade < 39){
            img.setAttribute('src', 'imagens/mulher-20.jpg')
        } else if(idade < 55){
            img.setAttribute('src', 'imagens/mulher-40.jpg')
        } else {
            img.setAttribute('src', 'imagens/mulher-idosa.jpg')
        }
    } 

    if(idade == 1 && genero == 'Homem'){
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} ano.`
        res.appendChild(img)
        img.style.borderRadius = '45%'
    } else if(idade > 1 && genero == 'Homem') {
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '45%'
    }

    if(idade == 1 && genero == 'Mulher'){
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma ${genero} com ${idade} ano.`
        res.appendChild(img)
        img.style.borderRadius = '45%'
    } else if(idade > 1 && genero == 'Mulher'){
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.borderRadius = '45%'
    }

    

}
function verificar(){
    let msg = window.document.getElementById('msg')
    let img= window.document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes().toString().padStart(2,'0')
    msg.innerHTML=`Agora são ${hora}:${minutos} horas.`
    if (12<hora && hora<18){
        img.src='imagens/tarde.png'
        document.body.style.background="#CD853F"
    }
    else if (hora>=18 && hora<24){
        img.src='imagens/noite.png'
        document.body.style.background="#191970"
    }else{
        img.src='imagens/dia.png'
        document.body.style.background="#DAA520"
    }
}
function verificar(){
    let dia = new Date()
    let ano = dia.getFullYear()
    let datnas = window.document.getElementById("ndata").value
    let res= window.document.getElementById("res")
    let idade = ano-datnas

    if (datnas==='' || Number(datnas)>ano){
        alert('ERRO! Verifique seus dados.')

    }else{
        let genero= window.document.getElementsByName('radsex')
        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        let sexo=''
        if(genero[0].checked){
            sexo= 'um homem'
            if (idade>=0 && idade<10){
                img.setAttribute('src','img-m-c.png')
            }
            else if (idade<=21){
                img.setAttribute('src','img-m-j.png')
            }
            else if (idade<50){
                img.setAttribute('src','img-m-a.png')
            }    
            else if (idade>=50){
                img.setAttribute('src','img-m-i.png')
            }
        }else{
            sexo= 'uma mulher'
            if (idade>=0 && idade<10){
                img.setAttribute('src','img-fem-c.png')
            }
            else if (idade<=21){
                img.setAttribute('src','img-fem-j.png')
            }
            else if (idade<50){
                img.setAttribute('src','img-fem-a.png')
            }    
            else if (idade>=50){
                img.setAttribute('src','img-fem-i.png')
            }
        }
        res.innerHTML=(`Foi verificado ${sexo} de ${idade} de idade`)
        res.appendChild(img)
    }
}
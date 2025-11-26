function contar(){
    let i = window.document.getElementById('i')
    let f = window.document.getElementById('f')
    let p = window.document.getElementById('p')
    let res = window.document.getElementById('Res')
    if (i.value.length==0 || f.value.length==0 || p.value.length==0){
        alert('ERRO! Verifique seus dados')
        res.innerHTML= ('Impossível contar...')
    }else{
        res.innerHTML= 'Contando: <br>'
        let ini= Number(i.value)
        let fim = Number(f.value)
        let pas= Number(p.value)
        if (pas<=0){
            alert('Impossível contar! Considerando passo como 1')
            pas=1 
        }
         if (ini < fim) {
                    
            for (let c = ini; c <= fim; c += pas) {
                res.innerHTML += `👉 ${c} `
            }
        } else {
            
            for (let c = ini; c >= fim; c -= pas) {
                res.innerHTML += `👉 ${c} `
        }
    }
     res.innerHTML += '🏁'
}
}
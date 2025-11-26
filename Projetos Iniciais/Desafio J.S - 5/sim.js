let n = window.document.getElementById('n')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isNum(n){
   if (Number(n) >=1 && Number(n) <=100){
        return true
   }else{
        return false
   }    
}

function inlista(n, l){
    if (l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}

function add(){
    if (isNum(n.value) && !inlista(n.value, valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('[ERRO] Valor negado ou já presente na lista')
    }
    n.value=''
    n.focus()
}

function finalizar(){
    if (valores.length==0){
        window.alert('Adicione um valor antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma+=valores[pos]
          if(valores[pos]>maior)
            maior=valores[pos]
          if(valores[pos]<menor)
            menor=valores[pos]
          }
        media = soma/tot
          res.innerHTML = ''
        res.innerHTML +=`<p>Tem ${tot} valores na lista</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
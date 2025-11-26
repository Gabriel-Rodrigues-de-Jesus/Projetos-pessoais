function tabuada(){
    let n = window.document.getElementById('n')
    let res = window.document.getElementById('res')
    let num = Number(n.value)
    res.innerHTML =''
    if (n.value.length===0){
        alert('[ERRO]Por favor, digite um número!')
    }else{
    for (let c =1; c<=10; c++){
        let item= document.createElement('option')
        item.text= `${num}x${c}=${num*c}`
        item.value=`tab${c}`
        res.appendChild(item)
    }
}
}
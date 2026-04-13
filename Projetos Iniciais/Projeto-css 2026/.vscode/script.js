let botao = document.querySelector(".botao-gerar");
let endereco = "https://api.groq.com/openai/v1/chat/completions"
let blocoCodigo = document.querySelector(".bloco-codigo");
let resultadoCodigo = document.querySelector(".resultado-codigo");

async function gerarCodigo() {
    let caixaTexto = document.querySelector(".caixa-texto").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate."
                },
                {
                    role: "user",
                    content: caixaTexto
                }

            ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content


    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado
}
botao.addEventListener("click", gerarCodigo);

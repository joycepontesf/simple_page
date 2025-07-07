document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('mensagemBtn')
  const paragrafo = document.getElementById('mensagemTexto')

  botao.addEventListener('click', () => {
    if (paragrafo.style.display === "block") {
      paragrafo.style.display = "none"
    } else {
      paragrafo.textContent = "Obrigada por passar por aqui! :)"
      paragrafo.style.display = "block"
    }
  })
})
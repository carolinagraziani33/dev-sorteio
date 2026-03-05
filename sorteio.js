const botao = document.querySelector(".botao")

function sortear(){

const min = Math.ceil(document.getElementById("min").value)
const max = Math.floor(document.getElementById("max").value)

const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min

document.getElementById("resultado").innerText = numeroSorteado

}

botao.addEventListener("click", sortear)
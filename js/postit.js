var postitElement = document.getElementById("postit")
var divGeral = document.createElement("div")
postitElement.appendChild(divGeral)


var addPostitElement = document.createElement("button")
addPostitElement.innerHTML = "Adicionar Postit"
var inputElement = document.createElement("input")
// var textElement = document.createTextNode(" Adicionar Postit")

divGeral.appendChild(addPostitElement)
divGeral.appendChild(inputElement)
// divGeral.appendChild(textElement)

var deletMessage = document.createElement("p")
var textMessage = document.createTextNode(" Clique duas vezes para remover ")
deletMessage.appendChild(textoMensagem)
addPostitElement.setAttribute('class', 'botao')
addPostitElement.setAttribute('id', 'botaoAdicionar')
addPostitElement.appendChild(textElement)
postitElement.appendChild(addPostitElement)

inputElement.setAttribute("type", 'inputTexto')
postitElement.appendChild(inputElement)
postitElement.appendChild(deletMessage)

addPostitElement.onclick = function () {
    createPostit()
}
boxElement.onclick = function () {
    boxElement.style.bacgroundColor = getRandonColor()
}
boxElement.ondblclick = function () {
    boxElement.style.dysplay = "none"
}
boxElement.style.width = '200px'
boxElement.style.height = '200px'
boxElement.style.bacgroundColor = getRandonColor()
boxElement.style.textt.Align = 'center'
boxElement.appendChild(document.createTextNode(input.value))
boxElement.appendChild(boxElement)

function createPostit() {
    var boxElement = document.createElement('div')
    boxElement.onclick = function () {
        boxElement.style.bacgroundColor = getRandonColor()

    }
}
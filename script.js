let divPai = document.getElementById('pai')
let div = document.getElementById('teste')
let jogo = document.getElementById('jogo')
divPai.appendChild(div)
let btn1 = document.getElementById('botao1')
let btn2 = document.getElementById('botao2')
let btn3 = document.getElementById('botao3')
let nome1 = document.getElementById('jogador1')
let nome2 = document.getElementById('jogador2')
let item1 = document.createElement('p')
let item2 = document.createElement('p')
let lista = document.getElementById('lista')
let botao = document.createElement('button')
botao.setAttribute('class', 'btn btn-primary')
botao.innerText = 'Jogar!'
botao.onclick = function () {
    jogar()
}
jogo.style.display = 'none'

function add() {
    if (nome1.value && nome2.value) {
        item1.innerText = 'Jogador 1: ' + (nome1).value
        item2.innerText = 'Jogador 2: ' + (nome2).value
        div.appendChild(item1)
        div.appendChild(item2)
        div.appendChild(botao)
    } else {
        alert('Digite os nomes dos jogadores!')
    }
    // nome1.value = ''
    // nome2.value = ''
}

function jogar() {
    divPai.style.display = 'none';
    jogo.style.display = 'block'
}
let soma1 = 0
var jogadorAtual = nome2.value
function somar(valor) {
    soma1 += valor
    if (soma1 < 21) {
        if (jogadorAtual === nome2.value) {
            jogadorAtual = nome1.value
        } else {
            jogadorAtual = nome2.value
        }
        // alert(jogadorAtual)
        if (soma1 !== 1) {
            return document.getElementById('valorAtual').innerHTML = `Jogador ${jogadorAtual} fez até o momento: ${soma1} pontos. Vez Proximo Jogador`
        } else {
            return document.getElementById('valorAtual').innerHTML = `Jogador ${jogadorAtual} fez até o momento: ${soma1} ponto. Vez Proximo Jogador`
        }
    } else {
        // alert("Jogo finalizado!")
        if (jogadorAtual === 1) {
            document.getElementById('valorAtual').innerHTML = `O vencedor é Jogador ${nome1.value}, com ${soma1} pontos`
        } else {
            if (soma1 > 21) {
                alert('Seu burro! Perdeu')
                document.getElementById('valorAtual').innerHTML = `O perdedor é Jogador ${nome1.value}, com ${soma1} pontos`
            }else {
                document.getElementById('valorAtual').innerHTML = `O Vencedor é Jogador ${nome2.value}, com ${soma1} pontos`
            } 
                btn1.setAttribute("disabled", 'true')
                btn2.setAttribute("disabled", 'true')
                btn3.setAttribute("disabled", 'true')
        }
        // btn1.setAttribute('disabled')

    }
}

// function somar(valor) {
//     let soma = 0
//     if (soma < 21) {
//         let a = document.getElementById('valorAtual').innerHTML = soma = + valor
//     }
// }

function calculo(a, b) {
    return a + b
}
calculo(1, 2)

var calculo1 = calculo(10, 50) + 5
console.log(calculo1)

var atualizar
function digitar(c) {
    return " A variavel atualizada é " + (atualizar = c)
}
digitar(50)
// 50
function testa(a, b, c) {
    if (a == undefined | b == undefined | c == undefined) {
        return "digite os valores"
    }

    return (a * b * c) + 2
}
testa(10, 30, 50)
//1502

function estudar(a, b, c) {
    if ((a == undefined) && (b == undefined) && (c == undefined)) {
        return false
    } else {
        if ((b == undefined) && (c == undefined)) {
            return a

        } else {
            if (c == undefined) {
                return a + b
            } else {
                return (a + b) / c
            }
        }
    }
}

estudar(100, 300, 900)
estudar(600, 300)
estudar(500)





    
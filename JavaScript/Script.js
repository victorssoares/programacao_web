// alert("testando essa bagaça.")

var usuario = "victor"
var senha = "1234"

var app = document.getElementById("app")

var inputlogin= document.createElement("input")
inputlogin.setAttribute("type","text")
inputlogin.setAttribute("placeholder" , " Insira seu Nome")
inputlogin.setAttribute("id","usuario")
app.appendChild(inputlogin)


var inputsenha = document.createElement("input")
inputsenha.setAttribute("type","text")
inputsenha.setAttribute("placeholder" , " Insira sua senha")
inputsenha.setAttribute("id","Entrar")
app.appendChild(inputsenha)

var enviarbt = document.createElement("button")
enviarbt.innerHTML = "clique aqui"
enviarbt.setAttribute("onclick","checarlogin()")
app.appendChild(enviarbt)

function checarlogin(){
    if((inputlogin.value === usuario) && (senha === inputsenha.value)) {
        alert(" Login efetuado com sucesso.")
    } else{ 
        alert(" Dados Invalidos.")
    }
}

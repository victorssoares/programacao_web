var qualquer = {}

var pessoa = {
    nome: 'victor',
    sobrenome: 'soares',
    sexo: 'masculino',
    idade: 34,
    altura: 1.82,
    peso: 86,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function () {
        this.idade++

    },
    andar: function (x) {
        this.caminhouQuantosMetros = this.caminhouQuantosMetros + x
        this.andando = true
    },
    parar: function () {
        this.andando = false
    },
    nomeCompleto: function () {
        return "Olá! meu nome é: " + this.nome + " " + this.sobrenome + "!"
    },//"Olá! meu nome é: victor soares!"
    mostrarIdade: function () {
        return "ola, eu tenho " + this.idade + "anos."
    },//"ola, eu tenho 34anos."
    mostrarPeso: function () {
        return "ola, eu tenho " + this.peso + "kg."
    },//"ola, eu tenho 86kg."
    mostrarAltura: function () {
        return "ola, eu tenho " + this.altura + " m."
        //"ola, eu tenho 1.82 m."
    }
}

for (i = 20; i < 23; i++) {
    pessoa.fazerAniversario()
    pessoa.andar(i)
}
        //nome: "victor", sobrenome: "soares", sexo: "masculino", idade: 37, altura: 1.82, …}

        //"ola, eu tenho 37anos."
    if(pessoa.andando = true )
    return " a pessoa ainda esta aandando"
    else{
        return "a pessoa esta parada."
    }

    pessoa.parar() 
    
// a pessoa ainda esta aandando
// a pessoa esta parada
/*


/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Se a pessoa ainda está andando, faça-a parar.
*/
?

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
?

// Agora, apresente-se ;)

const role = [
    "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
];

const validacao = (inputNomes) => {
    if(inputNomes === '') throw 'O campo está vazio'
    if(typeof inputNomes !== "string") throw 'Tipo inválida'
}

const procuraNome = inputNomes => role.find((fulanoQueTavaNoRole, i) => {
    // procura o primeiro elemento no array que é verdadeiro
    // de acordo com a operação lógica que você passar
    return inputNomes.toLowerCase() === fulanoQueTavaNoRole.toLowerCase()
})

const estavaNoRole = role.includes(inputNomes);
// const validacao = validacao(inputNomes);

const exibirNome = inputNomes => {
    const estavaNoRole = procuraNome(inputNomes)

    if(estavaNoRole){
        document.getElementById("resposta").innerHTML = `${inputNomes} estava no rolê`
        return
    }
    // } else {
    //     document.getElementById("resposta").innerHTML = `${inputNomes} não estava no rolê`
    // };
    throw `${inputNomes} não estava no rolê`
}

document.getElementById("campoNome").addEventListener("submit", function(event){
    event.preventDefault() //tira a ação padrão de submit. limpamos o nosso status.
    const inputNomes = document.getElementById("inputNomes").value;
    document.getElementById("resposta").innerHTML = ""

    try{
        validacao(estavaNoRole)
        exibirNome(estavaNoRole)
        console.log("sucesso")
    }catch(erro){
        // caso deu algum problema enquanto as funções do bloco try era executado, irá cair aqui no catch e vamos imprimir o erro
        // console.log("ops!")
        document.getElementById("resposta").innerHTML = erro
    }
});
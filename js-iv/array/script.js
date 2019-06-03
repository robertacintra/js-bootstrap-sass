const role = [
    "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
];

document.getElementById("campoNome").addEventListener("submit", function(event){
    event.preventDefault() //tira a ação padrão de submit. limpamos o nosso status.
    const inputNomes = document.getElementById("inputNomes").value;
    const estavaNoRole = role.includes(inputNomes);
    // const validacao = validacao(inputNomes);

    if(estavaNoRole){
        document.getElementById("resposta").innerHTML = `${inputNomes} estava no rolê`
    } else {
        document.getElementById("resposta").innerHTML = `${inputNomes} não estava no rolê`
    };

});

// function validacao(inputNomes){
//     if (inputNomes === '') return 'O campo está vazio'
// }
const cep = document.getElementById("cep");

cep.addEventListener("focusout", () =>{
    console.log("FOCUS OUT")

    let cepVal = cep.value

    fetch(`https://viacep.com.br/ws/${cepVal}/json`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        console.log(data.cep)
        document.getElementById("uf").value = data.uf;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("localidade").value = data.localidade;
        document.getElementById("logradouro").value = data.logradouro;
    })
    .catch((erro)=>{
        console.log(erro)
    })
})

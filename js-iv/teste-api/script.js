const cep = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

const exibeResultado = objeto => {
    let endereco = `
    <div>
        <p>cep: ${objeto.cep}</p>
        <p>logradouro: ${objeto.logradouro}</p>
        <p>complemento: ${objeto.complemento}</p>
        <p>bairro: ${objeto.bairro}</p>
        <p>localidade: ${objeto.localidade}</p>
        <p>uf: ${objeto.uf}</p>
    </div>
    `
    document.getElementById("exibe-endereco").innerHTML = endereco
}

const getData = url => {
    return new Promise((resolve, reject) => {
    
    })
}

const getData = (cep) => {
    const requisicao = new XMLHttpRequest()
    requisicao.open("GET", `https://viacep.com.br/ws/${cep}/json/`)
    //if(requisicao.status !== 4)
    //console.log({requisicao})
    requisicao.send()
    requisicao.onload = function() {
        if(requisicao.status === 200) {
            //console.log(requisicao.responseText)
            const resposta = JSON.parse(requisicao.responseText)
            exibeResultado(resposta)
        }
    }
}

cep.addEventListener("blur", () => {
    getData(cep.value)
})

    cep.value = requisicao.cep
    logradouroInput = requisicao.logradouro
    complementoInput = requisicao.complemento
    bairroInput = requisicao.bairro
    localidadeInput = requisicao.localidade
    ufInput = requisicao.uf
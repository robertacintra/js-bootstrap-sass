class Botao {
    constructor(cor, tamanho, texto, icone){
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
        this.icone = icone
    }

    desenhaBotao(local){
        const novoBotaoNoDom = document.createElement('button')
        novoBotaoNoDom.setAttribute("class", `${this.cor} ${this.tamanho}`)

        if(this.icone){
            const tagIcone = document.createElement("i")
            tagIcone.setAttribute("class", `fas ${this.icone}`)
            novoBotaoNoDom.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotaoNoDom.appendChild(text)
        } else {
        novoBotaoNoDom.innerHTML = this.texto
        }
        document.getElementById("buttons-section").appendChild(novoBotaoNoDom)
    }
}

const botaoRoxo = new Botao('roxo', 'grande', 'default')
botaoRoxo.desenhaBotao()

const botaoRoxoI = new Botao('roxo', 'grande', 'default', 'fa-plus-circle')
botaoRoxoI.desenhaBotao()

const botaoLilas = new Botao('lilas', 'grande', 'default')
botaoLilas.desenhaBotao()

const botaoTrans = new Botao ('transparente', 'grande', 'default')
botaoTrans.desenhaBotao()

const botaoRoxoDis = new Botao('roxo-disabled', 'grande', 'disabled')
botaoRoxoDis.desenhaBotao()


class Botao {
    constructor(cor, tamanho, texto){
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
    }

    desenhaBotao(local){
        const novoBotaoNoDom = document.createElement('button')
        novoBotaoNoDom.setAttribute("class", `${this.cor} ${this.tamanho}`)
        novoBotaoNoDom.innerHTML = this.texto
        document.getElementById("buttons-section").appendChild(novoBotaoNoDom)
        console.log(novoBotaoNoDom)
    }
}

const botaoRoxo = new Botao('roxo', 'grande', 'default')
botaoRoxo.desenhaBotao()

const botaoLilas = new Botao('lilas', 'grande', 'default')
botaoLilas.desenhaBotao()

const botaoTrans = new Botao ('transparente', 'grande', 'default')
botaoTrans.desenhaBotao()

const botaoRoxoDis = new Botao('roxo-disabled', 'grande', 'disabled')
botaoRoxoDis.desenhaBotao()
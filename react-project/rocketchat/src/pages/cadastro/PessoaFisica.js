import React from 'react'

export default class PessoaFisica extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeSobrenome: {
                valor: '',
                erro: ''
            },
            numeroCpf: {
                valor: '',
                erro: ''
            },
            dataNascimento: {
                valor: '',
                erro: ''
            },
            usuarioEmail: {
                valor: '',
                erro: ''
            },
            usuarioSenha: {
                valor: '',
                erro: ''
            },
        }
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {
        this.setState({
            [nomeDoInput]: {
                valor: valorDoInput,
                erro: erro
            }
        })
    }
    
    render(){
        return(
            <div className='pagina'>
            <h2>Cadastro Pessoa Física</h2>
            <form className="formulario" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="nomeSobrenome">Nome Completo:</label>
                    <input className="campo" type="text" placeholder="Nome" id="nomeSobrenome" value={this.state.nomeSobrenome} name="nomeSobrenome" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="numeroCpf">CPF:</label>
                    <input className="campo" type="text" placeholder="000.000.000-00" id="numeroCpf" value={this.state.numeroCpf} name="numeroCpf" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input className="campo" type="text" placeholder="dd/mm/aaaa" id="dataNascimento" value={this.state.dataDeNascimento} name="dataNascimento" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="usuarioEmail">E-mail:</label>
                    <input className="campo" type="text" placeholder="seuemail@email.com" id="usuarioEmail" value={this.state.usuarioEmail} name="usuarioEmail" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="usuarioSenha">Senha:</label>
                    <input className="campo" type="password" placeholder="*******" id="usuarioSenha" value={this.state.usuarioSenha} name="usuarioSenha" onChange={this.handleChange}/>
                </div>
            </form>


            </div>
        )
    }
}
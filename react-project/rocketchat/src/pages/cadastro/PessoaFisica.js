import React from 'react';
import Grupo from '../../components/formulario/Grupo';
import BtnSubmit from '../../components/formulario/BtnSubmit';

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
    
    estaDesabilitado = () => {
        // if(!this.state.nomeSobrenome.valor || this.state.nomeSobrenome.erro || !this.state.numeroCpf.valor || this.state.numeroCpf.erro || !this.state.dataNascimento.valor || this.state.dataNascimento.erro || !this.state.email.valor || this.state.email.erro || !this.state.senha.valor || this.state.senha.erro) {
        //     return true
        // } else {
        //     return false
        // }
        const {nomeSobrenome, numeroCpf, dataNascimento, usuarioEmail, usuarioSenha} = this.state
        if (!nomeSobrenome.valor || nomeSobrenome.erro || !numeroCpf || numeroCpf.erro || !dataNascimento || dataNascimento.erro || !usuarioEmail || usuarioEmail.erro || !usuarioSenha || usuarioSenha.erro) {
            return true
        } else {
            return false
        }
    }

    render(){
        const desabilitado = this.estaDesabilitado()
        return(
            <div className='pagina'>
                <h2>Cadastro Pessoa Fisica </h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <Grupo erro={this.state.nomeSobrenome.erro}>
                        <Grupo.Legenda htmlForLegenda="nomeSobrenome">
                            Nome Completo:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            placeholder="Nome" 
                            id="nomeSobrenome"
                            type="text" 
                            value={this.state.nomeSobrenome.valor}
                            name="nomeSobrenome" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.numeroCpf.erro}>
                        <Grupo.Legenda htmlForLegenda="numeroCpf">
                            CPF:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            type="text" 
                            placeholder="000.000.000-00" id="numeroCpf" 
                            value={this.state.numeroCpf.valor} name="numeroCpf" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.dataNascimento.erro}>
                        <Grupo.Legenda htmlForLegenda="dataNascimento">
                            Data de Nascimento:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            type="text" 
                            placeholder="00/00/00" id="dataNascimento" 
                            value={this.state.dataNascimento.valor} name="dataNascimento" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.usuarioEmail.erro}>
                        <Grupo.Legenda htmlForLegenda="email">
                            Email:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true} 
                            type="email" 
                            placeholder="email" 
                            id="email" 
                            value={this.state.usuarioEmail.valor} name="email" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <Grupo erro={this.state.usuarioSenha.erro}>
                        <Grupo.Legenda htmlForLegenda="senha">
                            Senha:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            required={true}
                            type="password" 
                            placeholder="senha" 
                            id="senha" 
                            value={this.state.usuarioSenha.valor} 
                            name="senha" 
                            onChange={this.handleChange}
                        />
                    </Grupo>
                    <BtnSubmit desabilitado={desabilitado} acaoBotao={this.handleSubmit} className='botao'>
                        Enviar
                    </BtnSubmit>    
            </form>
            </div>
        )
    }
}
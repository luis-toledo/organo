import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
    
    const times = [
        'Programadores',
        'Designers',
        'Suporte em TI',
        'UX Designer'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    valor = {nome}  
                    aoAlterado = {valor => setNome(valor)}
                    obrigatorio = {true} 
                    label = "Nome"   
                    placeholder ="Digite seu nome"
                />
                <CampoTexto
                    valor = {cargo} 
                    aoAlterado = {valor => setCargo(valor)}
                    obrigatorio = {true} 
                    label = "Cargo"  
                    placeholder = "Digite seu cargo"
                />
                <CampoTexto
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)} 
                    obrigatorio = {true} 
                    label = "Imagem" 
                    placeholder = "Informe o endereço da imagem"
                /> 
                <ListaSuspensa
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                    obrigatorio={true} 
                    label="Time" 
                    itens ={times}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
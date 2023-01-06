import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../../api";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import { AlertDanger, AlertSucesso, Form, H1 } from "../../components/UI";
import { isEmail } from "../../components/Util";
import { Botoes, Section } from "./UI";

export default function NovoUsuario() {
    
    const [data, setData] = useState(null);
    const [sucesso, setSucesso] = useState("");
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [validacaoNome, setValidacaoNome] = useState("");
    const [validacaoEmail, setValidacaoEmail] = useState("");
    const [validacaoSenha, setValidacaoSenha] = useState("");
    const [validacaoConfirmarSenha, setValidacaoConfirmarSenha] = useState("");

    function aoConfirmar(e) {
        
        e.preventDefault();

        setSucesso("");
        setError(null);

        setValidacaoNome("");
        setValidacaoEmail("");
        setValidacaoSenha("");
        setValidacaoConfirmarSenha("");
              
        if((nome?.length < 3) || !isEmail(email) || (senha?.length < 6) || (senha !== confirmarSenha)) {
            
            if(nome?.length < 3) {
                setValidacaoNome("O Nome deve ter no mínimo 3 caracteres!");
            }
            
            if(!isEmail(email)) {
                setValidacaoEmail("O E-mail informado é inválido!");
            }
    
            if(senha?.length < 6) {
                setValidacaoSenha("A Senha deve ter no mínimo 6 caracteres!");
            }

            if(senha !== confirmarSenha) {
                setValidacaoConfirmarSenha("A Confirmação de Senha deve ser igual a Senha!");
            }
            
            return;
        }

        const body = {
            nome: nome,
            email: email,
            senha: senha,
            confirmarSenha: confirmarSenha
        }

        post("usuario/novo-usuario/", body, setData, setError, setIsFetching);

    }

    useEffect(() => {
        
        if(data) {
            
            setSucesso("Foi enviado para o e-mail um link para confirmação do cadastro.");
    
            setNome("");
            setEmail("");
            setSenha("");
            setConfirmarSenha("");
        }

    },[data]);
    
    return (
        <Section>
            <Form onSubmit={ aoConfirmar }>
                <H1>Novo Usuário</H1>
                { sucesso && <AlertSucesso>{ sucesso }</AlertSucesso> }
                { error && <AlertDanger>{ error?.mensagem }</AlertDanger> }
                <CampoTexto 
                    type="text"
                    label="Nome" 
                    name="nome" 
                    placeholder="Informe o nome completo"
                    obrigatorio={ true } 
                    valor={ nome }
                    aoAlterado={ valor => setNome(valor) }
                    error={ validacaoNome } />
                <CampoTexto 
                    type="email"
                    label="Email" 
                    name="email" 
                    placeholder="Informe o e-mail"
                    obrigatorio={ true } 
                    valor={ email }
                    aoAlterado={ valor => setEmail(valor) }
                    error={ validacaoEmail } />
                <CampoTexto 
                    type="password"
                    label="Senha" 
                    name="senha" 
                    placeholder="Informe a senha" 
                    obrigatorio={ true } 
                    valor={ senha }
                    aoAlterado={valor => setSenha(valor)} 
                    error={ validacaoSenha }/>
                <CampoTexto 
                    type="password"
                    label="Confirmar Senha" 
                    name="confirmarSenha" 
                    placeholder="Informe a senha novamente" 
                    obrigatorio={ true } 
                    valor={ confirmarSenha }
                    aoAlterado={valor => setConfirmarSenha(valor)} 
                    error={ validacaoConfirmarSenha }/>
                <Botoes>
                    <Botao disabled={ isFetching }>
                        Confirmar
                    </Botao>
                    <Link to="/">
                        <Botao>
                            Ir para Login
                        </Botao>
                    </Link>
                </Botoes>
            </Form>
        </Section>
    )
}
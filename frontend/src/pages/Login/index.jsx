import { useEffect } from "react";
import { useState } from "react";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import { H1, AlertDanger, Form } from "../../components/UI";
import { Section, Links, Span } from "./UI";
import { Link, useNavigate } from "react-router-dom";

import { post } from "../../api";
import { isEmail } from "../../components/Util";

export default function Login() {

    const navigate = useNavigate();
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const [email, setEmail] = useState("");
    const [validacaoEmail, setValidacaoEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [validacaoSenha, setValidacaoSenha] = useState("");

    useEffect(() => {
        if(localStorage.getItem('access_token')) {
            navigate("/compras");
        } else if(data) {
            localStorage.setItem('usuario', JSON.stringify({ nome: data?.nome, email: data?.email }));
            localStorage.setItem('access_token', JSON.stringify(data?.token));
            navigate("/compras");
        }
    }, [data]);

    function aoLogin(e) {
        
        e.preventDefault();

        setValidacaoEmail("");
        setValidacaoSenha("");
              
        if(!isEmail(email) || (senha?.length < 6)) {
            if(!isEmail(email)) {
                setValidacaoEmail("O e-mail informado é inválido!");
            }
    
            if(senha?.length < 6) {
                setValidacaoSenha("Senha deve ter no mínimo 6 caracteres!");
            }

            return;
        }

        const body = {
            email: email,
            senha: senha   
        };  

        post("usuario/login/", body, setData, setError, setIsFetching);
    }

    return (
        <Section>
            <Form onSubmit={ aoLogin }>
                <H1>Login</H1>
                { error && <AlertDanger>{ error?.mensagem }</AlertDanger> }
                <CampoTexto 
                    type="text"
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
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)} 
                    error={ validacaoSenha }/>
                <Links>
                    <Link to="/esqueceu-senha">
                        <Span>Esqueceu a senha?</Span>
                    </Link>
                    <Link to="/novo-usuario">
                        <Span>Cadastre-se!</Span>
                    </Link>
                </Links>
                <Botao disabled={ isFetching }>
                    Confirmar
                </Botao>
            </Form>
        </Section>
    )
}
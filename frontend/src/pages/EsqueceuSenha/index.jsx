import { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../../api";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import { AlertDanger, AlertSucesso, H1, Form } from "../../components/UI";
import { isEmail } from "../../components/Util";
import { Botoes, Section } from "./UI";

export default function EsqueceuSenha() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const [email, setEmail] = useState("");
    const [validacaoEmail, setValidacaoEmail] = useState("");

    function aoConfirmar(e) {
        
        e.preventDefault();

        setValidacaoEmail("");
              
            if(!isEmail(email)) {
                setValidacaoEmail("O e-mail informado é inválido!");
                return;
            }

        post("usuario/esqueceu-senha/", { email: email }, setData, setError, setIsFetching);
    }

    return (
        <Section>
            <Form onSubmit={ aoConfirmar }>
                <H1>Resetar Senha</H1>
                { data && <AlertSucesso>{ data?.mensagem }</AlertSucesso> }
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
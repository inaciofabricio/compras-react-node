import Label from "../Label";
import { formatter } from "../Util";
import { Alert, Grupo, Input } from "./UI";

import './UI/CampoTexto.css'

export default function CampoTexto(props) {

    const aoDigitado = (evento) => {
        props.aoAlterado( evento.target.value );
    }
    
    const mascarar = (evento) => {
        if(props.type === "decimal" && evento.target.value) {
            props.aoAlterado( formatter.format(evento.target.value.replace(",",".")) );
        } 
    }

    const aoPreciosarTecla = (evento) => { 
        if ((props.type === "decimal" || props.type === "int") && !/^[0-9,\b]+$/.test(evento.key)) {
            evento.preventDefault();
        }
    }

    return (
        <Grupo>
            <Label>{ props?.label }</Label>
            <Input 
                type={ props?.type } 
                placeholder={ props?.placeholder } 
                value={ props?.valor } 
                onChange={ aoDigitado } 
                onBlur={ mascarar } 
                required={ props?.obrigatorio }
                disabled={ props?.desabilitar } 
                onKeyPress={ aoPreciosarTecla }/>
                { props?.error && <Alert>{ props?.error }</Alert> }
        </Grupo>
    )
}
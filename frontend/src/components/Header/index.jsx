import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";
import { ImExit } from "react-icons/im";
// BiExit
// ImExit

import { BIconTitulo, Section, Titulo, BUsuarioSair, Usuario, Button } from "./UI";
import { isRotaPublica } from "../Util";

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location?.pathname;

    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        setUsuario(JSON.parse(localStorage.getItem('usuario')));
    }, [pathname]);

    const sair = (e) => {
        e.preventDefault();
        localStorage.removeItem("usuario");
        localStorage.removeItem("access_token");
        navigate("/");
    }

    return (
        <>
            {
                (!isRotaPublica(pathname)) && 
                <Section>
                    <BIconTitulo>
                        <BsCardChecklist size={50}/>
                        <Titulo>Controle de Compras</Titulo>                    
                    </BIconTitulo>
                    <BUsuarioSair>
                        <Usuario>{ usuario?.nome }</Usuario>
                        <Button onClick={(e) => sair(e)}>
                            Sair
                            <ImExit/>
                        </Button>
                    </BUsuarioSair>
                </Section>
            }
        </>
        
    )
}
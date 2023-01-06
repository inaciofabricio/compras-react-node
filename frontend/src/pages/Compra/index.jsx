import { useState } from "react";
import { useParams } from "react-router-dom";

import Formulario from "../../components/Formulario";
import ListaSuspensa from "../../components/ListaSuspensa";
import TabelaCompra from "../../components/TabelaCompra";
import { H2 } from "../../components/UI";
import useApi from "../../hooks/useApi";
// import useGetItensCompraId from "../../hooks/useGetItensCompraId";
import { Lista, Local, Section } from "./UI";

export default function Compra() {

    const { id } = useParams();

    const [local, setLocal] = useState();

    const {data: locais, error: erroLocais, isFetching: isFetchingLocais } = useApi("local/");

    return (
        <>
            <Local>
                <ListaSuspensa 
                    label="Local da Compra" 
                    name="local" 
                    itens={ locais } 
                    obrigatorio={ true } 
                    valor={ local }
                    aoAlterado={ valor => { setLocal(valor) } } />
            </Local>
            <Section>
                <Formulario id={ id }/>
                <Lista>
                    <H2>Lista de Itens</H2>
                    {/* <TabelaCompra dados={itens} /> */}
                </Lista>
            </Section>
        </>
    )
}
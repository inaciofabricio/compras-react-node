import { useEffect, useState } from "react";
import { v4 as novoId } from 'uuid';

import { formatter, parseNumber } from "../Util";

import useGetCache from "../../hooks/useGetCache"; 
import useSetCache from "../../hooks/useSetCache"; 

import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

import { H2 } from "../UI";
import { Form, Section } from "./UI";
import useApi from "../../hooks/useApi";
import useGetCompraNaoFinalizada from "../../hooks/useGetCompraNaoFinalizada";
import useGetComprasID from "../../hooks/useGetComprasId";
import useGetItensCompraId from "../../hooks/useGetItensCompraId";

export default function Formulario({ id }) {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valorTotalItem, setValorTotalItem] = useState("");

    const categorias = ["Bebidas", "Alimentação", "Limpeza"];

    const { data: compra, error, isFetching } = useGetComprasID(id);
   

    if(isFetching) {
        console.log(compra);
    }  
    
    const aoSalvar = (evento) => {
        
        evento.preventDefault();
        
        console.log({
            id: novoId(),
            codigo: codigo,
            nome: nome,
            categoria: categoria,
            valorUnitario: parseNumber(valorUnitario),
            quantidade: parseNumber(quantidade),
            valorTotalItem: parseNumber(valorTotalItem)
        });

        setCodigo("");
        setNome("");
        setCategoria("");
        setValorUnitario("");
        setQuantidade("");
        setValorTotalItem("");
    }

    const verificaValorTotalItem = () => {
        if(valorUnitario && quantidade) {
            const v = parseNumber(valorUnitario);
            const q = parseNumber(quantidade);
            const vt = formatter.format(v * q) ;
            setValorTotalItem(vt);
        }
    }

    return (
        <Section>
            <H2>Formulário</H2>
            <Form onSubmit={ aoSalvar }>

                <CampoTexto 
                    type="text"
                    label="Código" 
                    name="codigo" 
                    placeholder="Preencha o código do produto"
                    obrigatorio={ true } 
                    valor={ codigo }
                    aoAlterado={ valor => setCodigo(valor) } />

                <CampoTexto 
                    type="text"
                    label="Nome" 
                    name="nome" 
                    placeholder="Preencha o nome do produto" 
                    obrigatorio={true} 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />

                <ListaSuspensa 
                    label="Categoria" 
                    name="categoria" 
                    itens={ categorias } 
                    obrigatorio={ true } 
                    valor={ categoria }
                    aoAlterado={ valor => setCategoria(valor) } />

                <CampoTexto 
                    type="decimal"
                    label="Valor Unitário (R$)" 
                    name="valor-unitario" 
                    placeholder="0,00" 
                    obrigatorio={ true } 
                    valor={ valorUnitario }
                    aoAlterado={ valor => { setValorUnitario(valor); verificaValorTotalItem() }} />

                <CampoTexto 
                    type="decimal"
                    label="Quantidade" 
                    name="quantidade" 
                    placeholder="0,00" 
                    obrigatorio={ true } 
                    valor={ quantidade }
                    aoAlterado={ valor =>  { setQuantidade(valor); verificaValorTotalItem() }} />

                <CampoTexto 
                    type="decimal"
                    label="Valor Total do Item (R$)" 
                    name="valor-total-item" 
                    placeholder="0,00" 
                    desabilitar={ true } 
                    obrigatorio={ true } 
                    valor={ valorTotalItem } />

                <Botao>
                    Incluir
                </Botao>
            </Form>
        </Section>
    )
}
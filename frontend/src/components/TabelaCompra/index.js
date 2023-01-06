import { Link } from "react-router-dom";
import { Linha, Cabecalho, ItemLinha, ItemCabecalho, Section, Button } from "./UI";

export default function TabelaCompra(props) {

    return (
        <Section>
            <Cabecalho>
                <ItemCabecalho fb={ 10 }>Código</ItemCabecalho>
                <ItemCabecalho fb={ 30 }>Produto</ItemCabecalho>
                <ItemCabecalho fb={ 10 }>V. Unitario</ItemCabecalho>
                <ItemCabecalho fb={ 10 }>Quantidade</ItemCabecalho>
                <ItemCabecalho fb={ 10 }>V Total</ItemCabecalho>
            </Cabecalho>
            {
                props?.dados?.map((item, i) => {
                    return (
                        <Linha key={ i }>
                            <ItemLinha fb={ 10 }>{ item.codigo }</ItemLinha>  
                            <ItemLinha fb={ 30 }>{ item.produto.nome }</ItemLinha>  
                            <ItemLinha fb={ 10 }>{ item.valorunitario }</ItemLinha>  
                            <ItemLinha fb={ 10 }>{ item.quantidade }</ItemLinha>  
                            <ItemLinha fb={ 10 }>{ item.valortotal }</ItemLinha>  
                            {/* <ItemLinha fb={ 25 }>
                                <Button>Editar</Button>
                            </ItemLinha>   */}
                        </Linha>
                    )
                })
            }
        </Section>
    )
}


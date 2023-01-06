import { Link } from "react-router-dom";
import { Linha, Cabecalho, ItemLinha, ItemCabecalho, Section, Button } from "./UI";

export default function TabelaHome(props) {

    return (
        <Section>
            <Cabecalho>
                <ItemCabecalho fb={ 15 }>#</ItemCabecalho>
                <ItemCabecalho fb={ 60 }>Local</ItemCabecalho>
                <ItemCabecalho fb={ 25 }>Ação</ItemCabecalho>
            </Cabecalho>
            {
                props?.dados.map((item, i) => {
                    return (
                        <Linha key={ i }>
                            <ItemLinha fb={ 15 }>{ item.id }</ItemLinha>  
                            <ItemLinha fb={ 60 }>{ item.lojas.nome }</ItemLinha>  
                            <ItemLinha fb={ 25 }>
                                <Link to={`/compra/${item.id}`}>
                                    <Button>Editar</Button>
                                </Link>
                            </ItemLinha>  
                        </Linha>
                    )
                })
            }
        </Section>
    )
}


// import TabelaHome from "../../components/TabelaHome";
// import { H2 } from "../../components/UI";
// import useGetCompras from "../../hooks/useGetCompras";
import {  Section } from "./UI";

export default function Compras() {

    // const { data: compras, error, isFetching } = useGetCompras();

    // let finalizadas = [];
    // let naoFinalizadas = [];

    // if (!isFetching) {
        
    //     finalizadas = compras
    //         .filter((compra) => { 
    //             return compra.finalizada === 1 
    //         })

    //     naoFinalizadas = compras
    //         .filter((compra) => { 
    //             return compra.finalizada === 0 
    //         })
    // }

    return (
        <Section>
            compras
            {/* <Lista>
                <H2>Finalizadas</H2>
                <TabelaHome dados={ finalizadas } />
            </Lista>
            <Lista>
                <H2>Não Finalizadas</H2>
                <TabelaHome dados={ naoFinalizadas } />
            </Lista> */}
        </Section>
    )
}
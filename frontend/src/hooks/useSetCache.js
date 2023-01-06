import { useEffect } from "react";
import { setCache } from "../components/Util";

export default function useSetCache(props) {
    
    useEffect(() => {

        setCache(props.nome, props.dados);

    }, [props]);

    return;
}


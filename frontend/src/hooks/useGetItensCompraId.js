import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function useGetItensCompraId(compra_id) {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()  => {
        
        supabase.from('itens')
            .select(`
                id, 
                codigo,
                valorunitario, 
                quantidade, 
                valortotal,
                produto:produto_id (
                    id, nome
                )`
            )
            .eq("compra_id", compra_id)
            .then(response => {
                setData(response?.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsFetching(false);
            });

    }, [compra_id]);

    return { data, error, isFetching };
}

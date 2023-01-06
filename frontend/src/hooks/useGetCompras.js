import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function useGetCompras() {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()  => {

        console.log(supabase);
        supabase.from('compras')
            .select(`
                id, finalizada,
                lojas:loja_id (
                    id, nome
                )`
            )
            .then(response => {
                setData(response?.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsFetching(false);
            });

    }, []);

    return { data, error, isFetching };
}

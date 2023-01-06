import axios from "axios";
import { useEffect, useState } from "react";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const api = axios.create({
    baseURL: `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/`,
    headers:{
        apikey: process.env.REACT_APP_SUPABASE_ANON_KEY
      }
});

export default function useGetCompraNaoFinalizada() {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        supabase.from('compras')
            .select("id, loja_id")
            .eq('finalizada', 0)
            .then(response => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

    }, []);

    return { data, error, isFetching };
}

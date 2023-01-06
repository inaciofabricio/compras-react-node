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

export default function useApi(url) {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        supabase.from('itens').select()
            .then(response => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

        // api.get("itens")
        //     .then(response => {
        //         console.log(response)
        //         // setData(response.data);
        //         // setCache(url, response.data);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         // const { data: message, status } = err.response ? err.response : {message : "localStorage Lotado", status: 500};
        //         // setError({ message, status });
        //         // setCache(url, { message, status });
        //     })
        //     .finally(() => {
        //         // setIsFetching(false);
        //     })



        // const [result, reexecute] = supabase("itens")
        // console.log(result);

        // let cache = getCache(url);

        // api.get(url)
        //     .then(response => {
        //         setData(response.data);
        //     })
        //     .catch((err) => {
        //         setError({ message: "Não encontado!", status: 404 });
        //     })
        //     .finally(() => {
        //         setIsFetching(false);
        //     });

    }, [url]);

    return { data, error, isFetching };
}

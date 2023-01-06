import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "http://localhost:5000/api/"
});

// api.interceptors.request.use((req) =>{
//     req.url = `${req.url}.json`;
//     return req;
// });

export default function useApi(metodo, url, obj) {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(metodo === "get") {
            api.get(url)
                .then(response => {
                    setData(response.data.data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setIsFetching(false);
                });
        } else if(metodo === "post" && obj) {
            console.log(obj)
            api.post(url, obj)
                .then(response => {
                    setData(response.data.data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setIsFetching(false);
                });
        }

    }, [metodo, url]);

    return { data, error, isFetching };
}
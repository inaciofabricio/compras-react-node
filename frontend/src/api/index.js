import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/",
    headers: {
        Authorization : ""
    }
});

api.interceptors.request.use(
    (config) =>  {
    
        let access_token = localStorage.getItem("access_token");
        
        config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
        
        return config;
    }, 
    (error) => {
        console.log(error);
        return;
    }
);

export const post = (url, body, setData, setError, setIsFetching, enviaToken) => {

    setData(null);
    setError(null);
    setIsFetching(true);

    api.post(url, body)
    
        .then(response => {
            // console.log("a: ", response?.data?.data)
            setData(response?.data?.data);
        })
        .catch((error) => {
            setError(error?.response?.data);
        })
        .finally(() => {
            setIsFetching(false);
        });
}

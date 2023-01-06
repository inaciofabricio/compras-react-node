import { useEffect, useState } from "react";
import { getCache, setCache } from "../components/Util";

export default function useGetCache(props) {

    const [data, setData] = useState(null);

    useEffect(() => {

        let cache = getCache(props);

        if(cache) {
            setData(cache);
        } else {
            setCache(props, []);

            cache = getCache(props);
            setData(cache);
        }  

    }, [props]);

    return { data };
}


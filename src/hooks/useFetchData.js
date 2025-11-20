import { useState, useEffect } from "react";

function useFetchData(url){  

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getProducts() {
            try{
            setIsLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setError(""); //si luego cargan o recargan los datos quita mensaje de error
            } catch (err){
            setError("Ocurrio un error al cargar los datos");
            } finally {
            setIsLoading(false);
            }
        }

        getProducts();
    }, [url]);

    return { data, error, isLoading };
}


export default useFetchData;
    
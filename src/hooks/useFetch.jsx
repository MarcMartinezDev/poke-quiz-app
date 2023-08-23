import { useState, useEffect } from "react";

//Example of new custom hook for make requests.
const useFetch = (url) =>
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },[]);

    return {data, loading, error};
}
export default useFetch;
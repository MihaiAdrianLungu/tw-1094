import {useState, useEffect} from 'react'

const useFetch = (url) => { 
    const [orders, setOrders] = useState(null); 
    const [error, setError] = useState(null); 
    
    useEffect(() => { 
        fetch(url)
        .then(response => response.json())
        .then(data => setOrders(data))
        .catch(error => setError(error)); 
    }, [url]); 
    
    return {orders, error}; 
}

export default useFetch;
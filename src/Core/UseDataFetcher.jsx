import { useState, useCallback } from 'react';
import { HttpClient } from './HttpClient';

export const useDataFetcher = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (endpoint, method = 'GET', body = null) => {
        setLoading(true);
        setError(null);
        try {
            let result;
            if (method === 'GET') result = await HttpClient.get(endpoint);
            else if (method === 'POST') result = await HttpClient.post(endpoint, body);
            else if (method === 'PUT') result = await HttpClient.put(endpoint, body);
            else if (method === 'DELETE') result = await HttpClient.delete(endpoint);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, error, fetchData };
};

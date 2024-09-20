import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FILMS } from '../apollo/queries/queries';

const useFilms = () => {
    const { loading, error, data } = useQuery(GET_FILMS, {
        fetchPolicy: 'cache-first',
    });
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data) {
            const delay = setTimeout(() => {
                setFilms(data.allFilms.films);
                setIsLoading(false);
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [data]);
    return { loading, error, films, isLoading };
};

export default useFilms;

import React, { useState, useEffect, useCallback } from 'react';
import useFilms from '../hooks/useFilms';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorComponent from '../components/ErrorComponent';
import FilmTable from '../components/FilmTable';
import SortDropdown from '../components/SortDropdown';

const Films = () => {
    const { loading, error, films: initialFilms, isLoading } = useFilms();
    const [films, setFilms] = useState(initialFilms);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        if (initialFilms) {
            setFilms(initialFilms);
        }
    }, [initialFilms]);

    const sortFilms = useCallback((option) => {
        const sortedFilms = [...films];
        switch (option) {
            case 'title':
                sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'releaseDate':
                sortedFilms.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
                break;
            case 'episodeID':
                sortedFilms.sort((a, b) => a.episodeID - b.episodeID);
                break;
            default:
                break;
        }
        setFilms(sortedFilms);
    }, [films]);

    useEffect(() => {
        if (sortOption) {
            sortFilms(sortOption);
        }
    }, [sortOption, sortFilms]);

    if (error) return <ErrorComponent message={error.message} onRetry={() => window.location.reload()} />;
    if (loading || isLoading) return <LoadingSkeleton />;

    return (
        <div>
            <h1>Star Wars Films</h1>
            <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
            <FilmTable films={films} />
        </div>
    );
};

export default Films;

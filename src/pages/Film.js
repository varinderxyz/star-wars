import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FILM_BY_ID } from '../apollo/queries/queries';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorComponent from '../components/ErrorComponent';


const Film = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_FILM_BY_ID, {
        variables: { id: id },
        skip: !id,
        fetchPolicy: 'cache-first',
    });

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (error) return <ErrorComponent message={error.message} onRetry={() => window.location.reload()} />;

    if (!showContent) return <LoadingSkeleton className="details" />;
    if (loading) return <LoadingSkeleton className="details" />;
    return (
        <div className="film-detail">
            <h1>Film Details</h1>
            <div className="button-container">
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            {data?.film ? (
                <div className="details-container">
                    <h2>{data.film.title}</h2>
                    <p>Episode: {data.film.episodeID}</p>
                    <p>Release Date: {data.film.releaseDate}</p>
                    <p className="opening-crawl">{data.film.openingCrawl}</p>
                    <h3>Characters</h3>
                    <p>
                        {data.film.characterConnection.characters.map(character => character.name).join(", ")}
                    </p>
                </div>
            ) : (
                <p>No film found</p>
            )}
        </div>
    );
};

export default Film;

import React from 'react';
import { Link } from 'react-router-dom';

const FilmTable = ({ films }) => (
    <table className="film-table">
        <thead>
            <tr className="table-header">
                <th>Title</th>
                <th>Director</th>
                <th>Release Date</th>
                <th>Episode Number</th>
            </tr>
        </thead>
        <tbody>
            {films.map((film) => (
                <tr key={film.episodeID} className="table-row">
                    <td>
                        <Link to={`/film/${film.id}`}>{film.title}</Link>
                    </td>
                    <td>{film.director}</td>
                    <td>{film.releaseDate}</td>
                    <td>{film.episodeID}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default FilmTable;

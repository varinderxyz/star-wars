import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => (
    <div className="filter">
        <label htmlFor="sort">Sort by: </label>
        <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
        >
            <option value="">Select</option>
            <option value="title">Title</option>
            <option value="releaseDate">Release Date</option>
            <option value="episodeID">Episode Number</option>
        </select>
    </div>
);

export default SortDropdown;
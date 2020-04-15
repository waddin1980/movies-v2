import React from 'react';

const GenreFilter = props => {
    // Make a new array of the current genre ids on the page
    const filtered = props.movies.map(movie => movie.genre_ids).flat();

    // Filter to remove any genres not on the page with the current movies
    const filteredGenres = props.genres.filter(genre => filtered.includes(Number(genre.id)))


    const genre = filteredGenres.map(genre => {
        return(
            <li key={genre.name}>
                <input 
                    type="checkbox"
                    value={genre.id}
                    onChange={props.handleGenreCheckboxes}
                    id={genre.name}
                />
                <label htmlFor={genre.name}>{genre.name}</label>
            </li>
        )
    });

    return (
        <div className="genre-picker">
            <form>
                <ul>
                    {genre}
                </ul>
            </form>
        </div>
    )
} 

export default GenreFilter;
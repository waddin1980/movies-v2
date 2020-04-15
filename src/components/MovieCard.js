import React from 'react';
import './MovieCard.scss';

const MovieCard = props => {
	return (
		<li className="movie-card">
			<img
				className="movie-card__image"
				src={"https://image.tmdb.org/t/p/w500" + props.image}
				alt={props.title}
			/>
			<div className="movie-card__info">
				<h2 className="movie-card__title">{props.title.toUpperCase()}</h2>
				<ul className="movie-card__genres">{props.genres}</ul>
			</div>
		</li>
	);
}

export default MovieCard;
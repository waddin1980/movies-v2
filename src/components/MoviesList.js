import React from 'react';
import MovieCard from './MovieCard';
import './MoviesList.scss';

const MoviesList = props => {
		
	// Create a movie list by filtering any movies 
	const movie = props.movies.filter(movie => movie.vote_average > props.rating).map(movie => {

		// Add the genres to each movie card. 
		const genres = movie.genres;
		const genreList = [];

		for (const [index, genre] of genres.entries()) {
			genreList.push(
				<li className="movie-card__genre" key={index}>
					{genre.name}
				</li>
			);
		}
			
		return (

			<MovieCard 
				key={movie.id} 
				title={movie.title} 
				image={movie.poster_path}
				voteAverage={movie.vote_average}
				genres={genreList}       
			/>

		)
		

	});
	

	return (
		<main>
			<ul className="movies-list">
				{movie}
			</ul>
		</main>	
	)


};

export default MoviesList;

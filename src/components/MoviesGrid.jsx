import movies from '../Movies.json'
import {MovieCard} from './MovieCard';
import styles from '../css/MoviesGrid.module.css'

export function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} /> 
            ))}
        </ul>
    )
}
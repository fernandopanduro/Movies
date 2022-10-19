import movie from '../Movie.json';
import styles from '../css/MovieDetails.module.css'
import { get } from '../utils/httmpClient';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export function MovieDetails() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        get('/movie/' + movieId).then(data => {
            setMovie(data)
        })
    }, [movieId])

    if (!movie) {
        return null;    
    }


    const imgURL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    return (
        <main className={styles.movieDetails + " " + styles.col}>
            <img
            src={imgURL} 
            alt={movie.title} 
            className={styles.imgDetails}/>
            <section className={styles.col + " " + styles.description}>
                <h3>{movie.title}</h3>
                
                <p>{movie.overview}</p>

                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                
            </section>
        </main>
    );
}
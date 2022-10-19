 import { Link } from 'react-router-dom';
import styles from '../css/MovieCard.module.css';
 
 export function MovieCard({movie}) {
    const imgURL = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img 
                width={300}
                height={450}
                src={imgURL} 
                alt={movie.title} 
                className={styles.imgCard}/>
                <div className={styles.description}>
                    {movie.title}
                </div>
            </Link>
        </li>   
    )
}
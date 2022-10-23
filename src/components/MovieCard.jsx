import { Link } from 'react-router-dom';
import styles from '../css/MovieCard.module.css';
import { getMovieImg } from '../utils/getMovieImg';
 
 export function MovieCard({movie}) {
    const imgURL = getMovieImg(movie.poster_path, 300)

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
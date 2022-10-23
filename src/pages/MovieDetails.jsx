import styles from '../css/MovieDetails.module.css'
import { get } from '../utils/httmpClient';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { Search } from '../components/Search';
import { getMovieImg } from '../utils/getMovieImg';



export function MovieDetails() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        get('/movie/' + movieId).then(data => {
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieId])

    if (isLoading) {
        return <Spinner />
    }

    if (isLoading) {
        return <Spinner />;    
    }


    const imgURL = getMovieImg(movie.poster_path, 500);
    return (<div>
        <Search />
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
    </div>

    );
}
import {MoviesGrid} from '../components/MoviesGrid';
import { Search } from '../components/Search';
import { useDebounce } from '../hooks/useDebounce';
import { useQuery } from '../hooks/useQuery';
import styles from '../css/LandingPage.module.css';

export function LandingPage() {
    const query = useQuery();
    const search = query.get('search');
        
    const debouncedSearch = useDebounce(search, 300)
    return (
        <div className={styles.LandingPage}>
            <Search />
            <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
    )
}
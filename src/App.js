import { MoviesGrid } from './components/MoviesGrid';
import styles from './css/App.module.css'
import './css/Normalize.css';

function App() {
  return (
    <div className={styles.contenedorApp}>

      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>

      <main>
        <MoviesGrid />
      </main>

    </div>
  );
}

export default App;

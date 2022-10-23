import styles from "../css/Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.bookshelf + " " + styles.wrapper}>
        <ul className={styles.books_list}>
            <li className={styles.book_item + " " + styles.first}></li>
            <li className={styles.book_item + " " + styles.second}></li>
            <li className={styles.book_item + " " + styles.third}></li>
            <li className={styles.book_item + " " + styles.fourth}></li>
            <li className={styles.book_item + " " + styles.fifth}></li>
            <li className={styles.book_item + " " + styles.sixth}></li>
        </ul>
        <div className={styles.shelf}></div>
        </div>
    )
}
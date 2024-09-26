import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const movies = [
  {
    id: 1,
    title: 'Deadpool & Wolverine',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQb8d-KyAcW9i0_iG4lB3MUtMAAzQvUUkNw&s'
  },
  {
    id: 2,
    title: 'Stree 2',
    image: 'https://m.media-amazon.com/images/M/MV5BMTA1NmUxYzItZmVmNy00YmQxLTk4Y2UtZjVkMWUwMWQ5N2IxXkEyXkFqcGc@._V1_UY1200_CR165,0,630,1200_AL_.jpg',
  },
  {
    id: 3,
    title: 'Joker',
    image: 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg',
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
  },
  {
    id: 5,
    title: 'Fast X',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTD4UU6uNWa6c56SOBmDPHwIQnDeBMOr-gLA&s'
  },
  {
    id: 6,
    title: 'Inception',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
  },
  {
    id: 7,
    title: 'Deadpool',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png',
  },
  {
    id: 8,
    title: 'Tumbbad',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk13Y7jvPCDeT_sBx4l4Q6KwYcPgHBaWwupQ&s'
  }
];

const MovieList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Movies</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <Link to={`/movies/${movie.id}`} className={styles.detailsLink}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

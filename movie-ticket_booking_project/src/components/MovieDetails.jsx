import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';

// Sample movie details (extend as needed)
const movieDetails = {
  1: {
    title: 'Deadpool & Wolverine',
    description: 'Deadpool teams up with Wolverine to take on a new threat.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQb8d-KyAcW9i0_iG4lB3MUtMAAzQvUUkNw&s',
    genre: 'Action, Comedy'
  },
  2: {
    title: 'Stree 2',
    description: 'The sequel to the hit horror-comedy film, where the townsfolk face new challenges.',
    genre: 'Horror, Comedy',
    image: 'https://m.media-amazon.com/images/M/MV5BMTA1NmUxYzItZmVmNy00YmQxLTk4Y2UtZjVkMWUwMWQ5N2IxXkEyXkFqcGc@._V1_UY1200_CR165,0,630,1200_AL_.jpg',
  },
  3: {
    title: 'Joker',
    description: 'The story of Arthur Fleck, a struggling comedian with a troubled past who becomes the Joker.',
    genre: 'Crime, Drama, Thriller',
      image: 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg',
    },
  4: {
    title: 'Avengers: Endgame',
    description: 'The Avengers assemble to reverse the damage caused by Thanos in the previous film.',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
  },
  5: {
    title: 'Fast X',
    description: 'The Fast family faces their biggest threat yet as they navigate dangerous alliances.',
    genre: 'Action, Crime, Thriller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTD4UU6uNWa6c56SOBmDPHwIQnDeBMOr-gLA&s'
  },
  6: {
    title: 'Inception',
    description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
  },
  7: {
    title: 'Deadpool',
    description: 'A former special forces operative becomes a mercenary with accelerated healing powers.',
    genre: 'Action, Comedy',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png',
  },
  8: {
    title: 'Tumbbad',
    description: 'A tale of greed and ambition set in the village of Tumbbad, exploring ancient mythology.',
    genre: 'Horror, Mystery',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk13Y7jvPCDeT_sBx4l4Q6KwYcPgHBaWwupQ&s'
  }
 
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieDetails[id];

  if (!movie) {
    return <div className={styles.container}><h2>Movie not found</h2></div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.details}>
        <img src={movie.image} alt={movie.title} className={styles.image} />
        <p className={styles.description}>{movie.description}</p>
        <p className={styles.description}>Genre : {movie.genre}</p>
      </div>
      <Link to={`/book/${id}`} className={styles.bookButton}>
        Book Seat
      </Link>
    </div>
  );
};

export default MovieDetails;

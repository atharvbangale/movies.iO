import React, { useState, useEffect } from 'react';

const OMDB_API_KEY = 'a2bed968'; 

const MovieCard = ({ title, plot, image, onToggleWishlist, isInWishlist }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <img className="w-full" src={image} alt={title} />
    <div className="px-3 py-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700 text-sm mb-2">{plot}</p>
      <button
        onClick={() => onToggleWishlist(title)}
        className={`py-1 px-3 text-xs rounded-full w-fit ${
          isInWishlist
            ? "bg-red-100 text-red-500 hover:bg-red-200"
            : "bg-blue-100 text-blue-500 hover:bg-blue-200"
        } transition duration-200`}
      >
        {isInWishlist ? "Remove" : "Add"}
      </button>
    </div>
  </div>
);

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);

    const movieTitles = ['Inception', 'The Dark Knight', 'Avatar'];

    try {
      const movieData = await Promise.all(
        movieTitles.map((title) =>
          fetch(`http://www.omdbapi.com/?t=${title}&apikey=${OMDB_API_KEY}`)
            .then((response) => response.json())
        )
      );
      setMovies(movieData);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);


  const handleToggleWishlist = (movieTitle) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(movieTitle)
        ? prevWishlist.filter((title) => title !== movieTitle)
        : [...prevWishlist, movieTitle]
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.Title}
            plot={movie.Plot}
            image={movie.Poster}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={wishlist.includes(movie.Title)}
          />
        ))}
      </div>

     
      <div className="mt-8 bg-white p-5 rounded shadow-lg">
        <h2 className="font-semibold text-lg mb-4">Your Wishlist</h2>
        <ul>
          {wishlist.length === 0 ? (
            <li className="text-gray-500">Your wishlist is empty</li>
          ) : (
            wishlist.map((movie, index) => (
              <li key={index} className="text-gray-700">{movie}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

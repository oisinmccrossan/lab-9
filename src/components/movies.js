import MovieItem from "./movieitem"; // Import the MovieItem component

// Define the Movies component
function Movies(props) {
    return (
        <>
            {/* Map through the myMovies array and render a MovieItem for each movie */}
            {props.myMovies.map((movie) => (
                <MovieItem
                    mymovie={movie} // Pass the movie object as a prop
                    key={movie._id} // Use the movie ID as the key
                    Reload={props.ReloadData} // Pass the ReloadData function as a prop
                />
            ))}
        </>
    );
}

// Export the Movies component as the default export
export default Movies;
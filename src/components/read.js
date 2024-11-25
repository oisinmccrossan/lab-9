import axios from "axios"; // Import axios for making HTTP requests
import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import Movies from "./movies"; // Import the Movies component

// Define the Read component
function Read() {
    // State variable to store the movie data
    const [data, setData] = useState([]);

    // Function to reload the movie data
    const Reload = () => {
        console.log("Reloading movie data...");
        // Send a GET request to fetch the movies
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setData(response.data.movies); // Update the state with the fetched data
            })
            .catch((error) => {
                console.error("Error reloading data:", error); // Log any errors
            });
    };

    // useEffect to reload the movie data when the component mounts
    useEffect(() => {
        Reload();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            {/* Render the Movies component and pass the movie data and Reload function as props */}
            <Movies myMovies={data} ReloadData={Reload} />
        </div>
    );
}

// Export the Read component as the default export
export default Read;
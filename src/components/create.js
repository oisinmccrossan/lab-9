import axios from "axios";
import { useState } from "react";

// Define the Create component
const Create = () => {

    // State variables to store movie details
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = { title, year, poster };
        console.log(movie);

        // Send a POST request to add a new movie
        axios.post('http://localhost:4000/api/movies', movie)
            .then((res) => { console.log(res.data) })
            .catch((error) => { console.error("Error adding movie:", error) });
    }

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}

// Export the Create component as the default export
export default Create;
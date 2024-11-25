import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios"; // Import axios
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap

// Define the MovieItem component
const MovieItem = (props) => {
  // Use useEffect to log the movie item whenever it changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  // Handle delete button click
  const handleDelete = (e) => {
    e.preventDefault();
    // Send a DELETE request to delete the movie
    axios.delete('http://localhost:4000/api/movie/' + props.mymovie._id)
      .then(() => {
        props.Reload(); // Refresh the movie list after deletion
      })
      .catch((error) => {
        console.error("Error deleting movie:", error); // Log any errors
      });
  };

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header> {/* Display movie title */}
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} /> {/* Display movie poster */}
            <footer>{props.mymovie.year}</footer> {/* Display movie year */}
          </blockquote>
          <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link> {/* Edit button */}
          <Button variant="danger" onClick={handleDelete}>Delete</Button> {/* Delete button */}
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component as the default export
export default MovieItem;
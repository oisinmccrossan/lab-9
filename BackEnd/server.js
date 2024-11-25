const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

// Middleware to handle CORS and set headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14');

// Define movie schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Create movie model
const movieModel = new mongoose.model('myMovies', movieSchema);

// Route to get all movies
app.get('/api/movies', async (req, res) => {
  const movies = await movieModel.find({});
  res.status(200).json({ movies });
});

// Route to get a movie by ID
app.get('/api/movie/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id);
  res.json(movie);
});

// Route to add a new movie
app.post('/api/movies', async (req, res) => {
  console.log(req.body.title);
  const { title, year, poster } = req.body;

  const newMovie = new movieModel({ title, year, poster });
  await newMovie.save();

  res.status(201).json({ "message": "Movie Added!", Movie: newMovie });
});

// Route to get a movie by ID (duplicate, can be removed)
app.get('/api/movie/:id', async (req, res) => {
  let movie = await movieModel.findById({ _id: req.params.id });
  res.send(movie);
});

// Route to update a movie by ID
app.put('/api/movie/:id', async (req, res) => {
  let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(movie);
});

// Route to delete a movie by ID
app.delete('/api/movie/:id', async (req, res) => {
  console.log('Deleting movie with ID:', req.params.id);
  const movie = await movieModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Movie deleted successfully", movie });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
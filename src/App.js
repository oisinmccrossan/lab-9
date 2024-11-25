import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import NavigationBar from './components/NavigationBar'; // Import NavigationBar component
import Header from './components/header'; // Import Header component
import Footer from './components/footer'; // Import Footer component
import Content from './components/content'; // Import Content component
import Read from './components/read'; // Import Read component
import Create from './components/create'; // Import Create component
import Edit from './components/edit'; // Import Edit component

// Define the App component
function App() {
  return (
    <Router>
      <NavigationBar /> {/* Render the NavigationBar component */}
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Content />} /> {/* Route for Content component */}
        <Route path="/read" element={<Read />} /> {/* Route for Read component */}
        <Route path="/create" element={<Create />} /> {/* Route for Create component */}
        <Route path="/edit/:id" element={<Edit />} /> {/* Route for Edit component */}
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </Router>
  );
}

// Export the App component as the default export
export default App;
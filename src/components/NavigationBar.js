import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Define the NavigationBar component
const NavigationBar = () => {
  return (
    // Render a dark-themed Navbar
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Navbar brand that links to the home page */}
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {/* Navigation links */}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Export the NavigationBar component as the default export
export default NavigationBar;
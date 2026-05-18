import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h1>Sudharsun AutoHub</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;
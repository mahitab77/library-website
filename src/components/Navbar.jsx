import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for the account icon
import logo from '../assets/images/books-shelf.png'; // Import the logo image correctly

const Navbar = () => {
  return (
    <header className="header_section">
      <div className="container-fluid" style={{ padding: '0' }}>
        <nav className="navbar navbar-expand-md fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingLeft: '50px', paddingRight: '50px' }}>
          <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
            <img src={logo} alt="Zenith Books Logo" style={{ width: '40px', marginRight: '10px' }} />
            Zenith Books
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/membership">Membership</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/login">
                  <FaUserCircle size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

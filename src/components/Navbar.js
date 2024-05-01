import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import AuthContext from '../components/AuthContext';

export default function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate hook to access navigation

  const handleLogout = () => {
    // Perform logout logic if needed
    // Redirect to login page
    navigate('/login'); // Use navigate function to redirect
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="me-auto">
            <Link className="navbar-brand fs-2" to="/">GOFood</Link>
          </div>
          
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {isLoggedIn && (
            <div className="me-3">
              <Link className="nav-link active" aria-current="page" to="/">My orders</Link>
            </div>
          )}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
        {isLoggedIn && (
          <div className="col-auto">
            <Link className="btn btn-light me-2" to="/myorders">My Cart</Link>
            <button className="btn btn-light" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

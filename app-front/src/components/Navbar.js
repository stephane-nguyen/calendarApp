import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul>
          <li>
            <Link to="/">
              <img src="cytech_logo.png" alt="icon" />
            </Link>
          </li>
          <li>
            <Link to="/user">Students</Link>
          </li>
          <li>
            <Link to="/supervisor">Supervisors</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        {user ? (
          <Link to="/">
            <i className="fas fa-sign-out-alt fa-2x"></i>
          </Link>
        ) : (
          <Link to="/login">
            <i className="fas fa-user-circle fa-2x"></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

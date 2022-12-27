import { Link, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';

const Navbar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </div>
           
            <div className="nav-right">
                {user
                    ? <button onClick={() => {
                       //logout
                    }}>Log out</button>
                    : <button onClick={() => {
                        navigate("/login");
                    }}>Log in</button>
                }
            </div>
      </nav>
       
     
    )
}

export default Navbar;
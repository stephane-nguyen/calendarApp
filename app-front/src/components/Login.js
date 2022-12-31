import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            //login
            navigate('/articles');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="card w-50 mx-auto mt-5">
          <div className="card-body">
            <h5 className="card-title text-center mb-4">Log In</h5>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Log In</button>
            </form>
          </div>
        </div>
    );

}

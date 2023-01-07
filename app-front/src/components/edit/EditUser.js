import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/baseURL";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.put(`user/${id}`, user);
    navigate("/user");
  };

  const loadUser = async () => {
    const result = await api.get(`/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="Firstname" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Lastname" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="btn btn-danger" to="/user">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

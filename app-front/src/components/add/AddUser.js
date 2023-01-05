import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/baseURL";

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };
    try {
      const response = await api.post("/user", user);
      const allUsers = [...users, response.data];
      setUsers(allUsers);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.response.data);
    }
    //navigate("/user");
  };

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h3 className="card-header text-center">Add user</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstname" className="form-label">
                      Firstname
                    </label>
                    <input
                      type="text"
                      placeholder="Enter firstname"
                      name="firstname"
                      className="form-control"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname" className="form-label">
                      Lastname
                    </label>
                    <input
                      type="text"
                      placeholder="Enter lastname"
                      name="lastname"
                      className="form-control"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn btn-success btn-block"
                    onClick={(e) => saveUser(e)}
                  >
                    Save
                  </button>
                  <Link to="/user">
                    <button className="btn btn-danger btn-block mt-1">
                      Cancel
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

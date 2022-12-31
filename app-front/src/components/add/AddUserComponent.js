import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

const AddUserComponent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveUser = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email };
    UserService.addUser(user)
      .then((response) => {
        console.log(response.data);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <button
                    className="btn btn-success btn-block"
                    onClick={(e) => saveUser(e)}
                  >
                    Save
                  </button>
                  <Link to="/user">
                    <button className="btn btn-danger btn-block">Cancel</button>
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

export default AddUserComponent;

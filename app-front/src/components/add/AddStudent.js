import api from "../../api/baseURL";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:app-front/src/components/add/AddStudent.js
    await api.post("/user", student);
    navigate("/student");
=======
    try {
      await api.post("/user", user);
      navigate("/user");
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
>>>>>>> feature-exam:app-front/src/components/add/AddUser.js
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Add student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link className="btn btn-danger" to="/student">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

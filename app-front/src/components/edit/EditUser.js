import React, { useState } from "react";
import api from "../../api/baseURL";
import { Link } from "react-router-dom";

function EditUser() {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const editUser = async (id) => {
    const updatedUser = { id, firstname, lastname, email, password };
    try {
      const response = await api.put(`/user/${id}`, updatedUser);
      setUsers(
        users.map((user) =>
          //if not, we keep the subject as it is because we didnt update it
          user.idUser === id ? { ...response.data } : user
        )
      );
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">Edit Student</h3>
            <div className="card-body">
              <form onSubmit={editUser}>
                <div className="form-group">
                  <label htmlFor="firstname" className="form-label">
                    Student firstname
                  </label>
                  <input
                    type="text"
                    placeholder="firstname"
                    name="firstname"
                    className="form-control"
                    value={users.firstname}
                    onChange={(e) =>
                      setUsers({
                        ...users,
                        firstname: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="lastname" className="form-label mt-2">
                    Student lastname
                  </label>
                  <input
                    type="text"
                    placeholder="lastname"
                    name="lastname"
                    className="form-control"
                    value={users.lastname}
                    onChange={(e) =>
                      setUsers({
                        ...users,
                        lastname: e.target.value,
                      })
                    }
                  />
                  <label htmlFor="email" className="form-label mt-2">
                    Student email
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="form-control"
                    value={users.email}
                    onChange={(e) =>
                      setUsers({
                        ...users,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Edit
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
  );
}

export default EditUser;

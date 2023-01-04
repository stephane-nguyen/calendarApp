import { Link } from "react-router-dom";

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="container">
      <h2 className="text-center">List of Users</h2>
      <Link to="/add-user" className="btn btn-primary mb-2">
        Add User
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.idUser}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.idUser}`}>
                  <button
                    className="btn btn-success btn-sm rounded-0 mr-1"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edit"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                </Link>
                <button
                  onClick={() => deleteUser(user.idUser)}
                  className="btn btn-danger btn-sm rounded-0"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

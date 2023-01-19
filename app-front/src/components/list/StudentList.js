import { Link } from "react-router-dom";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="container">
      <h2 className="text-center">List of Students</h2>
      <Link to="/add-student" className="btn btn-primary mb-2">
        Add student
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
          {students.map((student) => (
            <tr key={student.idUser}>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
              <td>
                <Link to={`/student/${student.idUser}`}>
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
                  onClick={() => deleteStudent(student.idUser)}
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

export default StudentList;

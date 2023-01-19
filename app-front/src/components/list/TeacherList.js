import { Link } from "react-router-dom";

const TeacherList = ({ teachers, deleteTeacher }) => {
  return (
    <div className="container">
      <h2 className="text-center">List of Teachers</h2>
      <Link to="/add-teacher" className="btn btn-primary mb-2">
        Add Teacher
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
          {teachers.map((teacher) => (
            <tr key={teacher.idUser}>
              <td>{teacher.firstname}</td>
              <td>{teacher.lastname}</td>
              <td>{teacher.email}</td>
              <td>
                <Link to={`/teacher/${teacher.idUser}`}>
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
                  onClick={() => deleteTeacher(teacher.idUser)}
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

export default TeacherList;

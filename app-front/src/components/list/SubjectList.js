import React from "react";

const SubjectList = ({ subjects, setIsOpen, editSubject, deleteSubject }) => {
  return (
    <div className="container">
      <h2 className="text-center">List of Subjects</h2>
      <button className="btn btn-primary mb-2" onClick={() => setIsOpen(true)}>
        Add Subject
      </button>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.idSubject}>
              <td>{subject.nameSubject}</td>
              <td>
                {/* action buttons */}
                <ul className="list-inline m-0">
                  <li className="list-inline-item">
                    <button
                      onClick={() => editSubject(subject.idSubject)}
                      className="btn btn-success btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => deleteSubject(subject.idSubject)}
                      className="btn btn-danger btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;

import React from "react";

function AgendaList({ exams, setId, setIsEditExamOpen, deleteExam }) {
  return (
    <div className="container mt-1">
      <h2 className="text-center">List of Exams</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Room</th>
            <th>Start</th>
            <th>End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.idExam}>
              <td>{exam.title}</td>
              <td>{exam.room}</td>
              <td>{exam.start}</td>
              <td>{exam.end}</td>
              <td>
                <ul className="list-inline m-0">
                  <li className="list-inline-item">
                    <button
                      onClick={() => {
                        setId(exam.idExam);
                        setIsEditExamOpen(true);
                      }}
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
                      onClick={() => deleteExam(exam.idExam)}
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
}

export default AgendaList;

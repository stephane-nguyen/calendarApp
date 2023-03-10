import React from "react";

function ExamList({ exams, setId, setIsEditExamOpen, deleteExam }) {
  return (
    <div className="container mt-1">
      <h2 className="text-center">List of Exams</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Subject Id</th>
            <th>Room</th>
            <th>startDate</th>
            <th>endDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id_exam}>
              <td>{exam.subjects_id_subjects}</td>
              <td>{exam.room_id_room}</td>
              <td>{new Date(exam.startDate).toLocaleString()}</td>
              <td>{new Date(exam.endDate).toLocaleString()}</td>
              <td>
                <ul className="list-inline m-0">
                  <li className="list-inline-item">
                    <button
                      onClick={() => {
                        setId(exam.id_exam);
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
                      onClick={() => deleteExam(exam.id_exam)}
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

export default ExamList;

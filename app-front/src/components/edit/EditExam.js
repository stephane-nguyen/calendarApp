import React, { useState } from "react";
import api from "../../api/baseURL";
function EditAgenda({ exams, setExams, id, closeModal }) {
  const [exam, setExam] = useState({ title: "", start: "", end: "" });

  const { title, start, end } = exam;

  const onInputChange = (e) => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  const editExam = async (e, closeModal) => {
    e.preventDefault();
    try {
      const response = await api.put(`/exam/${id}`, exam);
      setExams(
        exams.map((exam) =>
          //if not, we keep the Exam as it is because we didnt update it
          exam.idExam === id ? { ...response.data } : exam
        )
      );
      setExam({ title: "", start: "", end: "" });
      closeModal();
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">Edit Exam</h3>
            <div className="card-body">
              <form onSubmit={(e) => editExam(e, closeModal)}>
                <div className="form-group">
                  <label htmlFor="titleExam" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Modify your Exam title"
                    name="titleExam"
                    className="form-control"
                    value={title}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startExam" className="form-label">
                    Start
                  </label>
                  <input
                    type="text"
                    placeholder="Modify the start of your exam"
                    name="startExam"
                    className="form-control"
                    value={start}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endExam" className="form-label">
                    End
                  </label>
                  <input
                    type="text"
                    placeholder="Modify the end of your exam"
                    name="endExam"
                    className="form-control"
                    value={end}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-block"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAgenda;

import React, { useState } from "react";
import api from "../../api/baseURL";

const EditSubject = ({ subjects, setSubjects, id, closeModal }) => {
  const [nameSubject, setNameSubject] = useState("");

  const editSubject = async (e, closeModal) => {
    e.preventDefault();
    try {
      const response = await api.put(`/subject/${id}`, { nameSubject });
      setSubjects(
        subjects.map((subject) =>
          //if not, we keep the subject as it is because we didnt update it
          subject.idSubject === id ? { ...response.data } : subject
        )
      );
      setNameSubject("");
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
            <h3 className="card-header text-center">Edit subject</h3>
            <div className="card-body">
              <form onSubmit={(e) => editSubject(e, closeModal)}>
                <div className="form-group">
                  <label htmlFor="nameSubject" className="form-label">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    placeholder="Modify your subject name"
                    name="nameSubject"
                    className="form-control"
                    value={nameSubject}
                    onChange={(e) => setNameSubject(e.target.value)}
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
};

export default EditSubject;

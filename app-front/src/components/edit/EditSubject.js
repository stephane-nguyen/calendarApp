import React, { useState, useEffect } from "react";
import api from "../../api/baseURL";

const EditSubject = ({ subjects, setSubjects, id, closeModal }) => {
  const [nameSubject, setNameSubject] = useState("");

  /* Display data about the subject selected */
  useEffect(() => {
    const fetchSubjectNameById = async () => {
      const subject = await getSubjectById(id);
      setNameSubject(subject.nameSubject);
    };
    fetchSubjectNameById();
  }, [id]);

  const getSubjectById = async (id) => {
    try {
      const res = await api.get(`/subject/${id}`);
      return res.data;
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

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

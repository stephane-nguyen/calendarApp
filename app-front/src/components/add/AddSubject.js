import React, { useState } from "react";
import api from "../../api/baseURL";

const AddSubject = ({ subjects, setSubjects, setIsOpen }) => {
  const [nameSubject, setNameSubject] = useState("");

  const addSubject = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/subject", { nameSubject });
      console.log(response);
      const allSubjects = [...subjects, response.data];
      setSubjects(allSubjects);
      setNameSubject("");
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-header text-center">New subject</h3>
            <div className="card-body">
              <form onSubmit={(e) => addSubject(e)}>
                <div className="form-group">
                  <label htmlFor="nameSubject" className="form-label">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name subject"
                    name="nameSubject"
                    className="form-control"
                    value={nameSubject}
                    onChange={(e) => setNameSubject(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={setIsOpen(false)}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => setIsOpen(false)}
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

export default AddSubject;

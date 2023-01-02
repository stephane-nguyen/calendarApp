import React, { useState, useEffect } from "react";
import api from "../api/baseURL";

import Modal from "./Modal";


const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState([]);
  const [editSubjectname, setEditSubjectname] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  /* CRUD */

  useEffect(() => {
    const getAllSubjects = async () => {
      try {
        const response = await api.get("/subject");
        setSubjects(response.data);
      } catch (err) {
        //not in 200 range status code
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`error: ${err.message}`);
        }
      }
    };
    getAllSubjects();
  }, []);

  const addSubject = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/subject", newSubject);
      console.log(response)
      const allSubjects = [...subjects, response.data];
      setSubjects(allSubjects);
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  const editSubject = async (id) => {
    const updatedSubject = { id, nameSubject: editSubjectname };
    try {
      const response = await api.put(`/subject/${id}`, updatedSubject);
      setSubjects(
        subjects.map((subject) =>
          //if not, we keep the subject as it is because we didnt update it
          subject.idSubject === id ? { ...response.data } : subject
        )
      );
      setEditSubjectname("");
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  const deleteSubject = async (id) => {
    try {
      await api.delete(`subject/${id}`);
      setSubjects(subjects.filter((subject) => subject.idSubject !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
     <div onClick={() => console.log('clicked')}>
    
      <Modal open={isOpen}> 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <h3 className="card-header text-center">New subject</h3>
                <div className="card-body">
                  <form onSubmit={addSubject}>
                    <div className="form-group">
                      <label htmlFor="nameSubject" className="form-label">
                        Subject Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name subject"
                        name="nameSubject"
                        className="form-control"
                        value={newSubject.nameSubject}
                        onChange={(e) =>
                          setNewSubject({ ...newSubject, nameSubject: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      // onClick={setIsOpen(false)}
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
      </Modal>
    </div>
      <div className="container">
        <h2 className="text-center">List of Subjects</h2>
        <button className="btn btn-primary mb-2" onClick={() => setIsOpen(true)}>Add Subject</button>
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
                            <button onClick={() => editSubject(subject.idSubject)} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                        </li>
                        <li className="list-inline-item">
                            <button onClick={() => deleteSubject(subject.idSubject)} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                        </li>
                    </ul>

                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>

    </>

  );
};

export default SubjectList;

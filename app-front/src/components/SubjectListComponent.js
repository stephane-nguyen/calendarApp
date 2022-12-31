import React, { useState, useEffect } from "react";
import api from "../api/baseURL";

import { useNavigate } from "react-router-dom";

const SubjectListComponent = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState([]);
  const [editSubjectname, setEditSubjectname] = useState("");
  const navigate = useNavigate();

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
      const allSubjects = [...subjects, response.data];
      setSubjects(allSubjects);

      navigate("/");
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const updatedSubject = { id, nameSubject: editSubjectname };
    try {
      const response = await api.put(`/subject/${id}`, updatedSubject);
      setSubjects(
        subjects.map((subject) =>
          //if not, we keep the subject as it is because we didnt update it
          subject.id === id ? { ...response.data } : subject
        )
      );
      setEditSubjectname("");
      navigate("/");
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`subject/${id}`);
      const subjectList = subjects.filter((subject) => subject.id !== id);
      setSubjects(subjectList);
      navigate("/");
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Subjects</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Subject Name</th>
          </tr>

          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.idSubject}>
                <td>{subject.nameSubject}</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default SubjectListComponent;

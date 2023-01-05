import React, { useState, useEffect } from "react";
import api from "../api/baseURL";

import AddSubject from "./add/AddSubject";
import EditSubject from "./edit/EditSubject";
import SubjectList from "./list/SubjectList";
import Modal from "./Modal";

const Subject = () => {
  const [subjects, setSubjects] = useState([]);
  const [editnameSubject, setEditnameSubject] = useState("");

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

  const deleteSubject = async (id) => {
    try {
      await api.delete(`subject/${id}`);
      setSubjects(subjects.filter((subject) => subject.idSubject !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  const editSubject = async (id) => {
    const updatedSubject = { id, nameSubject: editnameSubject };
    try {
      const response = await api.put(`/subject/${id}`, updatedSubject);
      setSubjects(
        subjects.map((subject) =>
          //if not, we keep the subject as it is because we didnt update it
          subject.idSubject === id ? { ...response.data } : subject
        )
      );
      setEditnameSubject("");
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
      <Modal open={isOpen}>
        <AddSubject
          subjects={subjects}
          setSubjects={setSubjects}
          setIsOpen={setIsOpen}
        />
      </Modal>

      <Modal open={isOpen}>
        <EditSubject
          subjects={subjects}
          editnameSubject={editnameSubject}
          setEditnameSubject={setEditnameSubject}
          editSubject={editSubject}
          setIsOpen={setIsOpen}
        />
      </Modal>

      <SubjectList
        subjects={subjects}
        setIsOpen={setIsOpen}
        editSubject={editSubject}
        deleteSubject={deleteSubject}
      />
    </>
  );
};

export default Subject;

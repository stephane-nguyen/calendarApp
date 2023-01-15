import React, { useState, useEffect } from "react";
import api from "../api/baseURL";

import AddSubject from "./add/AddSubject";
import EditSubject from "./edit/EditSubject";
import SubjectList from "./list/SubjectList";
import Modal from "./Modal";

const Subject = () => {
  const [subjects, setSubjects] = useState([]);
  const [id, setId] = useState(null);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

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

  return (
    <>
      <Modal open={isAddOpen}>
        <AddSubject
          subjects={subjects}
          setSubjects={setSubjects}
          closeModal={() => {
            setIsAddOpen(false);
          }}
        />
      </Modal>

      <Modal open={isEditOpen}>
        <EditSubject
          subjects={subjects}
          setSubjects={setSubjects}
          id={id}
          closeModal={() => setIsEditOpen(false)}
        />
      </Modal>

      <SubjectList
        subjects={subjects}
        setId={setId}
        setIsAddOpen={setIsAddOpen}
        setIsEditOpen={setIsEditOpen}
        deleteSubject={deleteSubject}
      />
    </>
  );
};

export default Subject;

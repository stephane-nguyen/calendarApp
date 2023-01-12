import React from "react";
import { useState, useEffect } from "react";
import api from "../api/baseURL";
import StudentList from "./list/StudentList";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await api.get("/student");
        setStudents(response.data);
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
    getAllStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await api.delete(`student/${id}`);
      setStudents(students.filter((student) => student.id_student !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
      <StudentList students={students} deleteStudent={deleteStudent} />
    </>
  );
}

export default Student;

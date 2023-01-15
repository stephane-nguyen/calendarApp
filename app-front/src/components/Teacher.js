import React from "react";
import { useState, useEffect } from "react";
import api from "../api/baseURL";
import TeacherList from "./list/TeacherList";

function Teacher() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await api.get("/teacher");
        setTeachers(response.data);
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
    getAllTeachers();
  }, [teachers]);

  const deleteTeacher = async (id) => {
    try {
      await api.delete(`user/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.id_teacher !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
      <TeacherList teachers={teachers} deleteTeacher={deleteTeacher} />
    </>
  );
}

export default Teacher;

import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Login from "./components/Login";

import Subject from "./components/Subject";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Speciality from "./components/Speciality";

import AddStudent from "./components/add/AddStudent";
import EditStudent from "./components/edit/EditStudent";

import AddTeacher from "./components/add/AddTeacher";
import EditTeacher from "./components/edit/EditTeacher";

import AddSpeciality from "./components/add/AddSpeciality";
import EditSpeciality from "./components/edit/EditSpeciality";

const ROLES = {
  Student: 2000,
  Teacher: 1900,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public/student routes */}
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* private/teacher routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Teacher]} />}> */}

        <Route path="/student" element={<Student />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student/:id" element={<EditStudent />} />

        <Route path="/teacher" element={<Teacher />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/teacher/:id" element={<EditTeacher />} />

        <Route path="/speciality" element={<Speciality />} />
        <Route path="/add-speciality" element={<AddSpeciality />} />
        <Route path="/speciality/:id" element={<EditSpeciality />} />


        <Route path="/subject" element={<Subject />} />
        {/* </Route> */}

        {/* catch all path */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

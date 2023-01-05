import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Login from "./components/Login";

import Subject from "./components/Subject";

import User from "./components/User";
import AddUser from "./components/add/AddUser";
import EditUser from "./components/edit/EditUser";

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
        <Route path="/user" element={<User />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user/:id" element={<EditUser />} />
        <Route path="/subject" element={<Subject />} />
        {/* </Route> */}

        {/* catch all path */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

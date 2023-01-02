import { Routes, Route } from "react-router-dom";

import "./App.css";
import AddUserComponent from "./components/add/AddUserComponent";
import { Layout } from "./components/Layout";
import UserListComponent from "./components/UserListComponent";

import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import SubjectList from "./components/SubjectList";

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
        <Route path="/user" element={<UserListComponent />} />
        <Route path="/add-user" element={<AddUserComponent />} />
        <Route path="/subject" element={<SubjectList />} />
        {/* </Route> */}

        {/* catch all path */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

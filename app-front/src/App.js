import { Routes, Route } from "react-router-dom";

import "./App.css";
import AddUser from "./components/add/AddUser";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Unauthorized from "./components/Unauthorized";
import Subject from "./components/Subject";
import User from "./components/User";

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
        <Route path="/subject" element={<Subject />} />
        {/* </Route> */}

        {/* catch all path */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

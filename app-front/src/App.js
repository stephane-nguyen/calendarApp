import { Routes, Route } from "react-router-dom";

import "./App.css";
import AddUserComponent from "./components/add/AddUserComponent";
import { Layout } from "./components/Layout";
import UserListComponent from "./components/UserListComponent";

import Navbar from "./Navbar";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./components/NotFound";
import Unauthorized from "./components/Unauthorized";

const ROLES = {
  Student: 2000,
  Teacher: 1900,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public/student routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* private/teacher routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Teacher]} />}>
          <Route path="/user" element={<UserListComponent />} />
          <Route path="/add-user" element={<AddUserComponent />} />
        </Route>

        {/* catch all path */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import AddUserComponent from "./components/add/AddUserComponent";
import UserListComponent from "./components/UserListComponent";
import SubjectListComponent from "./components/SubjectListComponent";

import Home from "./components/Home";
import Navbar from "./Navbar";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserListComponent />} />
            <Route path="/subject" element={<SubjectListComponent />} />
            <Route path="/add-user" element={<AddUserComponent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

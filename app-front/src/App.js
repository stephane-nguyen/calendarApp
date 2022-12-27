import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import AddUserComponent from './components/add/AddUserComponent';
import UserListComponent from './components/UserListComponent';

import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserListComponent />} />
            <Route path="/add-user" element={<AddUserComponent />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

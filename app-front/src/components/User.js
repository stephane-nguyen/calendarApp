import React from "react";
import { useState, useEffect } from "react";
import api from "../api/baseURL";
import UserList from "./list/UserList";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await api.get("/user");
        setUsers(response.data);
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
    getAllUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await api.delete(`user/${id}`);
      setUsers(users.filter((user) => user.idUser !== id));
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  };

  return (
    <>
      <UserList users={users} deleteUser={deleteUser} />
    </>
  );
}

export default User;

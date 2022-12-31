import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layout = () => {
  return (
    //Outlet = all children of the component
    <main className="App">
      <Navbar />
      <Outlet />
    </main>
  );
};

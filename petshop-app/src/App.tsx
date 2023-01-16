
import path from "node:path/win32";
import { useState } from "react";
import "./App.css";
import MainRoutes from "./MainRoutes";
import { Footer } from "./MyComponents/Footer";
import Navbar from "./MyComponents/Navbar";
import React, { Component, Suspense } from "react";

import "./App.css";
import Order1 from "./MyComponents/Order1";
import Users from "./MyComponents/Users";





function App() {

  return (
    <div>
      <Navbar></Navbar>
      {/* <Order1></Order1> */}
      <MainRoutes></MainRoutes>
      <Footer></Footer>
      {/* <Demo></Demo> */}


    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Home from "./components/home/home";
import SearchFood from "./components/searchFood/searchFood";
import Food from "./components/foodForm/food";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchFood" element={<SearchFood />} />
        <Route path="/food" element={<Food />} />
        <Route path="/register" element={<Signup />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
        {/* NESTED ROUTES */}
        {/* <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:userId/edit" element={<AdminUpdate />} />
          </Route> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;

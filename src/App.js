import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";


function App() {
  const [currUser, setCurrUser] = useState("");

  const setUser = (user) => {
    setCurrUser(user)
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={currUser ? <Home user={currUser} /> : <Login setUser={setUser} /> } />
      <Route path="/login" element={!currUser && <Login setUser={setUser} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

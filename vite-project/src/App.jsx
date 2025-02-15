import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NumContext } from "./Contexts/NumContext";
import SignIn from "./Pages/SignIn";
import Homepage from "./Pages/Homepage";

const App = () => {
  const [num, setNum] = useState("");
  const [prevNum, setPrevNum] = useState("");

  return (
    <NumContext.Provider value={{ num, setNum, prevNum, setPrevNum }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </NumContext.Provider>
  );
};

export default App;

import React from "react";
import Home from './routes/Home.jsx'

// Router
import {Routes, Route } from 'react-router-dom';
// components
import Detail from "./routes/Detail.jsx"

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

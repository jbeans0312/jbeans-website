import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import "./App.css";

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import { NavigationBar } from "./components/NavigationBar";
import "./App.css";

function App(): JSX.Element {
    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;

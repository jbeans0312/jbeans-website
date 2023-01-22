import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NavigationBar } from "./components/NavigationBar";
import "./App.css";

function App(): JSX.Element {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

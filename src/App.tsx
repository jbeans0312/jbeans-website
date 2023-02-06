import React from "react";
import { Home } from "./pages/Home";
import { NavigationBar } from "./components/NavigationBar";
import "./App.css";

function App(): JSX.Element {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container">
                <Home></Home>
            </div>
        </div>
    );
}

export default App;

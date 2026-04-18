import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import TaskDetails from "./pages/TaskDetails";
import { useState } from "react";

function App() {
    // todo: move to context maybe ??
    const [userIcon, setUserIcon] = useState(localStorage.getItem("userIcon") || "User");
    const updateIcon = (label) => {
        setUserIcon(label);
        localStorage.setItem("userIcon", label);
    };

    return (
        <>
            {/* <BrowserRouter> */}
            <BrowserRouter basename="/react-todo-app">
                <Header userIconLabel={userIcon} />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile updateIcon={updateIcon} />} />
                    <Route path="/task/:taskId" element={<TaskDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

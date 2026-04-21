import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import TaskDetails from "./pages/TaskDetails";
import { useState } from "react";

function App() {
    // todo: move to context maybe ??
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [userIcon, setUserIcon] = useState(localStorage.getItem("userIcon") || "User");

    const updateUsername = (username) => {
        setUsername(username);
        localStorage.setItem("username", username);
    };
    const updateIcon = (label) => {
        setUserIcon(label);
        localStorage.setItem("userIcon", label);
    };

    return (
        <>
            {/* <BrowserRouter> */}
            <BrowserRouter basename="/react-todo-app">
                <div className="min-h-screen flex flex-col">
                    <Header username={username} userIconLabel={userIcon} />
                    <main className="flex-1 flex flex-col bg-slate-200">
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/profile"
                                element={
                                    <Profile
                                        username={username}
                                        updateUsername={updateUsername}
                                        userIconLabel={userIcon}
                                        updateIcon={updateIcon}
                                    />
                                }
                            />
                            <Route path="/task/:taskId" element={<TaskDetails />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

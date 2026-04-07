import React, { useState, useEffect } from "react";
// import {
//     FaUser,
//     FaUserSecret,
// } from "react-icons/fa6";

const savedTasks = JSON.parse(localStorage.getItem("userTasks")) || [];

function Profile() {
    const [username, setUsername] = useState(() => {
        const value = JSON.parse(localStorage.getItem("username"));
        return value || "Anonymous User";
    });

    const [usernameInput, setUsernameInput] = useState(username);

    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(username));
    }, [username]);

    const handleUsernameChange = (event) => {
        // console.log("username change");
        // console.log(event.target.value);
        setUsernameInput(event.target.value);
    };

    const handleUsernameSave = () => {
        // console.log("username save");
        // console.log(usernameInput);
        setUsername(usernameInput);
        if (!usernameInput) setUsernameInput("Anonymous User");
    };

    return (
        <div className="min-h-screen bg-slate-200 p-4 md:p-8 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-6 h-fit">
                {/* todo: user icons :( */}
                {/* username input */}
                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        type="text"
                        value={usernameInput}
                        onChange={handleUsernameChange}
                        placeholder="What should we call you?"
                        className="flex-1 rounded-xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"
                    />

                    <button
                        className="rounded-xl px-4 py-2 bg-slate-600  hover:bg-slate-700 text-white font-medium"
                        onClick={handleUsernameSave}
                    >
                        Save
                    </button>
                </div>

                <div className="space-y-2 text-slate-800">
                    <p className="text-lg font-medium">
                        You added{" "}
                        <span className="font-bold">{savedTasks.length}</span>{" "}
                        tasks so far.
                    </p>

                    <p>
                        You completed{" "}
                        <span className="font-bold">
                            {savedTasks.filter((task) => task.completed).length}
                        </span>{" "}
                        of them. Good job!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdSave } from "react-icons/md";

// import {
//     FaUser,
//     FaUserSecret,
// } from "react-icons/fa6";

function Profile() {
    const savedTasks = JSON.parse(localStorage.getItem("userTasks")) || [];
    const [username, setUsername] = useState(() => {
        const value = JSON.parse(localStorage.getItem("username"));
        return value || "Anonymous User";
    });

    const handleUsernameChange = (event) => {
        // console.log("username change");
        // console.log(event.target.value);
        setUsername(event.target.value);
    };

    const handleUsernameSave = () => {
        // console.log("username save");
        localStorage.setItem("username", JSON.stringify(username === "Anonymous User" ? "" : username));
        alert("Username updated!");
    };

    // todo: clear my data button or smth
    return (
        <div className="min-h-screen bg-slate-200 p-4 md:p-8 flex justify-center shadow-md">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-6 h-fit">
                {/* todo: user icons :( */}
                {/* username input */}
                <div className="flex flex-col md:flex-row gap-3 w-full relative">
                    {/* todo: maybe consider using floating labels */}
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="What should we call you?"
                        className="w-full rounded-3xl border border-sky-950/40 bg-gray-50/80 px-4 py-2 pe-11
                            outline-none focus:ring-1 focus:ring-sky-900/70 transition-all ease-in"
                    />

                    <button
                        className="absolute end-0 top-1/2 mx-1 h-[85%] -translate-y-1/2 transform rounded-3xl p-2
                            bg-sky-900/80 text-white enabled:hover:bg-sky-900/90 transition-all"
                        onClick={handleUsernameSave}
                    >
                        {/* Save */}
                        <MdSave className="h-full w-full" />
                    </button>
                </div>

                <div className="space-y-2 text-slate-800">
                    <p className="text-lg font-medium">
                        You added <span className="font-bold">{savedTasks.length}</span> tasks so far.
                    </p>

                    <p>
                        You completed{" "}
                        <span className="font-bold">{savedTasks.filter((task) => task.completed).length}</span> of them.
                        Good job!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdSave } from "react-icons/md";

import {
    FaUser,
    FaUserSecret,
    FaUserAstronaut,
    FaUserNinja,
    FaUserTie,
    FaUserNurse,
    FaUserDoctor,
    FaUserGraduate,
    FaUserInjured,
} from "react-icons/fa6";

const icons = [
    { component: FaUser, label: "User" },
    { component: FaUserTie, label: "Tie" },
    { component: FaUserNurse, label: "Nurse" },
    { component: FaUserDoctor, label: "Doctor" },
    { component: FaUserSecret, label: "Secret" },
    { component: FaUserGraduate, label: "Graduate" },
    { component: FaUserAstronaut, label: "Astronaut" },
    { component: FaUserNinja, label: "Ninja" },
    { component: FaUserInjured, label: "Injured" },
];

// todo: momken n2asem el saf7a l 7eteten wa7da zy settings wl tanya zy your stats aw 7aga keda ya3ni..
// 34an bsara7a say7a awi kedaaa

function Profile({ updateIcon }) {
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

    const handleUserIconChange = (event) => {
        // console.log(event.target.value);
        localStorage.setItem("userIcon", event.target.value);
        updateIcon(event.target.value);
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

                <div className="">
                    <p className="text-sm font-medium ms-2 mb-2">Your Icon</p>
                    <div className="grid grid-cols-3 min-[380px]:grid-cols-4 min-[500px]:grid-cols-5 gap-3">
                        {icons.map(({ component: Icon, label }) => (
                            <label
                                key={label}
                                className="p-2 w-fit m-auto rounded-xl border border-slate-400/40 bg-slate-50
                                    text-slate-800 has-[input:checked]:border-2 has-[input:checked]:border-slate-500
                                    hover:border-slate-500/40 hover:border-2 transition-all duration-50"
                            >
                                <input
                                    className="hidden"
                                    name="icon"
                                    type="radio"
                                    value={label}
                                    onClick={handleUserIconChange}
                                />
                                <Icon className="w-8 h-8" />
                            </label>
                        ))}
                    </div>
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
